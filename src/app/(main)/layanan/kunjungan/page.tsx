"use client";

import { useState, type FormEvent } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Calendar, Building, Users, Phone, Mail, FileText, Upload, CheckCircle, Send, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/layouts/sidebar";

export default function KunjunganSection() {
  const [formData, setFormData] = useState({
    nama: "",
    tanggal: "",
    jumlah_anggota: "",
    telepon: "",
    email: "",
    keperluan: "",
    file_permohonan: null as File | null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleInputChange = (field: string, value: string | File) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};
    
    if (!formData.nama.trim()) newErrors.nama = true;
    if (!formData.tanggal.trim()) newErrors.tanggal = true;
    if (!formData.jumlah_anggota.trim()) newErrors.jumlah_anggota = true;
    if (!formData.telepon.trim()) newErrors.telepon = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.keperluan.trim()) newErrors.keperluan = true;
    if (!formData.file_permohonan) newErrors.file_permohonan = true;
    
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
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleInputChange("file_permohonan", e.target.files[0]);
    }
  };

  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 mt-10">
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
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  Kunjungan
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kunjungan
          </h1>
          <div className="w-24 h-1.5 bg-blue-600 rounded-full mb-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Card className="border border-yellow-200 shadow-sm rounded-2xl overflow-hidden mb-8 bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-yellow-100 rounded-lg mt-1">
                    <Clock className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-800">
                      Bagi OPD atau Perusahaan yang ingin melakukan kunjungan, silahkan isi formulir dibawah ini. 
                      <span className="font-bold text-red-600"> Kami hanya menerima kunjungan pada hari Selasa dan Kamis.</span>
                    </p>
                    <p className="font-bold text-gray-800">
                      Kontak Konfirmasi ke WA : 081386173606 (Ibu Elis) dan WA : 0895333784728 (Ibu Waryanti) 
                      <span className="text-blue-600"> CP tersebut khusus melayani konfirmasi kunjungan kerja (Dinas).</span>
                    </p>
                    <p className="text-gray-800">
                      Selain informasi hal tersebut dapat diakses pada menu pengaduan, chat (live chat) atau zoom dengan mendaftar terlebih dahulu{" "}
                      <a 
                        href="https://bit.ly/dpmptspvirt" 
                        target="_blank" 
                        className="text-blue-600 hover:text-blue-800 font-medium underline"
                      >
                        disini
                      </a>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {!isSubmitted ? (
              <Card className="border shadow-sm rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 rounded-xl">
                        <Building className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          Form Permohonan Kunjungan
                        </h2>
                        <p className="text-gray-600">
                          Isi formulir berikut untuk mengajukan permohonan kunjungan ke DPMPTSP Kota Bogor
                        </p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                        Informasi Kunjungan
                      </h3>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="nama" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            Nama Lembaga/OPD *
                          </label>
                          <Input
                            id="nama"
                            placeholder="Contoh: Dinas Pendidikan Kota Bogor"
                            value={formData.nama}
                            onChange={(e) => handleInputChange("nama", e.target.value)}
                            className={`bg-white ${errors.nama ? "border-red-500" : ""}`}
                            required
                          />
                          {errors.nama && (
                            <p className="text-xs text-red-500">Nama lembaga wajib diisi</p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="tanggal" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              Tanggal Kunjungan (YYYY-MM-DD) *
                            </label>
                            <Input
                              id="tanggal"
                              type="date"
                              placeholder="YYYY-MM-DD"
                              value={formData.tanggal}
                              onChange={(e) => handleInputChange("tanggal", e.target.value)}
                              className={`bg-white ${errors.tanggal ? "border-red-500" : ""}`}
                              required
                            />
                            {errors.tanggal && (
                              <p className="text-xs text-red-500">Tanggal kunjungan wajib diisi</p>
                            )}
                            <p className="text-xs text-gray-500">Format: Tahun-Bulan-Tanggal</p>
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="jumlah_anggota" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              Jumlah Anggota *
                            </label>
                            <Input
                              id="jumlah_anggota"
                              type="number"
                              placeholder="Contoh: 10"
                              value={formData.jumlah_anggota}
                              onChange={(e) => handleInputChange("jumlah_anggota", e.target.value)}
                              className={`bg-white ${errors.jumlah_anggota ? "border-red-500" : ""}`}
                              required
                            />
                            {errors.jumlah_anggota && (
                              <p className="text-xs text-red-500">Jumlah anggota wajib diisi</p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="telepon" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              Telepon *
                            </label>
                            <Input
                              id="telepon"
                              placeholder="0812-3456-7890"
                              value={formData.telepon}
                              onChange={(e) => handleInputChange("telepon", e.target.value)}
                              className={`bg-white ${errors.telepon ? "border-red-500" : ""}`}
                              required
                            />
                            {errors.telepon && (
                              <p className="text-xs text-red-500">Telepon wajib diisi</p>
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
                              placeholder="email@lembaga.com"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              className={`bg-white ${errors.email ? "border-red-500" : ""}`}
                              required
                            />
                            {errors.email && (
                              <p className="text-xs text-red-500">Email wajib diisi</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="keperluan" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            Keperluan *
                          </label>
                          <Input
                            id="keperluan"
                            placeholder="Tujuan dan keperluan kunjungan"
                            value={formData.keperluan}
                            onChange={(e) => handleInputChange("keperluan", e.target.value)}
                            className={`bg-white ${errors.keperluan ? "border-red-500" : ""}`}
                            required
                          />
                          {errors.keperluan && (
                            <p className="text-xs text-red-500">Keperluan wajib diisi</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="file_permohonan" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Upload className="w-4 h-4" />
                            Unggah Surat Permohonan Kunjungan *
                          </label>
                          <div className="flex items-center gap-4">
                            <Input
                              id="file_permohonan"
                              type="file"
                              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                              onChange={handleFileChange}
                              className={`bg-white ${errors.file_permohonan ? "border-red-500" : ""}`}
                              required
                            />
                            {formData.file_permohonan && (
                              <span className="text-sm text-green-600">
                                ✓ {formData.file_permohonan.name}
                              </span>
                            )}
                          </div>
                          {errors.file_permohonan && (
                            <p className="text-xs text-red-500">File surat permohonan wajib diunggah</p>
                          )}
                          <p className="text-xs text-gray-500">
                            Format yang diterima: PDF, DOC, DOCX, JPG, JPEG, PNG
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-sm md:text-lg"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                            Mengirim Permohonan...
                          </>
                        ) : (
                          <>
                            <Send className="w-5  h-5 mr-2" />
                            Kirim Permohonan Kunjungan
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
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Terima Kasih
                    </h2>

                    <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200 text-left">
                      <h4 className="font-semibold text-blue-800 mb-4 text-lg">
                        ⚠️ Informasi Penting
                      </h4>
                      <div className="space-y-3 text-blue-700">
                        <p className="font-bold">
                          SETELAH pengajuan Kunjungan anda DISETUJUI anda akan dihubungi Via TELEPON.
                        </p>
                        <p>
                          Jika anda TELAH dihubungi dan dalam waktu 2 x 24 jam belum mendapatkan konfirmasi hasil DISETUJUI 
                          melalui SMS atau EMAIL anda bisa menghubungi Call Center Kami di{" "}
                          <span className="font-bold">(0251) 8356167</span>.
                        </p>
                        <p className="font-semibold mt-4">
                          Atas Pengajuan Kunjungan anda dan perhatiannya kami ucapkan terima kasih.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 max-w-2xl mx-auto text-left mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">
                        Data Permohonan Anda:
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Nama Lembaga/OPD</p>
                          <p className="text-gray-900 font-medium">{formData.nama}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-gray-500">Tanggal Kunjungan</p>
                          <p className="text-gray-900 font-medium">{formData.tanggal}</p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500">Jumlah Anggota</p>
                          <p className="text-gray-900 font-medium">{formData.jumlah_anggota} orang</p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500">Telepon</p>
                          <p className="text-gray-900 font-medium">{formData.telepon}</p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500">Email</p>
                          <p className="text-gray-900 font-medium">{formData.email}</p>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500">Keperluan</p>
                          <p className="text-gray-900 font-medium">{formData.keperluan}</p>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          nama: "",
                          tanggal: "",
                          jumlah_anggota: "",
                          telepon: "",
                          email: "",
                          keperluan: "",
                          file_permohonan: null,
                        });
                      }}
                      variant="outline"
                      className="mt-4"
                    >
                      Ajukan Kunjungan Lainnya
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <Sidebar activeId={6} />
        </div>
      </div>
    </section>
  );
}