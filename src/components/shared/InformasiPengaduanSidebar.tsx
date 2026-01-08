"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface MenuItem {
  name: string;
  href: string;
  current?: boolean;
}

interface InformasiPengaduanSidebarProps {
  activeMenu?: string;
}

export default function InformasiPengaduanSidebar({
}: InformasiPengaduanSidebarProps) {
  const menuItems: MenuItem[] = [
    { name: "Indeks Kepuasan Masyarakat", href: "/informasi/publik" },
    { name: "Realisasi Retribusi", href: "/informasi/publik/realisasi-retribusi" },
    { name: "Layanan Perizinan", href: "/informasi/publik/layanan-perizinan" },
    {
      name: "Informasi dan Pengaduan",
      href: "/informasi/publik/informasi-dan-pengaduan",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Informasi Publik */}
      <Card className="border shadow-sm rounded-2xl overflow-hidden">
        <CardContent>
          <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b">
            Informasi Publik
          </h3>
          <ul className="space-y-4">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-primary/5 transition-colors group border border-primary/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                      {item.name}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Keterangan Status */}
      <Card className="border shadow-sm rounded-2xl">
        <CardContent>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Keterangan Status
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <StatusItem color="bg-blue-500" label="Masuk" desc="Pengaduan baru diterima" />
            <StatusItem color="bg-yellow-500" label="Proses" desc="Sedang dalam investigasi" />
            <StatusItem color="bg-green-500" label="Selesai" desc="Pengaduan telah ditanggapi" />
            <StatusItem color="bg-red-500" label="Ditolak" desc="Pengaduan tidak memenuhi syarat" />
            <StatusItem color="bg-gray-500" label="Pending" desc="Menunggu informasi tambahan" />
          </ul>
        </CardContent>
      </Card>

      {/* Layanan Pengaduan */}
      <Card className="border shadow-sm rounded-2xl">
        <CardContent>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Layanan Pengaduan
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <span className="font-semibold">Hotline:</span> (0251) 123-4567
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              pengaduan@kotabogor.go.id
            </li>
            <li>
              <span className="font-semibold">Jam Operasional:</span>{" "}
              Senin–Jumat, 08:00–16:00
            </li>
            <li>
              <span className="font-semibold">Lokasi:</span> Kantor DPMPTSP Kota
              Bogor
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

function StatusItem({
  color,
  label,
  desc,
}: {
  color: string;
  label: string;
  desc: string;
}) {
  return (
    <li className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <span>
        <span className="font-semibold">{label}:</span> {desc}
      </span>
    </li>
  );
}
