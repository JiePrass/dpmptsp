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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Download, ChevronRight, FileText, Eye, Info } from "lucide-react";

type IzinItem = {
    id: number;
    nama: string;
    hari: number;
    biaya: string;
    kategori: string;
    kode?: string;
};

type Persyaratan = {
    id: number;
    kategori: string;
    items: string[];
};

const informasiPerizinanLinks = [
    {
        label: "Cara Daftar",
        href: "/informasi/perizinan/cara-daftar",
    },
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
    { id: 1, nama: "Izin Mendirikan Bangunan Splitzing", hari: 3, biaya: "GRATIS", kategori: "ruang", kode: "158/1" },
    { id: 2, nama: "Keterangan Rencana Kota Berusaha", hari: 14, biaya: "GRATIS", kategori: "ruang", kode: "204/1" },
    { id: 3, nama: "Keterangan Rencana Kota Non Berusaha", hari: 14, biaya: "GRATIS", kategori: "ruang", kode: "205/1" },
    { id: 4, nama: "Pengesahan Akte Pemisahan Satuan Rumah Susun", hari: 14, biaya: "GRATIS", kategori: "ruang", kode: "177/1" },
    { id: 5, nama: "Pengesahan Pertelaan Rumah Susun", hari: 14, biaya: "GRATIS", kategori: "ruang", kode: "176/1" },
    { id: 6, nama: "Pengesahan Rencana Tapak (Siteplan)", hari: 14, biaya: "GRATIS", kategori: "ruang", kode: "057/1" },
    { id: 7, nama: "Rekomendasi Damkar", hari: 5, biaya: "GRATIS", kategori: "ruang", kode: "197/1" },
    { id: 8, nama: "Rekomendasi Dishub", hari: 14, biaya: "GRATIS", kategori: "ruang", kode: "201/1" },
    { id: 9, nama: "SPPL", hari: 14, biaya: "GRATIS", kategori: "ruang", kode: "200/1" },
    { id: 10, nama: "SPPL Non Berusaha", hari: 14, biaya: "GRATIS", kategori: "ruang", kode: "202/1" },
];

