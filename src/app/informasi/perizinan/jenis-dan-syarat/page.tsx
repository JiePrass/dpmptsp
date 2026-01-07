"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

type IzinItem = {
    nama: string;
    hari: number;
    biaya: string;
};

const informasiPerizinanLinks = [
    {
        label: "Jenis dan Syarat",
        href: "/informasi/perizinan/jenis-dan-syarat",
    },
    {
        label: "Peraturan dan Regulasi",
        href: "/informasi/perizinan/peraturan-dan-regulasi",
    },
    {
        label: "Surat Pernyataan",
        href: "/informasi/perizinan/surat-pernyataan",
    },
    {
        label: "Standar Gambar (DWG)",
        href: "/informasi/perizinan/standar-gambar",
    },
    {
        label: "Bahan Paparan",
        href: "/informasi/perizinan/bahan-paparan",
    },
];

const izinRuang: IzinItem[] = [
    { nama: "Izin Mendirikan Bangunan Splitzing", hari: 14, biaya: "GRATIS" },
    { nama: "Keterangan Rencana Kota Berusaha", hari: 7, biaya: "GRATIS" },
    { nama: "Keterangan Rencana Kota Non Berusaha", hari: 7, biaya: "GRATIS" },
    { nama: "Pengesahan Akte Pemisahan Satuan Rumah Susun", hari: 21, biaya: "GRATIS" },
    { nama: "Pengesahan Pertelaan Rumah Susun", hari: 21, biaya: "GRATIS" },
    { nama: "Pengesahan Rencana Tapak (Siteplan)", hari: 14, biaya: "GRATIS" },
    { nama: "Rekomendasi Damkar", hari: 5, biaya: "GRATIS" },
    { nama: "Rekomendasi Dishub", hari: 5, biaya: "GRATIS" },
    { nama: "SPPL", hari: 3, biaya: "GRATIS" },
    { nama: "SPPL Non Berusaha", hari: 3, biaya: "GRATIS" },
];

const izinOperasional: IzinItem[] = [
    { nama: "Izin Pendirian Program atau Satuan Pendidikan", hari: 14, biaya: "GRATIS" },
    { nama: "Izin Penyelenggaraan Reklame", hari: 5, biaya: "GRATIS" },
    { nama: "Izin Penyelenggaraan Reklame Berjalan", hari: 3, biaya: "GRATIS" },
    { nama: "Izin Penyelenggaraan Reklame Non Permanen", hari: 3, biaya: "GRATIS" },
    { nama: "Izin Praktik Dokter", hari: 5, biaya: "GRATIS" },
    { nama: "Izin Praktik Dokter Gigi", hari: 5, biaya: "GRATIS" },
    { nama: "Izin Praktik Apoteker", hari: 3, biaya: "GRATIS" },
    { nama: "Izin Praktik Bidan", hari: 3, biaya: "GRATIS" },
    { nama: "Izin Praktik Perawat", hari: 3, biaya: "GRATIS" },
    { nama: "Sertifikat Laik Higiene Sanitasi Jasa Boga SPPG MBG", hari: 7, biaya: "GRATIS" },
];


const oss = [
    "SEKTOR INDUSTRI",
    "SEKTOR PERDAGANGAN",
    "SEKTOR KESEHATAN",
    "SEKTOR KETENAGAKERJAAN",
    "SEKTOR TRANSPORTASI",
    "SEKTOR PERTANIAN",
    "SEKTOR KELAUTAN DAN PERIKANAN",
    "SEKTOR LINGKUNGAN HIDUP & KEHUTANAN",
];

export default function JenisDanSyaratPage() {
    const [bidang, setBidang] = useState<string | null>(null);

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-12 mt-10">
                    <Breadcrumb className="mb-4">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/informasi/perizinan/">Informasi Perizinan</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Jenis dan Syarat</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Jenis dan Syarat Perizinan
                    </h1>
                    <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />
                    <p className="text-gray-600 max-w-3xl">
                        Informasi jenis perizinan beserta estimasi waktu penyelesaian dan
                        biaya pelayanan pada DPMPTSP Kota Bogor.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Konten */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="border shadow-sm rounded-2xl">
                            <CardContent className="p-6 space-y-6">
                                <Select onValueChange={setBidang}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Pilih Bidang Perizinan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ruang">Izin Pemanfaatan Ruang</SelectItem>
                                        <SelectItem value="operasional">Izin Operasional</SelectItem>
                                        <SelectItem value="oss">OSS</SelectItem>
                                    </SelectContent>
                                </Select>

                                {bidang === "ruang" && (
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="bg-primary/5">
                                                <TableHead className="w-12">No</TableHead>
                                                <TableHead>Jenis Izin</TableHead>
                                                <TableHead>Waktu (Hari)</TableHead>
                                                <TableHead>Biaya</TableHead>
                                                <TableHead className="text-center">Aksi</TableHead>
                                            </TableRow>
                                        </TableHeader>

                                        <TableBody>
                                            {izinRuang.map((item, i) => (
                                                <TableRow key={i}>
                                                    <TableCell>{i + 1}</TableCell>
                                                    <TableCell>{item.nama}</TableCell>
                                                    <TableCell>{item.hari}</TableCell>
                                                    <TableCell>{item.biaya}</TableCell>
                                                    <TableCell className="text-center">
                                                        <Button size="sm" variant="outline">
                                                            Lihat Syarat
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                )}

                                {bidang === "operasional" && (
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="bg-primary/5">
                                                <TableHead className="w-12">No</TableHead>
                                                <TableHead>Jenis Izin</TableHead>
                                                <TableHead>Waktu (Hari)</TableHead>
                                                <TableHead>Biaya</TableHead>
                                                <TableHead className="text-center">Aksi</TableHead>
                                            </TableRow>
                                        </TableHeader>

                                        <TableBody>
                                            {izinOperasional.map((item, i) => (
                                                <TableRow key={i}>
                                                    <TableCell>{i + 1}</TableCell>
                                                    <TableCell>{item.nama}</TableCell>
                                                    <TableCell>{item.hari}</TableCell>
                                                    <TableCell>{item.biaya}</TableCell>
                                                    <TableCell className="text-center">
                                                        <Button size="sm" variant="outline">
                                                            Lihat Syarat
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                )}

                                {bidang === "oss" && (
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="bg-primary/5">
                                                <TableHead className="w-12">No</TableHead>
                                                <TableHead>Sektor</TableHead>
                                                <TableHead className="text-center">Aksi</TableHead>
                                            </TableRow>
                                        </TableHeader>

                                        <TableBody>
                                            {oss.map((item, i) => (
                                                <TableRow key={i}>
                                                    <TableCell>{i + 1}</TableCell>
                                                    <TableCell>{item}</TableCell>
                                                    <TableCell className="text-center">
                                                        <Button size="sm" variant="outline">
                                                            Detail
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <Card className="border shadow-sm rounded-2xl">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-4">Informasi Perizinan</h3>
                                <ul className="space-y-2">
                                    {informasiPerizinanLinks.map((item, i) => (
                                        <li key={i}>
                                            <Link
                                                href={item.href}
                                                className="flex items-center justify-between p-3 border rounded-lg hover:bg-primary/5 transition-colors"
                                            >
                                                <span className="font-medium text-gray-700">
                                                    {item.label}
                                                </span>
                                                <ChevronRight className="w-4 h-4 text-gray-400" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
