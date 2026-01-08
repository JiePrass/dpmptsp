"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ChevronRight, Download } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

type BahanPaparanItem = {
    no: number;
    judul: string;
    fileUrl: string;
};

const bahanPaparanData: BahanPaparanItem[] = [
    {
        no: 1,
        judul: "Sosialisasi Sertifikat Elektronik Pemerintah Kota Bogor",
        fileUrl: "/dummy/bahan-paparan-sertifikat-elektronik.pdf",
    },
    {
        no: 2,
        judul: "Pedoman dan Tata Cara Pengisian LKPM",
        fileUrl: "/dummy/bahan-paparan-lkpm.pdf",
    },
    {
        no: 3,
        judul: "Bahan Paparan",
        fileUrl: "/dummy/bahan-paparan-umum.pdf",
    },
];

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

export default function BahanPaparanPage() {
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
                                <BreadcrumbLink href="/informasi/perizinan">
                                    Informasi Perizinan
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Bahan Paparan</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Bahan Paparan
                    </h1>
                    <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />
                    <p className="text-gray-600 max-w-3xl">
                        Kumpulan bahan paparan dan materi sosialisasi sebagai referensi
                        pelayanan perizinan dan non perizinan pada DPMPTSP Kota Bogor.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Konten */}
                    <div className="lg:col-span-2">
                        <Card className="border shadow-sm rounded-2xl">
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-primary/5">
                                            <TableHead className="w-12">No</TableHead>
                                            <TableHead>Judul Paparan</TableHead>
                                            <TableHead className="text-center w-40">
                                                Download
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {bahanPaparanData.map((item) => (
                                            <TableRow key={item.no}>
                                                <TableCell>{item.no}</TableCell>

                                                <TableCell className="whitespace-normal wrap-break-word leading-relaxed max-w-xl">
                                                    {item.judul}
                                                </TableCell>

                                                <TableCell className="text-center">
                                                    <Link
                                                        href={item.fileUrl}
                                                        target="_blank"
                                                        className="inline-flex"
                                                    >
                                                        <Button size="sm" variant="outline">
                                                            <Download className="w-4 h-4 mr-2" />
                                                            Download
                                                        </Button>
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <Card className="border shadow-sm rounded-2xl overflow-hidden">
                        <CardContent>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b">
                                Informasi Lainnya
                            </h3>
                            <ul className="space-y-4">
                                {informasiPerizinanLinks.map((item, i) => (
                                    <li key={i}>
                                        <Link
                                            href={item.href}
                                            className="flex items-center justify-between p-4 rounded-lg hover:bg-primary/5 transition-colors group border border-primary/20"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                                                <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                                                    {item.label}
                                                </span>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
