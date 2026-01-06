import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

export default function TentangKamiSection() {
  const menuItems = [
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

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 mt-10">
          {/* Breadcrumb */}
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
            <span className="text-gray-700 font-medium">Tentang Kami</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tentang Kami
          </h1>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />

          <p className="text-gray-600 mt-6 max-w-3xl">
            Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kota Bogor
            berkomitmen memberikan pelayanan perizinan yang cepat, transparan,
            dan profesional.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <h2 className="text-2xl font-bold text-gray-900">VISI</h2>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                      <p className="text-lg leading-relaxed text-gray-700">
                        Terwujudnya Pelayanan Publik yang Transparan, Akuntabel
                        dan Berbasis Teknologi Informasi dan Komunikasi.
                      </p>
                    </div>
                  </div>

                  {/* Misi */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <h2 className="text-2xl font-bold text-gray-900">MISI</h2>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                      <p className="text-lg leading-relaxed text-gray-700">
                        Terwujudnya kemudahan berinvestasi.
                      </p>
                    </div>
                  </div>

                  {/* Motto */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <h2 className="text-2xl font-bold text-gray-900">
                        MOTTO
                      </h2>
                    </div>
                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8 text-center">
                      <p className="text-3xl font-bold text-primary mb-2">
                        SMART
                      </p>
                      <p className="text-lg text-gray-700">
                        (Sederhana, Mudah, Akuntabel, Ramah, dan Tepat Waktu)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alur Perizinan Image */}
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-64 md:h-80">
                  <Image
                    src="https://perizinan.kotabogor.go.id/portal_22/uploads/crud/Mekanisme_Alur_Perizinan.png"
                    alt="Mekanisme Alur Perizinan"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mekanisme Alur Perizinan
                  </h3>
                  <p className="text-gray-600">
                    Lihat proses alur perizinan di DPMPTSP Kota Bogor
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Menu Tentang */}
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b">
                  Menu Tentang
                </h3>
                <ScrollArea className="h-[400px] pr-4">
                  <ul className="space-y-2">
                    {menuItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-lg hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/20"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                            <span className="text-gray-700 group-hover:text-gray-900 font-medium">
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
                    <h4 className="font-bold text-gray-900 text-lg">
                      DPMPTSP KOTA BOGOR
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Alamat
                      </p>
                      <p className="text-sm text-gray-600">
                        Jl. Kapten Muslihat No. 21 Kota Bogor
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <p className="text-sm text-gray-600">
                        perizinan@kotabogor.go.id
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Telepon
                      </p>
                      <p className="text-sm text-gray-600">(0251) 832-XXXX</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Jam Operasional
                      </p>
                      <p className="text-sm text-gray-600">
                        Senin - Jumat, 08:00 - 16:00 WIB
                      </p>
                    </div>
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
