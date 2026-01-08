"use client";

import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import InformasiPengaduanSidebar from "@/components/shared/InformasiPengaduanSidebar";

const ikmTable = [
    { no: 1, indikator: "Kesesuaian persyaratan pelayanan", nilai: 85.94, kategori: "B - BAIK" },
    { no: 2, indikator: "Kemudahan prosedur pelayanan", nilai: 85.16, kategori: "B - BAIK" },
    { no: 3, indikator: "Kecepatan waktu pelayanan", nilai: 82.81, kategori: "B - BAIK" },
    { no: 4, indikator: "Kewajaran biaya/tarif", nilai: 93.75, kategori: "A - SANGAT BAIK" },
    { no: 5, indikator: "Kesesuaian produk pelayanan", nilai: 85.94, kategori: "B - BAIK" },
    { no: 6, indikator: "Kompetensi petugas pelayanan", nilai: 84.38, kategori: "B - BAIK" },
    { no: 7, indikator: "Perilaku petugas (sopan & ramah)", nilai: 86.72, kategori: "B - BAIK" },
    { no: 8, indikator: "Kualitas sarana dan prasarana", nilai: 85.16, kategori: "B - BAIK" },
    { no: 9, indikator: "Penanganan pengaduan", nilai: 96.88, kategori: "A - SANGAT BAIK" },
];

const chartData = [
    { name: "Ind 1", nilai: 86 },
    { name: "Ind 2", nilai: 85 },
    { name: "Ind 3", nilai: 83 },
    { name: "Ind 4", nilai: 94 },
    { name: "Ind 5", nilai: 86 },
    { name: "Ind 6", nilai: 84 },
    { name: "Ind 7", nilai: 87 },
    { name: "Ind 8", nilai: 85 },
    { name: "Ind 9", nilai: 97 },
];

export default function InformasiPublikIKMPage() {
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
                                <BreadcrumbLink href="/informasi/publik">Informasi Publik</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Indeks Kepuasan Masyarakat</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Indeks Kepuasan Masyarakat (IKM)
                    </h1>
                    <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />

                    <p className="text-gray-600 max-w-3xl">
                        Hasil pengukuran Indeks Kepuasan Masyarakat terhadap pelayanan
                        DPMPTSP Kota Bogor sebagai bentuk transparansi dan evaluasi
                        peningkatan kualitas layanan.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Tabel Indeks Kepuasan Masyarakat
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary/5 text-left">
                                        <th className="p-3 border">No</th>
                                        <th className="p-3 border">Indikator</th>
                                        <th className="p-3 border">Nilai</th>
                                        <th className="p-3 border">Kategori</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ikmTable.map((row) => (
                                        <tr key={row.no} className="hover:bg-gray-50">
                                            <td className="p-3 border">{row.no}</td>
                                            <td className="p-3 border">{row.indikator}</td>
                                            <td className="p-3 border">{row.nilai}</td>
                                            <td className="p-3 border">{row.kategori}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <Card className="border shadow-sm rounded-2xl">
                            <CardContent className="p-8 space-y-3">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Keterangan
                                </h2>
                                <p className="text-gray-700">Nilai IKM : <b>96.88</b></p>
                                <p className="text-gray-700">Nilai Indeks : <b>3.5</b></p>
                                <p className="text-gray-700">Mutu Pelayanan : <b>A - SANGAT BAIK</b></p>
                            </CardContent>
                        </Card>

                        <Card className="border shadow-sm rounded-2xl">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Grafik Indeks Kepuasan
                                </h2>
                                <div className="w-full h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={chartData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis domain={[80, 100]} />
                                            <Tooltip />
                                            <Bar dataKey="nilai" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                       <InformasiPengaduanSidebar activeMenu="Indeks Kepuasan Masyarakat" />
                    </div>
                </div>
            </div>
        </section>
    );
}
