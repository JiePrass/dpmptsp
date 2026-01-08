"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { FileText, User, CreditCard, Home, Phone, Mail, HelpCircle, ChevronRight, Send, CheckCircle, Download, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Sidebar from "@/components/layouts/sidebar";

export default function KunjunganSection() {
  const [formData, setFormData] = useState({
    nama: "",
    ktp: "",
    alamat: "",
    telepon: "",
    email: "",
    rincian_informasi: "",
    tujuan_pengguna: "",
    memperoleh_informasi: "",
    mendapatkan_salinan: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};
    
    // Required fields validation
    const requiredFields = ['nama', 'ktp', 'alamat', 'telepon', 'email', 
      'rincian_informasi', 'tujuan_pengguna', 'memperoleh_informasi', 'mendapatkan_salinan'];
    
    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData].trim()) {
        newErrors[field] = true;
      }
    });

    if (!file) {
      newErrors.file = true;
    }

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.emailFormat = true;
    }

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
      
      // Reset form setelah submit
      setFormData({
        nama: "",
        ktp: "",
        alamat: "",
        telepon: "",
        email: "",
        rincian_informasi: "",
        tujuan_pengguna: "",
        memperoleh_informasi: "",
        mendapatkan_salinan: "",
      });
      setFile(null);
    }, 1500);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 mt-10">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  Beranda
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/layanan">
                  Layanan
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Layanan Kunjungan
          </h1>
          <div className="w-24 h-1.5 bg-blue-600 rounded-full mb-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {!isSubmitted ? (
              <>
                {/* Informasi Tambahan */}
                <div className="mb-8">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <div className="flex items-start">
                      <HelpCircle className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-blue-800 font-medium mb-2">
                          Informasi Penting:
                        </p>
                        <ul className="text-blue-700 text-sm space-y-1 list-disc pl-4">
                          <li>Pastikan mengisi semua kolom yang wajib diisi</li>
                          <li>Unggah surat permohonan kunjungan dalam format PDF atau gambar</li>
                          <li>Tim kami akan menghubungi Anda via telepon setelah pengajuan disetujui</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <Card className="border shadow-sm rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    {/* Form Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-100 rounded-xl">
                          <FileText className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">
                            Form Permohonan Kunjungan
                          </h2>
                          <p className="text-gray-600">
                            Isi form di bawah ini untuk mengajukan permohonan kunjungan
                          </p>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                          Data Pribadi
                        </h3>
                        
                        <div className="grid grid-cols-1 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="nama" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                              <User className="w-4 h-4" />
                              Nama Lengkap *
                            </label>
                            <Input
                              id="nama"
                              placeholder="Nama sesuai KTP"
                              value={formData.nama}
                              onChange={(e) => handleInputChange("nama", e.target.value)}
                              className={`bg-white ${errors.nama ? "border-red-500" : ""}`}
                            />
                            {errors.nama && (
                              <p className="text-xs text-red-500">Nama lengkap wajib diisi</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="ktp" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                              <CreditCard className="w-4 h-4" />
                              Nomor Identitas (KTP/SIM) *
                            </label>
                            <Input
                              id="ktp"
                              placeholder="Nomor KTP/SIM"
                              value={formData.ktp}
                              onChange={(e) => handleInputChange("ktp", e.target.value)}
                              className={`bg-white ${errors.ktp ? "border-red-500" : ""}`}
                            />
                            {errors.ktp && (
                              <p className="text-xs text-red-500">Nomor identitas wajib diisi</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="alamat" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                              <Home className="w-4 h-4" />
                              Alamat *
                            </label>
                            <Input
                              id="alamat"
                              placeholder="Alamat lengkap"
                              value={formData.alamat}
                              onChange={(e) => handleInputChange("alamat", e.target.value)}
                              className={`bg-white ${errors.alamat ? "border-red-500" : ""}`}
                            />
                            {errors.alamat && (
                              <p className="text-xs text-red-500">Alamat wajib diisi</p>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label htmlFor="telepon" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                No. Telp/WA *
                              </label>
                              <Input
                                id="telepon"
                                placeholder="0812-3456-7890"
                                value={formData.telepon}
                                onChange={(e) => handleInputChange("telepon", e.target.value)}
                                className={`bg-white ${errors.telepon ? "border-red-500" : ""}`}
                              />
                              {errors.telepon && (
                                <p className="text-xs text-red-500">Nomor telepon wajib diisi</p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                Email *
                              </label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="email@contoh.com"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className={`bg-white ${errors.email ? "border-red-500" : ""}`}
                              />
                              {errors.email && (
                                <p className="text-xs text-red-500">Email wajib diisi</p>
                              )}
                              {errors.emailFormat && (
                                <p className="text-xs text-red-500">Format email tidak valid</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Informasi yang Dibutuhkan */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                          Informasi yang Dibutuhkan
                        </h3>
                        
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label htmlFor="rincian_informasi" className="text-sm font-medium text-gray-700">
                              Rincian Informasi yang Dibutuhkan *
                            </label>
                            <Textarea
                              id="rincian_informasi"
                              placeholder="Jelaskan secara detail informasi apa yang Anda butuhkan"
                              rows={3}
                              value={formData.rincian_informasi}
                              onChange={(e) => handleInputChange("rincian_informasi", e.target.value)}
                              className={`bg-white ${errors.rincian_informasi ? "border-red-500" : ""}`}
                            />
                            {errors.rincian_informasi && (
                              <p className="text-xs text-red-500">Rincian informasi wajib diisi</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="tujuan_pengguna" className="text-sm font-medium text-gray-700">
                              Tujuan Pengguna Informasi *
                            </label>
                            <Input
                              id="tujuan_pengguna"
                              placeholder="Tujuan penggunaan informasi"
                              value={formData.tujuan_pengguna}
                              onChange={(e) => handleInputChange("tujuan_pengguna", e.target.value)}
                              className={`bg-white ${errors.tujuan_pengguna ? "border-red-500" : ""}`}
                            />
                            {errors.tujuan_pengguna && (
                              <p className="text-xs text-red-500">Tujuan pengguna informasi wajib diisi</p>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label htmlFor="memperoleh_informasi" className="text-sm font-medium text-gray-700">
                                Cara Memperoleh Informasi *
                              </label>
                              <Input
                                id="memperoleh_informasi"
                                placeholder="Cara memperoleh informasi"
                                value={formData.memperoleh_informasi}
                                onChange={(e) => handleInputChange("memperoleh_informasi", e.target.value)}
                                className={`bg-white ${errors.memperoleh_informasi ? "border-red-500" : ""}`}
                              />
                              {errors.memperoleh_informasi && (
                                <p className="text-xs text-red-500">Cara memperoleh informasi wajib diisi</p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <label htmlFor="mendapatkan_salinan" className="text-sm font-medium text-gray-700">
                                Cara Mendapatkan Salinan Informasi *
                              </label>
                              <Input
                                id="mendapatkan_salinan"
                                placeholder="Cara mendapatkan salinan"
                                value={formData.mendapatkan_salinan}
                                onChange={(e) => handleInputChange("mendapatkan_salinan", e.target.value)}
                                className={`bg-white ${errors.mendapatkan_salinan ? "border-red-500" : ""}`}
                              />
                              {errors.mendapatkan_salinan && (
                                <p className="text-xs text-red-500">Cara mendapatkan salinan informasi wajib diisi</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* File Upload */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                          Dokumen Pendukung
                        </h3>
                        
                        <div className="space-y-2">
                          <label htmlFor="file_permohonan" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Upload className="w-4 h-4" />
                            Unggah Surat Permohonan Kunjungan *
                          </label>
                          <div className="flex items-center gap-4">
                            <Input
                              id="file_permohonan"
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={handleFileChange}
                              className="bg-white"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => document.getElementById('file_permohonan')?.click()}
                            >
                              Pilih File
                            </Button>
                          </div>
                          {errors.file && (
                            <p className="text-xs text-red-500">Surat permohonan wajib diunggah</p>
                          )}
                          {file && (
                            <p className="text-sm text-green-600 flex items-center gap-1">
                              <CheckCircle className="w-4 h-4" />
                              File terpilih: {file.name}
                            </p>
                          )}
                          <p className="text-xs text-gray-500">
                            Format file: PDF, JPG, JPEG, PNG (maks. 5MB)
                          </p>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4 flex justify-end">
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                        >
                          {isLoading ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                              Mengirim...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Kirim Permohonan
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </>
            ) : (
              /* Success Screen */
              <Card className="border shadow-sm rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Terima Kasih
                    </h2>
                    
                    <div className="max-w-3xl mx-auto">
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                        <p className="text-gray-900 font-medium mb-4 text-lg">
                          <span className="text-red-600">SETELAH</span> pengajuan kunjungan anda <span className="text-green-600">DISETUJUI</span> anda akan dihubungi Via <span className="text-blue-600">TELEPON</span>.
                        </p>
                        
                        <div className="text-left space-y-4">
                          <p className="text-gray-700">
                            Jika anda <span className="font-semibold">TELAH</span> dihubungi dan dalam waktu <span className="font-semibold">2 x 24 jam</span> belum mendapatkan konfirmasi hasil <span className="font-semibold">DISETUJUI</span> melalui SMS atau EMAIL anda bisa menghubungi:
                          </p>
                          
                          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                            <div className="flex items-center gap-3">
                              <Phone className="w-6 h-6 text-blue-600" />
                              <div>
                                <p className="font-semibold text-blue-700">Call Center Kami</p>
                                <p className="text-xl font-bold text-blue-800">(0251) 8356167</p>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 italic mt-4">
                            Atas Pengajuan Kunjungan anda dan perhatiannya kami ucapkan terima kasih.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Data Permohonan Anda:
                        </h3>
                        
                        <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-2xl mx-auto text-left">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium text-gray-500">Nama Lengkap</p>
                              <p className="text-gray-900">{formData.nama}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Email</p>
                              <p className="text-gray-900">{formData.email}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Telepon</p>
                              <p className="text-gray-900">{formData.telepon}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Status</p>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                Menunggu Konfirmasi
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 space-x-4">
                        <Button
                          onClick={resetForm}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Ajukan Kunjungan Lainnya
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => window.print()}
                          className="flex items-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          Cetak Konfirmasi
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <Sidebar type="layanan" activeId={5} />
        </div>
      </div>
    </section>
  );
}