const izinOperasional: IzinItem[] = [
    { id: 11, nama: "Izin Pendirian Program atau Satuan Pendidikan", hari: 14, biaya: "GRATIS", kategori: "operasional" },
    { id: 12, nama: "Izin Penyelenggaraan Reklame", hari: 5, biaya: "GRATIS", kategori: "operasional" },
    { id: 13, nama: "Izin Penyelenggaraan Reklame Berjalan", hari: 3, biaya: "GRATIS", kategori: "operasional" },
    { id: 14, nama: "Izin Penyelenggaraan Reklame Non Permanen", hari: 3, biaya: "GRATIS", kategori: "operasional" },
    { id: 15, nama: "Izin Praktik Dokter", hari: 5, biaya: "GRATIS", kategori: "operasional" },
    { id: 16, nama: "Izin Praktik Dokter Gigi", hari: 5, biaya: "GRATIS", kategori: "operasional" },
    { id: 17, nama: "Izin Praktik Apoteker", hari: 3, biaya: "GRATIS", kategori: "operasional" },
    { id: 18, nama: "Izin Praktik Bidan", hari: 3, biaya: "GRATIS", kategori: "operasional" },
    { id: 19, nama: "Izin Praktik Perawat", hari: 3, biaya: "GRATIS", kategori: "operasional" },
    { id: 20, nama: "Sertifikat Laik Higiene Sanitasi Jasa Boga SPPG MBG", hari: 7, biaya: "GRATIS", kategori: "operasional" },
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

const persyaratanData: Persyaratan[] = [
    {
        id: 1,
        kategori: "Perizinan Baru",
        items: [
            "Kartu Tanda Penduduk (KTP) yang masih berlaku dan bagi pemohon yang berbadan hukum dilengkapi dengan akte pendirian",
            "Bukti lunas pembayaran pajak bumi dan bangunan (PBB)-P2 lima tahun terakhir",
            "Rencana Tapak/Siteplan yang telah disahkan, bagi yang memenuhi kriteria siteplan",
            "IMB induk dan gambar rencana bangunan yang sudah divalidasi (denah, tampak dan potongan dengan skala 1:100 atau 1:200)",
            "Daftar Nama Pemilik Bangunan dan Type Bangunan yang akan di Splitzing",
            "NPWP Perusahaan/NPWP Cabang Bogor bagi usaha yang kantor pusatnya berada di luar Kota Bogor, NPWP Perorangan untuk usaha perorangan, yang telah diverifikasi dan sesuai dalam Sistem Konfirmasi Status Wajib Pajak (SKSWP)",
            "Sertifikat Hak Atas Tanah Induk",
            "Nomor Induk Berusaha (NIB) dari OSS versi terbaru"
        ]
    },
    {
        id: 2,
        kategori: "Perubahan Perizinan",
        items: [
            "Kartu Tanda Penduduk (KTP) yang masih berlaku dan bagi pemohon yang berbadan hukum dilengkapi dengan akte pendirian",
            "Bukti lunas pembayaran pajak bumi dan bangunan (PBB)-P2 lima tahun terakhir",
            "Rencana Tapak/Siteplan yang telah disahkan, bagi yang memenuhi kriteria siteplan",
            "IMB induk dan gambar rencana bangunan yang sudah divalidasi (denah, tampak dan potongan dengan skala 1:100 atau 1:200)",
            "Daftar Nama Pemilik Bangunan dan Type Bangunan yang akan di Splitzing",
            "NPWP Perusahaan/NPWP Cabang Bogor bagi usaha yang kantor pusatnya berada di luar Kota Bogor, NPWP Perorangan untuk usaha perorangan, yang telah diverifikasi dan sesuai dalam Sistem Konfirmasi Status Wajib Pajak (SKSWP)",
            "Sertifikat Hak Atas Tanah Induk",
            "Nomor Induk Berusaha (NIB) dari OSS versi terbaru",
            "IMB Splitzing lama"
        ]
    }
];

export default function JenisDanSyaratPage() {
    const [bidang, setBidang] = useState<string>("ruang");
    const [selectedIzin, setSelectedIzin] = useState<IzinItem | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = (izin: IzinItem) => {
        setSelectedIzin(izin);
        setIsDialogOpen(true);
    };

    const getCurrentIzinList = () => {
        switch (bidang) {
            case "ruang":
                return izinRuang;
            case "operasional":
                return izinOperasional;
            case "oss":
                return [];
            default:
                return izinRuang;
        }
    };

    return (
        <section className="w-full py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mb-12 mt-10">
                    <Breadcrumb className="mb-4">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-gray-600 hover:text-primary">
                                    Beranda
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/informasi/perizinan" className="text-gray-600 hover:text-primary">
                                    Informasi Perizinan
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-primary font-semibold">
                                    Jenis dan Syarat
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                Jenis dan Syarat Perizinan
                            </h1>
                            <div className="w-20 h-1.5 bg-primary rounded-full mb-4" />
                            <p className="text-gray-600 max-w-3xl">
                                Informasi jenis perizinan beserta estimasi waktu penyelesaian dan
                                biaya pelayanan pada DPMPTSP Kota Bogor.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                            <CardContent className="p-6 space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Bidang Izin
                                    </label>
                                    <Select value={bidang} onValueChange={setBidang}>
                                        <SelectTrigger className="w-full h-12">
                                            <SelectValue placeholder="Pilih Bidang Perizinan" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ruang">Izin Pemanfaatan Ruang</SelectItem>
                                            <SelectItem value="operasional">Izin Operasional</SelectItem>
                                            <SelectItem value="oss">OSS</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="overflow-x-auto rounded-lg border">
                                    {bidang !== "oss" ? (
                                        <Table>
                                            <TableHeader>
                                                <TableRow className="bg-blue-50 hover:bg-blue-50">
                                                    <TableHead className="w-12 text-center font-semibold text-gray-700">
                                                        NO
                                                    </TableHead>
                                                    <TableHead className="font-semibold text-gray-700">
                                                        JENIS IZIN
                                                    </TableHead>
                                                    <TableHead className="text-center font-semibold text-gray-700">
                                                        WAKTU (Hari)
                                                    </TableHead>
                                                    <TableHead className="text-center font-semibold text-gray-700">
                                                        BIAYA
                                                    </TableHead>
                                                    <TableHead className="text-center font-semibold text-gray-700">
                                                        AKSI
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {getCurrentIzinList().map((item, i) => (
                                                    <TableRow key={item.id} className="hover:bg-gray-50">
                                                        <TableCell className="text-center font-medium">
                                                            {i + 1}
                                                        </TableCell>
                                                        <TableCell className="font-medium text-gray-800">
                                                            {item.nama}
                                                        </TableCell>
                                                        <TableCell className="text-center">
                                                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                                                {item.hari} Hari
                                                            </span>
                                                        </TableCell>
                                                        <TableCell className="text-center">
                                                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                                                {item.biaya}
                                                            </span>
                                                        </TableCell>
                                                        <TableCell className="text-center">
                                                            <div className="flex justify-center gap-2">
                                                                <Button
                                                                    size="sm"
                                                                    variant="outline"
                                                                    className="border-blue-200 hover:bg-blue-50"
                                                                    onClick={() => handleOpenDialog(item)}
                                                                >
                                                                    <Eye className="w-4 h-4 mr-2" />
                                                                    Lihat
                                                                </Button>
                                                                {item.kode && (
                                                                    <Button
                                                                        size="sm"
                                                                        variant="default"
                                                                        className="bg-primary hover:bg-primary/90"
                                                                    >
                                                                        <Download className="w-4 h-4 mr-2" />
                                                                        Unduh
                                                                    </Button>
                                                                )}
                                                            </div>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    ) : (
                                        <Table>
                                            <TableHeader>
                                                <TableRow className="bg-blue-50 hover:bg-blue-50">
                                                    <TableHead className="w-12 text-center font-semibold text-gray-700">
                                                        NO
                                                    </TableHead>
                                                    <TableHead className="font-semibold text-gray-700">
                                                        SEKTOR
                                                    </TableHead>
                                                    <TableHead className="text-center font-semibold text-gray-700">
                                                        AKSI
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {oss.map((item, i) => (
                                                    <TableRow key={i} className="hover:bg-gray-50">
                                                        <TableCell className="text-center font-medium">
                                                            {i + 1}
                                                        </TableCell>
                                                        <TableCell className="font-medium text-gray-800">
                                                            {item}
                                                        </TableCell>
                                                        <TableCell className="text-center">
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="border-blue-200 hover:bg-blue-50"
                                                            >
                                                                <Info className="w-4 h-4 mr-2" />
                                                                Detail
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-gray-200 shadow-sm rounded-xl">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <FileText className="w-5 h-5 mr-2 text-primary" />
                                    Informasi Penting
                                </h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                        <span>Semua layanan perizinan di DPMPTSP Kota Bogor tidak dikenakan biaya (GRATIS)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                        <span>Waktu penyelesaian dihitung sejak kelengkapan dokumen diterima</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                        <span>Pastikan dokumen persyaratan sudah lengkap sebelum diajukan</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                        <span>Untuk informasi lebih detail, silahkan hubungi kami di (0251) 1234567</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card className="border border-gray-200 shadow-sm rounded-xl">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b">
                                    Informasi Perizinan
                                </h3>
                                <ul className="space-y-3">
                                    {informasiPerizinanLinks.map((item, i) => (
                                        <li key={i}>
                                            <Link
                                                href={item.href}
                                                className={`flex items-center justify-between p-3 border rounded-lg transition-all hover:shadow-sm ${item.label === "Jenis dan Syarat"
                                                        ? "border-primary bg-primary/5 text-primary"
                                                        : "border-gray-200 hover:bg-gray-50 text-gray-700"
                                                    }`}
                                            >
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 rounded-full mr-3 ${item.label === "Jenis dan Syarat" ? "bg-primary" : "bg-gray-300"}`} />
                                                    <span className="font-medium">{item.label}</span>
                                                </div>
                                                <ChevronRight className={`w-4 h-4 ${item.label === "Jenis dan Syarat" ? "text-primary" : "text-gray-400"}`} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border border-gray-200 shadow-sm rounded-xl">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b">
                                    Layanan Cepat
                                </h3>
                                <div className="space-y-3">
                                    <Button asChild variant="outline" className="w-full justify-start h-12">
                                        <Link href="https://perizinan.kotabogor.go.id/izin2">
                                            <FileText className="w-4 h-4 mr-3" />
                                            Perizinan Online
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" className="w-full justify-start h-12">
                                        <Link href="https://oss.go.id/informasi/kbli-berbasis-risiko">
                                            <FileText className="w-4 h-4 mr-3" />
                                            Pencarian Perizinan (KBLI)
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" className="w-full justify-start h-12">
                                        <Link href="https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/l/5">
                                            <FileText className="w-4 h-4 mr-3" />
                                            Bantuan
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                            Persyaratan {selectedIzin?.nama}
                        </DialogTitle>
                        <DialogDescription>
                            Daftar persyaratan yang harus dilengkapi untuk pengajuan perizinan
                        </DialogDescription>
                    </DialogHeader>

                    <div className="py-4">
                        <Accordion type="single" collapsible defaultValue="item-1">
                            {persyaratanData.map((persyaratan) => (
                                <AccordionItem key={persyaratan.id} value={`item-${persyaratan.id}`}>
                                    <AccordionTrigger className="hover:no-underline">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                                            <span className="font-semibold text-left">
                                                {persyaratan.kategori}
                                            </span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="pl-5 space-y-2">
                                            {persyaratan.items.map((item, index) => (
                                                <div key={index} className="flex items-start py-2">
                                                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-800 font-medium text-sm mr-3 flex-shrink-0">
                                                        {index + 1}
                                                    </div>
                                                    <p className="text-gray-700 leading-relaxed">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <DialogFooter className="border-t pt-4">
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                            Tutup
                        </Button>
                        <Button>
                            <Download className="w-4 h-4 mr-2" />
                            Unduh Persyaratan
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </section>
    );
}