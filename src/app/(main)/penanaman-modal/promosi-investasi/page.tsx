"use client"

import {
    FileDown,
    FolderOpen,
    Info,
} from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

/* ================= DATA ================= */

const documents = [
    { id: 1, title: "Peluang Investasi Kota Bogor Tahun 2016" },
    { id: 2, title: "Kegiatan Promosi Investasi Tahun 2017" },
    { id: 3, title: "Buku Profil dan Peluang Investasi Tahun 2017" },
    { id: 4, title: "Buku Profil Potensi dan Peluang Investasi Kota Bogor Tahun 2017" },
    { id: 5, title: "Buku Potensi Produk Unggulan UMKM Kota Bogor Tahun 2018" },
    { id: 6, title: "Buku Bogor Berlari Tahun 2019" },
    { id: 7, title: "Buku Profil dan Peluang Investasi Tahun 2019" },
    { id: 8, title: "Buku Temu Investor Tahun 2019" },
    { id: 9, title: "Kajian Potensi Investasi Kota Bogor Tahun 2021" },
    { id: 10, title: "Kajian Peluang Investasi Kecamatan Bogor Timur Tahun 2021" },
    { id: 11, title: "Peta Potensi Investasi Tahun 2023" },
    { id: 12, title: "Peta Potensi Investasi Tahun 2022" },
]


export default function PromosiInvestasiPage() {
    return (
        <main className="bg-background max-w-7xl container mx-auto px-6">
            <div className="mt-10 py-16 container">
                <Breadcrumb className="mb-4">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/penanaman-modal/arah-dan-kebijakan">
                                Penanaman Modal
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Promosi Investasi</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            Promosi Investasi Kota Bogor
                        </h1>
                        <div className="w-24 h-1.5 bg-primary rounded-full" />
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FolderOpen className="w-4 h-4" />
                        <span>Dokumen & Publikasi</span>
                    </div>
                </div>

                <p className="text-gray-600 max-w-3xl">
                    Kumpulan dokumen profil, potensi, dan peluang investasi Kota Bogor
                    yang digunakan dalam kegiatan promosi investasi.
                </p>
            </div>

            <section className="container mx-auto pb-16">
                {/* ================= CONTENT ================= */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-8 space-y-10">
                        <Card className="border">
                            <CardHeader>
                                <CardTitle>Daftar Dokumen Promosi Investasi</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    Dokumen resmi promosi dan profil investasi
                                </p>
                            </CardHeader>

                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-16">No</TableHead>
                                            <TableHead>Profil Potensi & Peluang Investasi</TableHead>
                                            <TableHead className="w-40 text-center">
                                                Aksi
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {documents.map((doc, index) => (
                                            <TableRow key={doc.id}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell className="font-medium">
                                                    {doc.title}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="gap-2"
                                                    >
                                                        <FileDown className="h-4 w-4" />
                                                        Download
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>

                        <div className="rounded-xl border bg-muted p-6 text-sm">
                            <div className="flex items-start gap-3">
                                <Info className="mt-0.5 h-5 w-5 text-muted-foreground" />
                                <p className="text-muted-foreground">
                                    Seluruh dokumen promosi investasi ini disusun dan dikelola
                                    oleh DPMPTSP Kota Bogor sebagai bahan informasi bagi calon
                                    investor.
                                </p>
                            </div>
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-6">
                        <Card className="border">
                            <CardHeader>
                                <CardTitle>Informasi Dokumen</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="1">
                                        <AccordionTrigger>Jenis Dokumen</AccordionTrigger>
                                        <AccordionContent>
                                            Buku profil, kajian investasi, peta potensi, dan
                                            laporan promosi.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="2">
                                        <AccordionTrigger>Sumber</AccordionTrigger>
                                        <AccordionContent>
                                            DPMPTSP Kota Bogor
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="3">
                                        <AccordionTrigger>Tujuan</AccordionTrigger>
                                        <AccordionContent>
                                            Mendukung promosi investasi dan memberikan gambaran
                                            potensi daerah kepada investor.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="4">
                                        <AccordionTrigger>Catatan</AccordionTrigger>
                                        <AccordionContent>
                                            Beberapa dokumen bersifat periodik dan dapat
                                            diperbarui sesuai kebijakan terbaru.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </section>
        </main>
    )
}
