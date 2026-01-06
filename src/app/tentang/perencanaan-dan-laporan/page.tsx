import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, Download, FileText, Calendar, BarChart, FileCheck } from "lucide-react";

export default function PerencanaanPelaporanPage() {
  const sidebarItems = [
    { id: 1, title: "Kami", href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/1" },
    { id: 2, title: "Tugas Pokok Dan Fungsi", href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/2" },
    { id: 3, title: "Struktur Organisasi", href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/3" },
    { id: 4, title: "Penilaian/Penghargaan", href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/4" },
    { id: 5, title: "Perencanaan dan Pelaporan", href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/5" },
    { id: 6, title: "Maklumat Pelayanan", href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/6" },
  ];

  const documents = [
    { id: 1, title: "Laporan Akuntabilitas Kinerja Instansi Pemerintah (LAKIP) Tahun 2020", year: "2020", type: "Laporan", category: "Kinerja", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/LKIP-2020-DPMPTSP.pdf" },
    { id: 2, title: "Rencana Strategis DPMPTSP Kota Bogor", year: "2019-2024", type: "Perencanaan", category: "Strategis", url: "http://103.65.237.44/portal_bogor_21/uploads/crud/RENSTRA-DPMPTSP-2019-2024.pdf" },
    { id: 3, title: "Indikator Kinerja Utama (IKU)", year: "2020", type: "Kinerja", category: "Indikator", url: "http://103.65.237.44/portal_bogor_21/uploads/crud/IKU-DPMPTSP-2020.pdf" },
    { id: 4, title: "Standar Pelayanan DPMPTSP Kota Bogor", year: "2023", type: "Standar", category: "Pelayanan", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/STANDAR_PELAYANAN_2023-1.pdf" },
    { id: 5, title: "Paparan Pembuatan Polygon OSS", year: "2023", type: "Teknis", category: "OSS", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/CARA_PEMBUATAN_PETA_POLYGON_-_FILE_SHP_COMPLETE.pdf" },
    { id: 6, title: "Laporan Akuntabilitas Kinerja Instansi Pemerintah (LAKIP) Tahun 2021", year: "2021", type: "Laporan", category: "Kinerja", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/LKIP_2021_DPMPTSP.pdf" },
    { id: 7, title: "Rencana Kerja (Renja) Tahun 2021", year: "2021", type: "Perencanaan", category: "Kerja", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/RENJA_2021_DAN_PERWALI.pdf" },
    { id: 8, title: "Perjanjian Kinerja Tahun 2021", year: "2021", type: "Kinerja", category: "Perjanjian", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/PERJANJIAN_KINERJA_DPMPTSP_2021.pdf" },
    { id: 9, title: "Perjanjian Kinerja Tahun 2022", year: "2022", type: "Kinerja", category: "Perjanjian", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/PERJANJIAN_KINERJA_DPMPTSP_2022.pdf" },
    { id: 10, title: "Perjanjian Kinerja Tahun 2023", year: "2023", type: "Kinerja", category: "Perjanjian", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/PK_DPMPTSP_2023_Selesai.pdf" },
    { id: 11, title: "Perjanjian Kinerja Tahun 2024", year: "2024", type: "Kinerja", category: "Perjanjian", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/PK_DPMPTSP_2024.pdf" },
    { id: 12, title: "Dokumen Pelaksanaan Anggaran DPMPTSP Tahun 2022", year: "2022", type: "Anggaran", category: "Keuangan", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/DPA_DPMPTSP_2022.pdf" },
    { id: 13, title: "Perwali No. 43 Tahun 2022 Tentang Perubahan Atas Perwali Nomor 81 Tahun 2019 Tentang Rencana Strategis Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu Tahun 2019-2024", year: "2022", type: "Peraturan", category: "Strategis", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/PERWALI_RENSTRA_DPMPTSP.pdf" },
    { id: 14, title: "Renja 2022 Perubahan DPMPTSP", year: "2022", type: "Perencanaan", category: "Kerja", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/RENJA_2022_PERUBAHAN_DPMPTSP.pdf" },
    { id: 15, title: "Renja 2023", year: "2023", type: "Perencanaan", category: "Kerja", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/Renja_2023.pdf" },
    { id: 16, title: "Renja 2024", year: "2024", type: "Perencanaan", category: "Kerja", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/Renja_2024.pdf" },
    { id: 17, title: "Renja 2025", year: "2025", type: "Perencanaan", category: "Kerja", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/RENJA_DPMPTSP_2025.pdf" },
    { id: 18, title: "Perwali Nomor 32 Tahun 2023 dan Renja 2024", year: "2023", type: "Peraturan", category: "Kerja", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/PERWALI-DAN-RENJA-2024-DPMPTSP.pdf" },
    { id: 19, title: "Renstra Perubahan 2019 - 2024 DPMPTSP Perubahan", year: "2019-2024", type: "Perencanaan", category: "Strategis", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/RENSTRA_PERUBAHAN_2019_-_2024_DPMPTSP_Perubahan.pdf" },
    { id: 20, title: "LKIP 2022", year: "2022", type: "Laporan", category: "Kinerja", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/LKIP_2022_DPMPTSP.pdf" },
    { id: 21, title: "LKIP 2023", year: "2023", type: "Laporan", category: "Kinerja", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/LKIP-DPMPTSP-2023.pdf" },
    { id: 22, title: "LKPJ 2023", year: "2023", type: "Laporan", category: "Kinerja", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/LKPJ_2023_DPMPTSP.pdf" },
    { id: 23, title: "SOP Perizinan dan Non Perizinan Tahun 2022", year: "2022", type: "Prosedur", category: "Operasional", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/SOP-PERIZINAN-DPMPTSP-2022.pdf" },
    { id: 24, title: "SOP Pengaduan", year: "2023", type: "Prosedur", category: "Pengaduan", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/SOP-PENGADUAN.pdf" },
    { id: 25, title: "SKM Semester 1 2024", year: "2024", type: "Laporan", category: "Kepuasan", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/SKM-SEMESTER-I-2024.pdf" },
    { id: 26, title: "Laporan Konsultasi dan Pengaduan Pelayanan Semester I 2024", year: "2024", type: "Laporan", category: "Pengaduan", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/LAPORAN_KONSULTASI_DAN_PENGADUAN_PELAYANAN_SEMESTER_I_2024.pdf" },
    { id: 27, title: "LKPJ 2024 DPMPTSP", year: "2024", type: "Laporan", category: "Kinerja", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/LKPJ-2024-DPMPTSP.pdf" },
    { id: 28, title: "DPA SKPD 2024", year: "2024", type: "Anggaran", category: "Keuangan", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/DPA-SKPD-2024.pdf" },
    { id: 29, title: "DPA SKPD 2024 PERUBAHAN", year: "2024", type: "Anggaran", category: "Keuangan", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/DPA-SKPD-2024-PERUBAHAN.pdf" },
    { id: 30, title: "DPA SKPD 2025", year: "2025", type: "Anggaran", category: "Keuangan", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/DPA-SKPD-2025.pdf" },
    { id: 31, title: "LRA Januari dan Februari 2025", year: "2025", type: "Laporan", category: "Keuangan", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/LRA-Jan-Feb-2025.pdf" },
    { id: 32, title: "LKIP 2024", year: "2024", type: "Laporan", category: "Kinerja", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/LKIP_2024_DPMPTSP.pdf" },
    { id: 33, title: "Perjanjian Kinerja 2025", year: "2025", type: "Kinerja", category: "Perjanjian", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/PERJANJIAN_KINERJA_2025_DPMPTSP-1.pdf" },
    { id: 34, title: "Laporan Survei Kepuasan Masyarakat DPMPTSP Tahun 2024", year: "2024", type: "Laporan", category: "Kepuasan", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/Laporan-SKM-2024-DPMPTSP.pdf" },
    { id: 35, title: "Laporan Tindak Lanjut SKM DPMPTSP Tahun 2024", year: "2024", type: "Laporan", category: "Kepuasan", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/Laporan-Tindak-Lanjut-SKM-DPMPTSP-2024.pdf" },
    { id: 36, title: "Laporan Pengaduan dan Konsultasi Semester I Tahun 2025", year: "2025", type: "Laporan", category: "Pengaduan", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/LAPORAN-PENGADUAN-DAN-KONSULTASI-SEMESTER-I-2025.pdf" },
    { id: 37, title: "Standar Pelayanan DPMPTSP Kota Bogor Tahun 2025", year: "2025", type: "Standar", category: "Pelayanan", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/STANDAR-PELAYANAN-2025-DPMPTSP.pdf" },
    { id: 38, title: "Surat Edaran Wali Kota Bogor Larangan Gratifikasi", year: "2025", type: "Peraturan", category: "Etika", url: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/Surat-Edaran-Wali-Kota-Larangan-Gratifikasi.pdf" },
  ];

  const categories = [
    { id: 1, name: "Semua", count: 38 },
    { id: 2, name: "Laporan", count: 11 },
    { id: 3, name: "Perencanaan", count: 8 },
    { id: 4, name: "Kinerja", count: 7 },
    { id: 5, name: "Anggaran", count: 5 },
    { id: 6, name: "Standar", count: 2 },
    { id: 7, name: "Prosedur", count: 2 },
    { id: 8, name: "Peraturan", count: 3 },
    { id: 9, name: "Teknis", count: 1 },
  ];

  const years = ["2025", "2024", "2023", "2022", "2021", "2020", "2019-2024"];

  const getIconByType = (type: string) => {
    switch(type) {
      case "Laporan": return <BarChart className="w-4 h-4" />;
      case "Perencanaan": return <Calendar className="w-4 h-4" />;
      case "Kinerja": return <FileCheck className="w-4 h-4" />;
      case "Anggaran": return <FileText className="w-4 h-4" />;
      case "Standar": return <FileText className="w-4 h-4" />;
      case "Prosedur": return <FileText className="w-4 h-4" />;
      case "Peraturan": return <FileText className="w-4 h-4" />;
      case "Teknis": return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12 mt-10">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="https://perizinan.kotabogor.go.id/portal_22/" className="hover:text-primary transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <a href="#" className="hover:text-primary transition-colors">
              Tentang
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-700 font-medium">Perencanaan dan Pelaporan</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Perencanaan dan Pelaporan</h1>
              <div className="w-24 h-1.5 bg-primary rounded-full" />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FileText className="w-4 h-4" />
              <span>Total {documents.length} dokumen</span>
            </div>
          </div>

          <p className="text-gray-600 max-w-3xl">
            Dokumen perencanaan, pelaporan, dan pengelolaan kinerja DPMPTSP Kota Bogor yang dapat diunduh oleh publik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border shadow-sm rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Dokumen</p>
                      <p className="text-3xl font-bold text-gray-900">{documents.length}</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border shadow-sm rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Tahun Terbaru</p>
                      <p className="text-3xl font-bold text-gray-900">2025</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border shadow-sm rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Update Terakhir</p>
                      <p className="text-3xl font-bold text-gray-900">2025</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FileCheck className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Dokumen List */}
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <h2 className="text-2xl font-bold text-gray-900">Dokumen Tersedia</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Filter:</span>
                    <select className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option value="all">Semua Tahun</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    <select className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option value="all">Semua Kategori</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.name}>{cat.name} ({cat.count})</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  {documents.map((doc) => (
                    <div key={doc.id} className="border border-gray-200 rounded-xl p-4 hover:border-primary/30 hover:shadow-sm transition-all">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center gap-2 text-xs">
                              <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                                {doc.type}
                              </span>
                              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                                {doc.year}
                              </span>
                            </div>
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                            {doc.id}. {doc.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              {getIconByType(doc.type)}
                              {doc.category}
                            </span>
                          </div>
                        </div>
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Info Box */}
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Informasi Dokumen
                  </h3>
                  <p className="text-gray-600">
                    Semua dokumen perencanaan dan pelaporan DPMPTSP Kota Bogor tersedia untuk publik 
                    dalam rangka transparansi dan akuntabilitas penyelenggaraan pemerintahan.
                  </p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-gray-700">LAKIP: Laporan Akuntabilitas Kinerja Instansi Pemerintah</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-gray-700">Renja: Rencana Kerja Tahunan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-gray-700">Renstra: Rencana Strategis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-gray-700">LKPJ: Laporan Keterangan Pertanggungjawaban</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Menu Tentang */}
            <Card className="border shadow-sm rounded-2xl overflow-hidden top-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b">Menu Tentang</h3>
                <ScrollArea className="h-[400px] pr-4">
                  <ul className="space-y-2">
                    {sidebarItems.map((item) => (
                      <li key={item.id}>
                        <a 
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-lg hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/20"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                            <span className={`text-gray-700 group-hover:text-gray-900 font-medium ${item.id === 5 ? 'text-primary font-semibold' : ''}`}>
                              {item.title}
                            </span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Kategori Dokumen */}
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Kategori Dokumen</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <a
                      key={cat.id}
                      href="#"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-gray-700 group-hover:text-gray-900">{cat.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {cat.count}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tahun Dokumen */}
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Tahun Dokumen</h3>
                <div className="flex flex-wrap gap-2">
                  {years.map((year) => (
                    <a
                      key={year}
                      href="#"
                      className="px-3 py-2 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-sm text-gray-700 hover:text-gray-900"
                    >
                      {year}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative w-16 h-16">
                    <Image
                      src="https://perizinan.kotabogor.go.id/portal_22/themes/portal/images/web/pemkot.png"
                      alt="Logo Pemkot Bogor"
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">DPMPTSP KOTA BOGOR</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Transparansi dan Akuntabilitas
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="text-xs font-medium text-primary mb-1">INFORMASI DOKUMEN</p>
                    <p className="text-sm text-gray-700">Dokumen resmi DPMPTSP Kota Bogor</p>
                  </div>
                  
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="text-xs font-medium text-primary mb-1">UPDATE TERKINI</p>
                    <p className="text-sm text-gray-700">Perencanaan dan Laporan 2025</p>
                  </div>
                  
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="text-xs font-medium text-primary mb-1">FORMAT FILE</p>
                    <p className="text-sm text-gray-700">PDF (Portable Document Format)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}