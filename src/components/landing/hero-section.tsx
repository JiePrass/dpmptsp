// components/HeroSection.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const slides = [
  { src: "/bg1.jpg", alt: "Gedung pemerintahan modern" },
  { src: "/bg2.jpeg", alt: "Kantor pemerintahan" },
  { src: "/bg3.webp", alt: "Tim kerja pemerintahan" },
];

const shortcuts = [
  "Perizinan Usaha",
  "Izin Mendirikan Bangunan",
  "Nomor Induk Berusaha",
  "Sertifikat Standar",
  "Pelaporan Online",
  "Dokumen Publik",
];

// Schema validasi form
const searchSchema = z.object({
  category: z.string({
    required_error: "Pilih kategori pencarian",
  }),
  query: z.string().min(1, "Masukkan kata kunci pencarian"),
});

type SearchFormValues = z.infer<typeof searchSchema>;

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedShortcuts, setSelectedShortcuts] = useState<string[]>([]);

  // Inisialisasi form dengan react-hook-form dan zod
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      category: "dokumen",
      query: "",
    },
  });

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleShortcutClick = (shortcut: string) => {
    const currentValue = form.getValues("query");
    const newValue = currentValue ? `${currentValue}, ${shortcut}` : shortcut;
    form.setValue("query", newValue);

    // Highlight shortcut yang dipilih
    if (!selectedShortcuts.includes(shortcut)) {
      setSelectedShortcuts([...selectedShortcuts, shortcut]);
    }
  };

  const handleSearch = (data: SearchFormValues) => {
    // Handle search logic here
    console.log("Searching for:", data.query, "in category:", data.category);

    // Reset selected shortcuts setelah search
    setSelectedShortcuts([]);
  };

  const removeShortcut = (shortcut: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedShortcuts(selectedShortcuts.filter(s => s !== shortcut));

    // Hapus dari query jika ada
    const currentValue = form.getValues("query");
    const updatedValue = currentValue
      .split(', ')
      .filter(item => item !== shortcut)
      .join(', ');

    form.setValue("query", updatedValue);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden pb-2">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-[-1]"
            }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover brightness-50"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/20 z-10"></div>

      <div className="absolute inset-0 flex justify-center items-center z-20 px-4">
        <div className="text-center max-w-4xl w-full mt-64">
          <p className="text-lg md:text-xl font-medium text-white mb-2 drop-shadow-lg">
            Selamat datang di website
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
            <span className="text-primary">Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu</span>
            <br />
            <span className="text-white">Kota Bogor</span>
          </h1>
          <p className="text-base md:text-lg font-medium text-white mb-8 drop-shadow-lg">
            Melayani masyarakat dengan profesional dan transparan
          </p>

          {/* Form Pencarian */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSearch)} className="max-w-4xl mx-auto">
              <Card className="bg-blue-500/30 backdrop-blur-2xl border-white/30 shadow-2xl shadow-black/20">
                <CardContent className="p-4 md:p-6">
                  {/* Header Pencarian */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    {/* Pilihan Kategori */}
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem className="flex-shrink-0 w-full sm:w-[200px]">
                          <FormLabel className="sr-only">
                            Pilih kategori pencarian
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-12 border-white/40 bg-white/80 backdrop-blur-sm text-gray-800">
                                <SelectValue placeholder="Pilih kategori" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="dokumen">Cari Publikasi</SelectItem>
                              <SelectItem value="berita">Cari Berita</SelectItem>
                              <SelectItem value="aset">Sewa Aset Daerah</SelectItem>
                              <SelectItem value="perizinan">Perizinan</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-white" />
                        </FormItem>
                      )}
                    />

                    {/* Input Pencarian */}
                    <div className="flex-1">
                      <FormField
                        control={form.control}
                        name="query"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="sr-only">
                              Masukkan kata kunci pencarian
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  {...field}
                                  placeholder="Masukkan kata kunci..."
                                  className="h-12 pl-12 border-white/40 bg-white/80 backdrop-blur-sm text-gray-800"
                                />
                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                  <Search className="w-5 h-5 text-gray-400" />
                                </div>
                              </div>
                            </FormControl>
                            <FormMessage className="text-white" />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Tombol Cari */}
                    <Button
                      type="submit"
                      className="h-12 px-6 bg-blue-600/90 backdrop-blur-sm text-white hover:bg-blue-700/90 border-blue-500/30 hover:border-blue-400/50"
                    >
                      <Search className="w-5 h-5" />
                      <span className="hidden sm:inline ml-2">Cari</span>
                    </Button>
                  </div>

                  {/* Shortcut List */}
                  <div className="border-t border-white/30 pt-4">
                    <p className="text-sm text-white/80 mb-3 text-left">Cari cepat:</p>
                    <div className="flex flex-wrap gap-2">
                      {shortcuts.map((shortcut) => (
                        <Badge
                          key={shortcut}
                          variant={
                            selectedShortcuts.includes(shortcut)
                              ? "default"
                              : "outline"
                          }
                          className={`cursor-pointer px-3 py-2 text-sm backdrop-blur-sm transition-all duration-300 ${selectedShortcuts.includes(shortcut)
                            ? "bg-white/30 text-white border-white/40"
                            : "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40"
                            }`}
                          onClick={() => handleShortcutClick(shortcut)}
                        >
                          {shortcut}
                          {selectedShortcuts.includes(shortcut) && (
                            <button
                              type="button"
                              onClick={(e) => removeShortcut(shortcut, e)}
                              className="ml-2 text-xs rounded-full w-4 h-4 flex items-center justify-center hover:bg-white/20"
                              aria-label={`Hapus ${shortcut}`}
                            >
                              ×
                            </button>
                          )}
                        </Badge>
                      ))}
                    </div>

                    {/* Selected Shortcuts Display */}
                    {selectedShortcuts.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-white/20">
                        <div className="flex items-center gap-2 text-sm text-white/80">
                          <span>Pilihan Anda:</span>
                          <div className="flex flex-wrap gap-1">
                            {selectedShortcuts.map((shortcut) => (
                              <Badge
                                key={shortcut}
                                variant="secondary"
                                className="text-xs bg-white/20 text-white border-white/30"
                              >
                                {shortcut}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Info Tambahan */}
              <div className="mt-4 text-white/70 text-sm">
                <p>Gunakan shortcut di atas untuk pencarian cepat atau ketik langsung di kolom pencarian</p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}