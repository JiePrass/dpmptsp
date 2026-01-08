import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Sidebar from "@/components/layouts/sidebar";
import { ChevronRight, Users, UserCheck, Award, Briefcase, Building, } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function StrukturOrganisasiPage() {

  const pejabatStruktural = [
    {
      id: 1,
      name: "H. EKO PRABOWO, AP.,M.Si.",
      position: "Plt. Kepala DPMPTSP",
      image: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/eko.JPG",
      level: "pimpinan"
    },
    {
      id: 2,
      name: "CECEP ZAKARIA, S.IP., M.Si.",
      position: "Sekretaris DPMPTSP",
      image: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/cecep_zakaria.jpeg",
      level: "sekretaris"
    },
    {
      id: 3,
      name: "ELIS KARTIKASARI, S.Sos.",
      position: "Kasubag Umum dan Kepegawaian",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/ibuelis.jpg",
      level: "kepala-bagian"
    },
  ];

  const pejabatFungsional = [
    {
      id: 1,
      name: "R.BENI ISKANDAR,S.H.,M.M.",
      position: "PENATA PERIZINAN AHLI MADYA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/pakbeni.png",
      category: "perizinan"
    },
    {
      id: 2,
      name: "DWI AANG KUNAIFI, S.STP, M.Si.",
      position: "PENATA PERIZINAN AHLI MADYA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/pakaang.png",
      category: "perizinan"
    },
    {
      id: 3,
      name: "IDA BAGUS MADE ANDIKA, S.Pt.M.M",
      position: "PENATA PERIZINAN AHLI MADYA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/pakidabagus.png",
      category: "perizinan"
    },
    {
      id: 4,
      name: "AGUS SUHARJANTO, S.T., M.T.",
      position: "PENATA PERIZINAN AHLI MADYA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/pakaguss.png",
      category: "perizinan"
    },
    {
      id: 5,
      name: "HERMAN RUSLI, S.T., M.M.",
      position: "PENATA KELOLA PENANAMAN MODAL AHLI MADYA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/pakherman.png",
      category: "modal"
    },
    {
      id: 6,
      name: "SUGENG RULYADI, S.Kom, M.Si",
      position: "PENATA KELOLA PENANAMAN MODAL AHLI MADYA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/paksugeng.png",
      category: "modal"
    },
    {
      id: 7,
      name: "ERAYANTI DEWI, S.IP",
      position: "ANALIS KEUANGAN PEMERINTAH PUSAT DAN DAERAH MUDA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/ibuerayanti.jpg",
      category: "keuangan"
    },
    {
      id: 8,
      name: "LUCYANA MEILANI SIPAYUNG, SE",
      position: "PENATA KELOLA PENANAMAN MODAL MUDA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/ibulucy.png",
      category: "modal"
    },
    {
      id: 9,
      name: "MOHAMMAD ZAELANI, SE, M.Si.",
      position: "PENATA KELOLA PENANAMAN MODAL MUDA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/pakzailani.png",
      category: "modal"
    },
    {
      id: 10,
      name: "SITI MAESAROH, SE",
      position: "PENATA KELOLA PENANAMAN MODAL MUDA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/ibuekamaess.png",
      category: "modal"
    },
    {
      id: 11,
      name: "AGUS MUHAMMMAD FALAK, S.E.",
      position: "PENATA PERIZINAN MUDA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/pakagusm.png",
      category: "perizinan"
    },
    {
      id: 12,
      name: "MAMAN SUDARMAN, S.E.,M.Si.",
      position: "PENATA KELOLA PENANAMAN MODAL MUDA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/pakmaman.png",
      category: "modal"
    },
    {
      id: 13,
      name: "EKI PURWANDARI SRIYANTO, S.Pd., M.M.",
      position: "PENATA PERIZINAN MUDA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/ibueki.png",
      category: "perizinan"
    },
    {
      id: 14,
      name: "KISMIADI, ST, MT",
      position: "PENATA PERIZINAN MUDA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/pakkismi.png",
      category: "perizinan"
    },
    {
      id: 15,
      name: "DENNY ISMAIL MAULANI, S.T., M.Si.",
      position: "PENATA PERIZINAN MUDA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/pakdeni.png",
      category: "perizinan"
    },
    {
      id: 16,
      name: "AGUNG SUKMAWIJAYA, S.H",
      position: "PENATA PERIZINAN MUDA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/pakagung.png",
      category: "perizinan"
    },
    {
      id: 17,
      name: "ALBETI KURNA, SE, MA.",
      position: "PENATA PERIZINAN MUDA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/ibubeti.png",
      category: "perizinan"
    },
    {
      id: 18,
      name: "DEWI ARDIANTI, S.SOS.",
      position: "PENATA PERIZINAN MUDA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/ibudewi.png",
      category: "perizinan"
    },
    {
      id: 19,
      name: "MUHAMAD IDIN SYAMSUDIN, S.SOS, MA.",
      position: "PENATA PERIZINAN MUDA",
      image: "https://perizinan.kotabogor.go.id/portal_22/assets/web/pakidin.png",
      category: "perizinan"
    },
    {
      id: 20,
      name: "RUSMAN SETIAWAN S.E.",
      position: "PENATA KELOLA PENANAMAN MODAL AHLI MUDA",
      image: "https://simpeg.kotabogor.go.id/simpeg/foto/3544.jpg",
      category: "modal"
    },
  ];

  const strukturImages = [
    { id: 1, src: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/stuktur_organisasi.PNG", alt: "Struktur Organisasi DPMPTSP" },
    { id: 2, src: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/so_baru.jpeg", alt: "Struktur Organisasi Baru DPMPTSP" },
  ];

  const categories = [
    { id: 1, name: "Pejabat Struktural", count: pejabatStruktural.length, icon: <Building className="w-4 h-4" /> },
    { id: 2, name: "Pejabat Fungsional", count: pejabatFungsional.length, icon: <Users className="w-4 h-4" /> },
    { id: 3, name: "Perizinan", count: pejabatFungsional.filter(p => p.category === "perizinan").length, icon: <UserCheck className="w-4 h-4" /> },
    { id: 4, name: "Penanaman Modal", count: pejabatFungsional.filter(p => p.category === "modal").length, icon: <Briefcase className="w-4 h-4" /> },
    { id: 5, name: "Keuangan", count: pejabatFungsional.filter(p => p.category === "keuangan").length, icon: <Award className="w-4 h-4" /> },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
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
                <BreadcrumbLink href="/tentang/kami">
                  Tentang
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>
                  Struktur dan Organisasi
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Struktur Organisasi</h1>
              <div className="w-24 h-1.5 bg-primary rounded-full" />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="w-4 h-4" />
              <span>{pejabatStruktural.length + pejabatFungsional.length} pejabat</span>
            </div>
          </div>

          <p className="text-gray-600 max-w-3xl">
            Struktur organisasi dan data pejabat Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP) Kota Bogor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Struktur Organisasi Images */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Building className="w-6 h-6 text-primary" />
                Struktur Organisasi DPMPTSP
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {strukturImages.map((image) => (
                  <Card key={image.id} className="border shadow-sm rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative w-full h-64">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-4 text-center bg-gray-50">
                        <p className="text-sm text-gray-600">{image.alt}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Pejabat Struktural */}
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Building className="w-6 h-6 text-primary" />
                    Pejabat Struktural
                  </h2>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {pejabatStruktural.length} pejabat
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pejabatStruktural.map((pejabat) => (
                    <div key={pejabat.id} className="group">
                      <div className="bg-linear-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 text-center transition-all hover:shadow-md hover:border-primary/30">
                        <div className="relative w-32 h-32 mx-auto mb-4">
                          <Image
                            src={pejabat.image}
                            alt={pejabat.name}
                            fill
                            className="object-cover rounded-full border-4 border-white shadow-md"
                            sizes="128px"
                          />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">{pejabat.name}</h3>
                        <p className="text-primary font-medium mb-3">{pejabat.position}</p>
                        <div className="inline-flex items-center gap-1 text-sm text-gray-600">
                          <UserCheck className="w-4 h-4" />
                          {pejabat.level === "pimpinan" ? "Pimpinan" :
                            pejabat.level === "sekretaris" ? "Sekretaris" : "Kepala Bagian"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pejabat Fungsional */}
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Pejabat Fungsional
                  </h2>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {pejabatFungsional.length} pejabat
                  </span>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {categories.slice(1).map((cat) => (
                    <button
                      key={cat.id}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/5 text-primary hover:bg-primary/10 transition-colors text-sm font-medium"
                    >
                      {cat.icon}
                      {cat.name}
                      <span className="bg-white text-primary text-xs px-2 py-0.5 rounded-full">
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pejabatFungsional.map((pejabat) => (
                    <div key={pejabat.id} className="border border-gray-200 rounded-xl p-4 hover:border-primary/30 hover:shadow-sm transition-all">
                      <div className="flex items-start gap-4">
                        <div className="relative w-16 h-20 shrink-0">
                          <Image
                            src={pejabat.image}
                            alt={pejabat.name}
                            fill
                            className="object-cover rounded-lg"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                            {pejabat.name}
                          </h3>
                          <p className="text-xs text-primary font-medium mb-2">{pejabat.position}</p>
                          <div className="flex items-center gap-1">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${pejabat.category === "perizinan"
                              ? "bg-blue-100 text-blue-700"
                              : pejabat.category === "modal"
                                ? "bg-green-100 text-green-700"
                                : "bg-purple-100 text-purple-700"
                              }`}>
                              {pejabat.category === "perizinan" ? "Perizinan" :
                                pejabat.category === "modal" ? "Penanaman Modal" : "Keuangan"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Info Box */}
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="bg-linear-to-r from-primary/5 to-primary/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Tentang Struktur Organisasi
                  </h3>
                  <p className="text-gray-600 mb-4">
                    DPMPTSP Kota Bogor memiliki struktur organisasi yang terdiri dari pejabat struktural
                    dan fungsional yang bekerja bersama untuk memberikan pelayanan terbaik kepada masyarakat
                    dan investor.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{pejabatStruktural.length}</div>
                      <div className="text-sm text-gray-700">Pejabat Struktural</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{pejabatFungsional.length}</div>
                      <div className="text-sm text-gray-700">Pejabat Fungsional</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{categories.length}</div>
                      <div className="text-sm text-gray-700">Bidang Keahlian</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
         <Sidebar type="tentang" activeId={4} />
            {/* Kategori Pejabat */}
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Kategori Pejabat</h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <div key={cat.id} className="flex items-center justify-between p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg">
                          {cat.icon}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{cat.name}</p>
                          <p className="text-xs text-gray-500">{cat.count} pejabat</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Statistik Pejabat</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">Perizinan</span>
                      <span className="font-medium text-primary">
                        {pejabatFungsional.filter(p => p.category === "perizinan").length}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(pejabatFungsional.filter(p => p.category === "perizinan").length / pejabatFungsional.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">Penanaman Modal</span>
                      <span className="font-medium text-primary">
                        {pejabatFungsional.filter(p => p.category === "modal").length}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(pejabatFungsional.filter(p => p.category === "modal").length / pejabatFungsional.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">Keuangan</span>
                      <span className="font-medium text-primary">
                        {pejabatFungsional.filter(p => p.category === "keuangan").length}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(pejabatFungsional.filter(p => p.category === "keuangan").length / pejabatFungsional.length) * 100}%` }}
                      />
                    </div>
                  </div>
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
                      Struktur Organisasi & Pejabat
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="text-xs font-medium text-primary mb-1">TOTAL PEJABAT</p>
                    <p className="text-sm text-gray-700">{pejabatStruktural.length + pejabatFungsional.length} orang</p>
                  </div>

                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="text-xs font-medium text-primary mb-1">STRUKTURAL</p>
                    <p className="text-sm text-gray-700">{pejabatStruktural.length} pejabat</p>
                  </div>

                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="text-xs font-medium text-primary mb-1">FUNGSIONAL</p>
                    <p className="text-sm text-gray-700">{pejabatFungsional.length} pejabat</p>
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