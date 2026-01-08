import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";

interface SidebarItem {
  id: number;
  title: string;
  href: string;
}

interface SidebarProps {
  type: "tentang" | "layanan"; // pilih menu
  activeId?: number;
}

export default function Sidebar({ type, activeId }: SidebarProps) {
  // Data menu Tentang
  const TENTANG_ITEMS: SidebarItem[] = [
    { id: 1, title: "Kami", href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/1" },
    { id: 2, title: "Tugas Pokok Dan Fungsi", href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/2" },
    { id: 3, title: "Struktur Organisasi", href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/3" },
    { id: 4, title: "Penilaian/Penghargaan", href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/4" },
    { id: 5, title: "Perencanaan dan Pelaporan", href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/5" },
    { id: 6, title: "Maklumat Pelayanan", href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/6" },
  ];

  // Data menu Layanan
  const LAYANAN_ITEMS: SidebarItem[] = [
    { id: 1, title: "Perizinan Online", href: "https://perizinan.kotabogor.go.id/izin2" },
    { id: 2, title: "Tracking Berkas", href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/l/2" },
    { id: 3, title: "Pencarian Perizinan (KBLI)", href: "https://oss.go.id/informasi/kbli-berbasis-risiko" },
    { id: 4, title: "Bantuan", href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/l/5" },
    { id: 5, title: "Kunjungan", href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/l/6" },
  ];

  const items = type === "tentang" ? TENTANG_ITEMS : LAYANAN_ITEMS;
  const title = type === "tentang" ? "Menu Tentang" : "Layanan Lainnya";

  return (
    <div className="space-y-6">
      <Card className="border shadow-sm rounded-2xl overflow-hidden">
        <CardContent>
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 pb-3 border-b">
            {title}
          </h3>
          <ul className="space-y-2">
            {items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors group border border-transparent ${isActive
                      ? "bg-primary/10 border-primary/20"
                      : "hover:bg-primary/5 hover:border-primary/20"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full transition-transform ${isActive ? "bg-primary scale-125" : "bg-gray-300 group-hover:bg-primary group-hover:scale-125"
                          }`}
                      />
                      <span
                        className={`text-sm font-medium ${isActive ? "text-primary font-semibold" : "text-gray-700 group-hover:text-gray-900"
                          }`}
                      >
                        {item.title}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                  </a>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>

      {/* Info Kontak */}
      <Card className="border shadow-sm rounded-2xl overflow-hidden">
        <CardContent>
          <div className="flex items-start gap-4 mb-6">
            <div className="relative w-14 h-14 shrink-0">
              <Image
                src="https://perizinan.kotabogor.go.id/portal_22/themes/portal/images/web/pemkot.png"
                alt="Logo Pemkot Bogor"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">DPMPTSP KOTA BOGOR</h4>
              <p className="text-sm text-gray-600">
                Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu
              </p>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <InfoItem label="ALAMAT" value="Jl. Kapten Muslihat No. 21 Kota Bogor" />
            <InfoItem label="EMAIL" value="perizinan@kotabogor.go.id" />
            <InfoItem label="TELEPON" value="(0251) 832-XXXX" />
            <InfoItem label="JAM OPERASIONAL" value="Senin - Jumat, 08:00 - 16:00 WIB" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3 bg-primary/5 rounded-lg">
      <p className="text-xs font-semibold text-primary mb-1">{label}</p>
      <p className="text-gray-700">{value}</p>
    </div>
  );
}
