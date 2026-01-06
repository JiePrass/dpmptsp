import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function TentangKamiSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#fff9c4] to-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Tentang Kami</h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-primary" />
        </div>

        <Card className="overflow-hidden rounded-3xl border-none shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content - Main Info */}
            <CardContent className="lg:col-span-2 p-8">
              <div className="mb-6">
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-6">
                  <Image
                    src="https://perizinan.kotabogor.go.id/portal_22/uploads/crud/Mekanisme_Alur_Perizinan.png"
                    alt="Mekanisme Alur Perizinan"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">VISI</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Terwujudnya Pelayanan Publik yang Transparan, Akuntabel dan Berbasis Teknologi Informasi dan Komunikasi.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">MISI</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Terwujudnya kemudahan berinvestasi.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">MOTTO</h2>
                    <div className="bg-primary/10 p-6 rounded-xl">
                      <p className="text-2xl font-bold text-primary text-center">
                        SMART
                      </p>
                      <p className="text-lg text-center text-muted-foreground mt-2">
                        (Sederhana, Mudah, Akuntabel, Ramah, dan Tepat Waktu)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>

            {/* Right Sidebar - Navigation */}
            <div className="lg:col-span-1 p-6">
              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Tentang</h3>
                  <ScrollArea className="h-[400px]">
                    <ul className="space-y-3">
                      <li>
                        <a 
                          href="https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/1"
                          className="flex items-center p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                          <span className="text-muted-foreground group-hover:text-foreground font-medium">
                            Kami
                          </span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/2"
                          className="flex items-center p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                          <span className="text-muted-foreground group-hover:text-foreground font-medium">
                            Tugas Pokok Dan Fungsi
                          </span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/3"
                          className="flex items-center p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                          <span className="text-muted-foreground group-hover:text-foreground font-medium">
                            Struktur Organisasi
                          </span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/4"
                          className="flex items-center p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                          <span className="text-muted-foreground group-hover:text-foreground font-medium">
                            Penilaian/Penghargaan
                          </span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/5"
                          className="flex items-center p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                          <span className="text-muted-foreground group-hover:text-foreground font-medium">
                            Perencanaan dan Pelaporan
                          </span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/6"
                          className="flex items-center p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                          <span className="text-muted-foreground group-hover:text-foreground font-medium">
                            Maklumat Pelayanan
                          </span>
                        </a>
                      </li>
                    </ul>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-none shadow-sm mt-6">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="https://perizinan.kotabogor.go.id/portal_22/themes/portal/images/web/pemkot.png"
                      alt="Logo Pemkot Bogor"
                      width={70}
                      height={70}
                      className="mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">DPMPTSP KOTA BOGOR</h4>
                      <p className="text-sm text-muted-foreground">
                        Jl. Kapten Muslihat No. 21 Kota Bogor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        perizinan@kotabogor.go.id
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}