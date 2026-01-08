// components/HeroSection.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  ExternalLink,
  FileCheck,
  ShieldCheck,
  Building,
  FileText,
  ClipboardCheck,
  BookOpen,
  Users,
  Phone,
  HelpCircle,
  TrendingUp,
  Megaphone,
  Landmark,
  MessageCircle,
  Eye,
  ChevronDown,
  ChevronUp,
  Grid,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const slides = [
  { src: "/images/hersec.jpg", alt: "Gedung pemerintahan modern" },
];

const websiteShortcuts = [
  {
    title: "Perizinan Online",
    url: "/login/",
    icon: FileCheck,
    description: "Ajukan perizinan",
  },
  {
    title: "OSS RBA",
    url: "https://oss.go.id/",
    icon: ShieldCheck,
    description: "Online Single Submission",
  },
  {
    title: "SIMBG",
    url: "https://simbg.pu.go.id/",
    icon: Building,
    description: "Sistem Informasi",
  },
  {
    title: "MPP",
    url: "https://mpp.kotabogor.go.id/",
    icon: Landmark,
    description: "Mal Pelayanan Publik",
  },
  {
    title: "Jenis & Syarat",
    url: "/informasi/perizinan/jenis-dan-syarat",
    icon: FileText,
    description: "Informasi persyaratan",
  },
  {
    title: "Survey Persepsi",
    url: "/informasi/publik/",
    icon: ClipboardCheck,
    description: "SPAK",
  },
  {
    title: "Info Perizinan",
    url: "/informasi/perizinan/",
    icon: Eye,
    description: "Informasi lengkap",
  },
  {
    title: "Tracking Berkas",
    url: "/layanan/tracking-berkas",
    icon: Search,
    description: "Lacak berkas",
  },
  {
    title: "Regulasi",
    url: "/informasi/perizinan/peraturan-dan-regulasi/",
    icon: BookOpen,
    description: "Peraturan terkait",
  },
  {
    title: "Kunjungan",
    url: "/layanan/kunjungan/",
    icon: Users,
    description: "Data kunjungan",
  },
  {
    title: "Bantuan",
    url: "/layanan/bantuan",
    icon: HelpCircle,
    description: "Pusat bantuan",
  },
  {
    title: "Realisasi Investasi",
    url: "/penanaman-modal/realisasi-investasi/",
    icon: TrendingUp,
    description: "Data investasi",
  },
  {
    title: "Promosi Daerah",
    url: "/penanaman-modal/promosi-investasi/",
    icon: Megaphone,
    description: "UMKM & Promosi",
  },
  {
    title: "SABET SIMASDA",
    url: "https://simasda.kotabogor.go.id/sewa/aset/manfaat",
    icon: Landmark,
    description: "Sewa Aset Elektronik",
  },
  {
    title: "Call Center",
    url: "https://api.whatsapp.com/send/?phone=08119004440&text&type=phone_number&app_absent=0",
    icon: Phone,
    description: "WhatsApp",
  },
  {
    title: "PPID",
    url: "/layanan/",
    icon: MessageCircle,
    description: "Informasi Publik",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [showAllShortcuts, setShowAllShortcuts] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const shortcutsToShow = showAllShortcuts
    ? websiteShortcuts
    : websiteShortcuts.slice(0, 6);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-linear-to-br from-gray-900 to-blue-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-[-1]"
            }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover brightness-[0.3]"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/40 z-10"></div>

      <div className="relative z-20 px-4 pb-20 pt-16 md:pb-64">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mt-20  mb-6 md:mb-12 px-4">
            <Badge
              variant="secondary"
              className="mb-4 text-sm md:text-base px-4 py-1 bg-white/20 text-white border-none"
            >
              Selamat Datang di Website
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Dinas Penanaman Modal dan <br /> Pelayanan Terpadu Satu Pintu
            </h1>
            <p className="text-xl md:text-xl text-gray-200 mx-auto font-light">
              Melayani masyarakat dengan profesional, transparan, dan akuntabel
            </p>
          </div>

          {/* Website Shortcuts Section */}
          <div className="bg-white/10 backdrop-blur-xl p-8  rounded-4xl border border-white/20 shadow-2xl shadow-black/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Akses Cepat Layanan
                </h2>
                <p className="text-gray-200 text-lg">
                  Pilih layanan yang Anda butuhkan
                </p>
              </div>

              {/* Counter */}
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20">
                <Grid className="w-4 h-4 text-white" />
                <span className="text-white font-semibold">
                  {showAllShortcuts ? websiteShortcuts.length : 6} dari{" "}
                  {websiteShortcuts.length} layanan
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-5">
              {shortcutsToShow.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <div
                      className="relative h-full rounded-2xl overflow-hidden bg-primary shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-white/20 hover:border-white/40"
                      style={{
                        opacity: isHovered === index ? 0.95 : 1,
                        transform:
                          isHovered === index
                            ? "translateY(-8px)"
                            : "translateY(0)",
                      }}
                    >
                      <div className="p-4 md:p-5 h-full flex flex-col items-center justify-center text-center">
                        {/* Icon Container */}
                        <div className="mb-3 md:mb-4 p-3 rounded-xl bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                          <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:text-white/95 transition-colors duration-300" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm md:text-base mb-1 line-clamp-2 text-white group-hover:text-white/95 transition-colors">
                            {item.title}
                          </h3>
                          {item.description && (
                            <p className="text-xs text-white/80 group-hover:text-white/95 transition-colors line-clamp-2">
                              {item.description}
                            </p>
                          )}
                        </div>

                        <div
                          className="
    absolute top-3 right-3
    opacity-0 scale-90
    group-hover:opacity-100 group-hover:scale-100
    transition-all duration-300
  "
                        >
                          <ExternalLink className="w-4 h-4 text-white/80 group-hover:text-white" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* View All Button */}
            {!showAllShortcuts && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setShowAllShortcuts(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <ChevronDown className="w-5 h-5" />
                  Lihat Semua {websiteShortcuts.length} Layanan
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Show Less Button */}
            {showAllShortcuts && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setShowAllShortcuts(false)}
                  className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <ChevronUp className="w-5 h-5" />
                  Tampilkan Sedikit
                  <ChevronUp className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Footer Note */}
            <div
              className={`mt-8 pt-6 border-t border-white/20 ${showAllShortcuts ? "opacity-75" : ""
                }`}
            >
              <p className="text-center text-white/90 text-sm md:text-base">
                <span className="text-white font-semibold">
                  {websiteShortcuts.length} layanan
                </span>{" "}
                tersedia untuk memudahkan Anda
              </p>
              <p className="text-center text-white/70 text-xs md:text-sm mt-1">
                Klik salah satu kartu untuk mengakses langsung ke layanan
                terkait
              </p>
            </div>
          </div>

          {/* Stats or Additional Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-2xl md:text-3xl font-bold text-white">17+</p>
              <p className="text-white/80 text-sm">Layanan Digital</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-2xl md:text-3xl font-bold text-white">24/7</p>
              <p className="text-white/80 text-sm">Akses Online</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-2xl md:text-3xl font-bold text-white">100%</p>
              <p className="text-white/80 text-sm">Transparan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 md:h-60 bg-linear-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 w-full h-48 md:h-72 z-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-white/95 via-white/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-white/30 blur-sm opacity-80"></div>
      </div>
    </section>
  );
}
