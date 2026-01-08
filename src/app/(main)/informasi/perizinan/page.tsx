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

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { ChevronRight } from "lucide-react";

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

export default function InformasiPerizinanPage() {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 mt-10">
                    <Breadcrumb className="mb-4">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/informasi/perizinan">Informasi Perizinan</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Cara Daftar</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Cara Daftar Perizinan Online
                    </h1>
                    <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />

                    <p className="text-gray-600 max-w-3xl">
                        Panduan pendaftaran akun perizinan pada Dinas Penanaman Modal dan
                        Pelayanan Terpadu Satu Pintu (DPMPTSP) Kota Bogor.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <Card className="border shadow-sm rounded-2xl">
                            <CardContent className="space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Dokumen yang Perlu Dipersiapkan
                                    </h2>

                                    <div className="space-y-3">
                                        <p className="font-semibold text-gray-800">Akun Perusahaan</p>
                                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                                            <li>Nomor NPWP Perusahaan</li>
                                            <li>Nama Perusahaan / Badan Usaha</li>
                                            <li>Email Perusahaan / Pemilik</li>
                                            <li>Nomor Telepon Perusahaan / Pemilik</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="font-semibold text-gray-800">Akun Perorangan</p>
                                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                                            <li>Nomor Induk Kependudukan (NIK)</li>
                                            <li>Nama Pemohon</li>
                                            <li>Email Pemohon</li>
                                            <li>Nomor Telepon Pemohon</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Perbedaan Akun
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Akun perusahaan digunakan khusus untuk pengajuan dan
                                        pengurusan perizinan yang berkaitan dengan aktivitas
                                        perusahaan atau badan usaha. Akun perorangan digunakan
                                        untuk pengajuan perizinan individu atau badan usaha
                                        perorangan.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Cara Mendaftar Akun
                                    </h2>
                                    <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                                        <li>
                                            Akses website DPMPTSP Kota Bogor melalui{' '}
                                            <a
                                                href="https://perizinan.kotabogor.go.id/"
                                                target="_blank"
                                                className="text-primary font-medium underline"
                                            >
                                                https://perizinan.kotabogor.go.id/
                                            </a>
                                        </li>
                                        <li>Pilih menu <b>Perizinan Online</b> lalu klik <b>Daftar Disini</b>.</li>
                                        <li>Lengkapi formulir pendaftaran sesuai jenis akun.</li>
                                        <li>Klik daftar dan cek email untuk mendapatkan password.</li>
                                        <li>Login menggunakan akun yang telah dibuat.</li>
                                    </ol>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card className="border shadow-sm rounded-2xl">
                            <CardContent>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Ringkasan Panduan
                                </h3>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Akun Perorangan</AccordionTrigger>
                                        <AccordionContent className="text-gray-600">
                                            Digunakan untuk pengajuan perizinan individu dengan
                                            identitas pribadi pemohon.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Akun Perusahaan</AccordionTrigger>
                                        <AccordionContent className="text-gray-600">
                                            Digunakan untuk pengajuan perizinan badan usaha atau
                                            perusahaan.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Notifikasi</AccordionTrigger>
                                        <AccordionContent className="text-gray-600">
                                            Informasi status perizinan dikirim melalui email dan SMS
                                            ke nomor yang terdaftar.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>

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
            </div>
        </section>
    );
}
