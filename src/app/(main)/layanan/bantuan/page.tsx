"use client";

import { useState, type FormEvent } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HelpCircle,
  Mail,
  Phone,
  User,
  Home,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Sidebar from "@/components/layouts/sidebar";

// Mock data jenis izin
const jenisIzinOptions = [
  { value: "0", label: "-- Pilih Izin --" },
  { value: "1", label: "Izin Pemanfaatan Ruang" },
  { value: "2", label: "Izin Operasional" },
];

export default function BantuanSection() {
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    kelurahan: "",
    kecamatan: "",
    email: "",
    telepon: "",
    jenis_izin: "0",
    isi: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};

    // Required fields
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.telepon.trim()) newErrors.telepon = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulasi API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      // Reset form setelah submit (kecuali data yang ditampilkan di success screen)
      setFormData((prev) => ({
        ...prev,
        nama: "",
        alamat: "",
        kelurahan: "",
        kecamatan: "",
        jenis_izin: "0",
        isi: "",
      }));
    }, 1500);
  };

  return (
    <section className="w-full py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 mt-10">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/layanan">Layanan</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Bantuan</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Layanan Bantuan
          </h1>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />

          <p className="text-gray-600 mt-6 max-w-3xl">
            Hubungi kami jika Anda membutuhkan bantuan terkait perizinan. Tim
            DPMPTSP Kota Bogor siap membantu menyelesaikan permasalahan yang
            Anda hadapi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {!isSubmitted ? (
              <Card className="border shadow-sm rounded-2xl overflow-hidden">
                <CardContent>
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 rounded-xl">
                        <HelpCircle className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          Form Layanan Bantuan
                        </h2>
                        <p className="text-gray-600">
                          Isi form di bawah ini untuk mengajukan bantuan atau
                          pengaduan
                        </p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                        Informasi Pribadi
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="nama"
                            className="text-sm font-medium text-gray-700 flex items-center gap-2"
                          >
                            <User className="w-4 h-4" />
                            Nama Lengkap
                          </label>
                          <Input
                            id="nama"
                            placeholder="Nama sesuai KTP"
                            value={formData.nama}
                            onChange={(e) =>
                              handleInputChange("nama", e.target.value)
                            }
                            className="bg-white"
                          />
                          <p className="text-xs text-gray-500">
                            Wajib diisi sesuai Kartu Tanda Penduduk
                          </p>
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700 flex items-center gap-2"
                          >
                            <Mail className="w-4 h-4" />
                            Email *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="email@contoh.com"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className={`bg-white ${errors.email ? "border-red-500" : ""
                              }`}
                            required
                          />
                          {errors.email && (
                            <p className="text-xs text-red-500">
                              Email wajib diisi
                            </p>
                          )}
                          <p className="text-xs text-red-500">
                            * Mohon alamat Email dipastikan benar, untuk
                            memberikan balasan atas pengaduan Anda.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="telepon"
                            className="text-sm font-medium text-gray-700 flex items-center gap-2"
                          >
                            <Phone className="w-4 h-4" />
                            Telepon *
                          </label>
                          <Input
                            id="telepon"
                            placeholder="0812-3456-7890"
                            value={formData.telepon}
                            onChange={(e) =>
                              handleInputChange("telepon", e.target.value)
                            }
                            className={`bg-white ${errors.telepon ? "border-red-500" : ""
                              }`}
                            required
                          />
                          {errors.telepon && (
                            <p className="text-xs text-red-500">
                              Telepon wajib diisi
                            </p>
                          )}
                          <p className="text-xs text-red-500">
                            * Mohon Nomor Telepon dipastikan benar, untuk
                            memberikan balasan atas pengaduan Anda.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="jenis_izin"
                            className="text-sm font-medium text-gray-700"
                          >
                            Jenis Izin
                          </label>
                          <Select
                            value={formData.jenis_izin}
                            onValueChange={(value) =>
                              handleInputChange("jenis_izin", value)
                            }
                          >
                            <SelectTrigger className="bg-white">
                              <SelectValue placeholder="-- Pilih Izin --" />
                            </SelectTrigger>
                            <SelectContent>
                              {jenisIzinOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="alamat"
                          className="text-sm font-medium text-gray-700 flex items-center gap-2"
                        >
                          <Home className="w-4 h-4" />
                          Alamat Lengkap
                        </label>
                        <Input
                          id="alamat"
                          placeholder="Alamat sesuai KTP"
                          value={formData.alamat}
                          onChange={(e) =>
                            handleInputChange("alamat", e.target.value)
                          }
                          className="bg-white"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="kelurahan"
                            className="text-sm font-medium text-gray-700"
                          >
                            Kelurahan
                          </label>
                          <Input
                            id="kelurahan"
                            placeholder="Kelurahan"
                            value={formData.kelurahan}
                            onChange={(e) =>
                              handleInputChange("kelurahan", e.target.value)
                            }
                            className="bg-white"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="kecamatan"
                            className="text-sm font-medium text-gray-700"
                          >
                            Kecamatan
                          </label>
                          <Input
                            id="kecamatan"
                            placeholder="Kecamatan"
                            value={formData.kecamatan}
                            onChange={(e) =>
                              handleInputChange("kecamatan", e.target.value)
                            }
                            className="bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5" />
                        Isi Pengaduan dan Informasi
                      </h3>

                      <div className="space-y-2">
                        <Textarea
                          id="isi"
                          placeholder="Tuliskan pengaduan atau permintaan bantuan Anda di sini..."
                          rows={6}
                          value={formData.isi}
                          onChange={(e) =>
                            handleInputChange("isi", e.target.value)
                          }
                          className="bg-white min-h-[150px]"
                        />
                        <p className="text-sm text-gray-500">
                          Jelaskan secara detail permasalahan yang Anda hadapi
                          untuk mempermudah kami memberikan bantuan
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full md:w-auto bg-primary hover:bg-blue-700 text-white px-8 py-6 text-lg"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                            Mengirim...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Kirim Pengaduan
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              /* Success Screen */
              <Card className="border shadow-sm rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Terima Kasih
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                      Pengaduan Anda telah berhasil dikirim. Tim kami akan
                      segera meninjau dan memberikan respon melalui email atau
                      telepon yang Anda berikan.
                    </p>

                    <div className="bg-gray-50 rounded-xl p-6 max-w-2xl mx-auto text-left">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Data Pengaduan Anda:
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">
                            Email
                          </p>
                          <p className="text-gray-900">{formData.email}</p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500">
                            Telepon
                          </p>
                          <p className="text-gray-900">{formData.telepon}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200 max-w-2xl mx-auto">
                      <h4 className="font-semibold text-blue-800 mb-3">
                        ⏱️ Proses Tindak Lanjut
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Selanjutnya data tersebut di atas akan Kami lakukan
                        evaluasi. Bila perlu akan menghubungi Anda, dan Anda
                        tidak perlu membuat pengaduan baru. Silahkan menunggu
                        balasan dari Kami.
                      </p>
                      <p className="text-blue-800 font-semibold mt-4">
                        Terima Kasih,
                      </p>
                    </div>

                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="mt-8"
                    >
                      Kirim Pengaduan Lainnya
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="border shadow-sm rounded-2xl overflow-hidden mt-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Komunikasi Masyarakat
                  </h3>
                </div>

                <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200">
                  <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">
                    Data Tidak Ditemukan
                  </h4>
                  <p className="text-gray-500">
                    Belum ada data komunikasi masyarakat yang tersedia saat ini.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <Sidebar activeId={5} />
        </div>
      </div>
    </section>
  );
}
