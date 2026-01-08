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
  activeMenu = "Informasi dan Pengaduan",
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
      <Card className="border shadow-sm rounded-2xl">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Informasi Publik
          </h3>
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const isActive = item.name === activeMenu;
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between p-3 rounded-lg border hover:bg-primary/5 ${
                      isActive ? "bg-primary/5 border-primary/20" : ""
                    }`}
                  >
                    <span className="text-gray-700 font-medium">
                      {item.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>

      {/* Keterangan Status */}
      <Card className="border shadow-sm rounded-2xl">
        <CardContent className="p-6">
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
        <CardContent className="p-6">
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
