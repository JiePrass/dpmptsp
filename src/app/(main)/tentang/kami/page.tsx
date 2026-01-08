import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { TentangMenu } from "@/components/shared/TentangSidebar";

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
    <section className="w-full py-24 bg-white">
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
                <BreadcrumbLink href="/tentang/kami">
                  Tentang
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>
                  Kami
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

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

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <h2 className="text-2xl font-bold text-gray-900">
                        MOTTO
                      </h2>
                    </div>
                    <div className="bg-linear-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8 text-center">
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
                <div>
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

          <div className="space-y-6">
            <TentangMenu activeId={1} />
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent>
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
