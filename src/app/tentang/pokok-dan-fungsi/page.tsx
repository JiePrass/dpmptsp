import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";

export default function TugasPokokFungsiPage() {
  const sidebarItems = [
    {
      id: 1,
      title: "Kami",
      href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/1",
    },
    {
      id: 2,
      title: "Tugas Pokok Dan Fungsi",
      href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/2",
    },
    {
      id: 3,
      title: "Struktur Organisasi",
      href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/3",
    },
    {
      id: 4,
      title: "Penilaian/Penghargaan",
      href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/4",
    },
    {
      id: 5,
      title: "Perencanaan dan Pelaporan",
      href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/5",
    },
    {
      id: 6,
      title: "Maklumat Pelayanan",
      href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/6",
    },
  ];

  const tugasPokok = [
    "Perumusan kebijakan teknis di bidang penanaman modal dan pelayanan terpadu satu pintu;",
    "Penyelenggaraan urusan pemerintahan dan pelaksanaan pelayanan umum di bidang penanaman modal dan pelayanan terpadu satu pintu;",
    "Pelaksanaan teknis operasional di bidang penanaman modal dan pelayanan terpadu satu pintu;",
    "Pengelolaan sumber daya aparatur, keuangan, perlengkapan, sarana, dan prasarana Dinas;",
    "Pembinaan dan pelaksanaan tugas di bidang penanaman modal dan pelayanan terpadu satu pintu; dan",
    "Pelaksanaan tugas lain yang diberikan oleh Wali Kota sesuai dengan tugas dan fungsinya",
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 mt-10">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a
              href="https://perizinan.kotabogor.go.id/portal_22/"
              className="hover:text-primary transition-colors"
            >
              Home
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <a href="#" className="hover:text-primary transition-colors">
              Tentang
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-700 font-medium">
              Tugas Pokok dan Fungsi
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tugas Pokok dan Fungsi
          </h1>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-96">
                  <Image
                    src="https://perizinan.kotabogor.go.id/portal_22/uploads/crud/alur.jpg"
                    alt="Tugas Pokok dan Fungsi DPMPTSP Kota Bogor"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 75vw"
                    priority
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Tugas Pokok DPMPTSP Kota Bogor
                  </h2>

                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu
                      (DPMPTSP) Kota Bogor memiliki tugas pokok dan fungsi yang
                      diatur untuk memberikan pelayanan yang optimal kepada
                      masyarakat dan investor.
                    </p>

                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg p-6 my-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Tugas Pokok DPMPTSP Kota Bogor:
                      </h3>

                      <ol className="space-y-4">
                        {tugasPokok.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                            <p className="text-gray-700">{item}</p>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Fungsi Utama
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-gray-700">
                            Pelayanan Perizinan Terpadu
                          </span>
                        </li>
                        <li className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-gray-700">
                            Fasilitasi Investasi
                          </span>
                        </li>
                        <li className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-gray-700">
                            Koordinasi Lintas Sektor
                          </span>
                        </li>
                        <li className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-gray-700">
                            Pengawasan Pelayanan
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Visi Pelayanan
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Dengan tugas pokok dan fungsi yang jelas, DPMPTSP Kota
                        Bogor berkomitmen untuk mewujudkan pelayanan publik yang
                        transparan, akuntabel, dan berbasis teknologi informasi
                        dan komunikasi sesuai dengan visi yang telah ditetapkan.
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg">
                        <span className="font-medium">MOTTO:</span>
                        <span>
                          Sederhana, Mudah, Akuntabel, Ramah, dan Tepat Waktu
                          (SMART)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border shadow-sm rounded-2xl overflow-hidden top-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b">
                  Menu Tentang
                </h3>
                <ScrollArea className="h-[500px] pr-4">
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
                            <span
                              className={`text-gray-700 group-hover:text-gray-900 font-medium ${
                                item.id === 2
                                  ? "text-primary font-semibold"
                                  : ""
                              }`}
                            >
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
                    <h4 className="font-bold text-gray-900 text-lg">
                      DPMPTSP KOTA BOGOR
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="text-xs font-medium text-primary mb-1">
                      ALAMAT
                    </p>
                    <p className="text-sm text-gray-700">
                      Jl. Kapten Muslihat No. 21 Kota Bogor
                    </p>
                  </div>

                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="text-xs font-medium text-primary mb-1">
                      EMAIL
                    </p>
                    <p className="text-sm text-gray-700">
                      perizinan@kotabogor.go.id
                    </p>
                  </div>

                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="text-xs font-medium text-primary mb-1">
                      TELEPON
                    </p>
                    <p className="text-sm text-gray-700">(0251) 832-XXXX</p>
                  </div>

                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="text-xs font-medium text-primary mb-1">
                      JAM OPERASIONAL
                    </p>
                    <p className="text-sm text-gray-700">
                      Senin - Jumat, 08:00 - 16:00 WIB
                    </p>
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
