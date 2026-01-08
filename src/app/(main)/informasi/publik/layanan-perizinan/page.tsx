"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import InformasiPengaduanSidebar from "@/components/shared/InformasiPengaduanSidebar";
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
    Legend,
} from "recharts";

interface LayananData {
    kategori: string;
    diterima: number;
    diproses: number;
    ditolak: number;
    selesai: number;
    lain_lain: number;
}

interface ChartGraph {
    balloonText: string;
    fillAlphas: number;
    lineAlpha: number;
    title: string;
    type: string;
    color: string;
    valueField: string;
}

export default function LayananPerizinanPage() {
    const [selectedYear, setSelectedYear] = useState<string>("2026");
    const [chartData, setChartData] = useState<LayananData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [totalStats, setTotalStats] = useState({
        diterima: 0,
        diproses: 0,
        ditolak: 0,
        selesai: 0,
        lain_lain: 0
    });

    // Daftar tahun untuk dropdown
    const years = [
        "2020", "2021", "2022", "2023", "2024", "2025", "2026"
    ];

    // Data contoh berdasarkan struktur dari PHP
    const sampleData: LayananData[] = [
        { kategori: "Perizinan Berusaha", diterima: 120, diproses: 45, ditolak: 5, selesai: 110, lain_lain: 2 },
        { kategori: "Perizinan Non Berusaha", diterima: 85, diproses: 25, ditolak: 3, selesai: 80, lain_lain: 1 },
        { kategori: "Pertimbangan Teknis", diterima: 65, diproses: 15, ditolak: 2, selesai: 60, lain_lain: 1 },
        { kategori: "Persetujuan Bangunan", diterima: 150, diproses: 50, ditolak: 8, selesai: 140, lain_lain: 3 },
        { kategori: "Perizinan Lainnya", diterima: 40, diproses: 10, ditolak: 1, selesai: 38, lain_lain: 1 },
    ];

    // Fetch data dari API
    const fetchLayananData = async (year: string) => {
        setIsLoading(true);
        try {
            // Simulasi API call delay
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Untuk contoh, kita gunakan data statis yang dimodifikasi berdasarkan tahun
            const modifiedData = sampleData.map(item => ({
                ...item,
                diterima: item.diterima * (1 + (parseInt(year) - 2026) * 0.2),
                diproses: item.diproses * (1 + (parseInt(year) - 2026) * 0.2),
                ditolak: item.ditolak * (1 + (parseInt(year) - 2026) * 0.2),
                selesai: item.selesai * (1 + (parseInt(year) - 2026) * 0.2),
                lain_lain: item.lain_lain * (1 + (parseInt(year) - 2026) * 0.2)
            }));
            
            setChartData(modifiedData);
            
            // Hitung total statistik
            const totals = modifiedData.reduce((acc, item) => ({
                diterima: acc.diterima + item.diterima,
                diproses: acc.diproses + item.diproses,
                ditolak: acc.ditolak + item.ditolak,
                selesai: acc.selesai + item.selesai,
                lain_lain: acc.lain_lain + item.lain_lain
            }), { diterima: 0, diproses: 0, ditolak: 0, selesai: 0, lain_lain: 0 });
            
            setTotalStats(totals);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Effect untuk fetch data saat tahun berubah
    useEffect(() => {
        fetchLayananData(selectedYear);
    }, [selectedYear]);

    // Format tooltip
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
                    <p className="font-semibold text-gray-800 mb-2">{label}</p>
                    {payload.map((entry: any, index: number) => (
                        <p key={index} className="text-sm" style={{ color: entry.color }}>
                            {entry.name}: {entry.value.toLocaleString()} berkas
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

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
                                <BreadcrumbPage>Layanan Perizinan</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Layanan Perizinan
                            </h1>
                            <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />
                            <p className="text-gray-600 max-w-3xl">
                                Statistik pelayanan perizinan DPMPTSP Kota Bogor berdasarkan kategori dan status berkas
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <label htmlFor="tahun" className="text-sm font-medium text-gray-700">
                                Periode:
                            </label>
                            <select
                                id="tahun"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                disabled={isLoading}
                            >
                                {years.map(year => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="text-center bg-white p-4 rounded-lg border mb-8">
                        <h5 className="font-bold text-lg mb-2">
                            PERIODE 01 JANUARI {selectedYear} SAMPAI 31 DESEMBER {selectedYear}
                        </h5>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <Card className="border shadow-sm rounded-2xl">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Statistik Layanan Perizinan
                                </h2>
                                {isLoading ? (
                                    <div className="h-80 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                                            <p className="mt-4 text-gray-600">Memuat data...</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full h-80">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart
                                                data={chartData}
                                                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                                            >
                                                <CartesianGrid
                                                    strokeDasharray="3 3"
                                                    stroke="#f0f0f0"
                                                    vertical={false}
                                                />
                                                <XAxis
                                                    dataKey="kategori"
                                                    angle={-45}
                                                    textAnchor="end"
                                                    height={60}
                                                    tick={{ fontSize: 12 }}
                                                />
                                                <YAxis
                                                    tick={{ fontSize: 12 }}
                                                    width={60}
                                                    label={{ value: 'Jumlah Berkas', angle: -90, position: 'insideLeft' }}
                                                />
                                                <Tooltip
                                                    content={<CustomTooltip />}
                                                    cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                                                />
                                                <Legend
                                                    verticalAlign="top"
                                                    height={36}
                                                />
                                                <Bar
                                                    name="Diterima"
                                                    dataKey="diterima"
                                                    fill="#3b82f6"
                                                    radius={[4, 4, 0, 0]}
                                                />
                                                <Bar
                                                    name="Diproses"
                                                    dataKey="diproses"
                                                    fill="#f59e0b"
                                                    radius={[4, 4, 0, 0]}
                                                />
                                                <Bar
                                                    name="Ditolak"
                                                    dataKey="ditolak"
                                                    fill="#ef4444"
                                                    radius={[4, 4, 0, 0]}
                                                />
                                                <Bar
                                                    name="Selesai"
                                                    dataKey="selesai"
                                                    fill="#10b981"
                                                    radius={[4, 4, 0, 0]}
                                                />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        <Card className="border shadow-sm rounded-2xl">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Tabel Detail Layanan Perizinan
                                </h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="bg-primary/5 text-left">
                                                <th className="p-3 border">Kategori</th>
                                                <th className="p-3 border">Diterima</th>
                                                <th className="p-3 border">Diproses</th>
                                                <th className="p-3 border">Ditolak</th>
                                                <th className="p-3 border">Selesai</th>
                                                <th className="p-3 border">Lain-lain</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {chartData.map((item, index) => (
                                                <tr key={index} className="hover:bg-gray-50">
                                                    <td className="p-3 border">{item.kategori}</td>
                                                    <td className="p-3 border text-center">{item.diterima.toLocaleString()}</td>
                                                    <td className="p-3 border text-center">{item.diproses.toLocaleString()}</td>
                                                    <td className="p-3 border text-center">{item.ditolak.toLocaleString()}</td>
                                                    <td className="p-3 border text-center">{item.selesai.toLocaleString()}</td>
                                                    <td className="p-3 border text-center">{item.lain_lain.toLocaleString()}</td>
                                                </tr>
                                            ))}
                                            <tr className="font-semibold bg-gray-50">
                                                <td className="p-3 border">TOTAL</td>
                                                <td className="p-3 border text-center">{totalStats.diterima.toLocaleString()}</td>
                                                <td className="p-3 border text-center">{totalStats.diproses.toLocaleString()}</td>
                                                <td className="p-3 border text-center">{totalStats.ditolak.toLocaleString()}</td>
                                                <td className="p-3 border text-center">{totalStats.selesai.toLocaleString()}</td>
                                                <td className="p-3 border text-center">{totalStats.lain_lain.toLocaleString()}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <Card className="bg-blue-50 border border-blue-100 rounded-2xl">
                                <CardContent className="p-4 text-center">
                                    <h3 className="text-sm font-medium text-blue-900 mb-1">Diterima</h3>
                                    <p className="text-2xl font-bold text-blue-700">
                                        {totalStats.diterima.toLocaleString()}
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-yellow-50 border border-yellow-100 rounded-2xl">
                                <CardContent className="p-4 text-center">
                                    <h3 className="text-sm font-medium text-yellow-900 mb-1">Diproses</h3>
                                    <p className="text-2xl font-bold text-yellow-700">
                                        {totalStats.diproses.toLocaleString()}
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-red-50 border border-red-100 rounded-2xl">
                                <CardContent className="p-4 text-center">
                                    <h3 className="text-sm font-medium text-red-900 mb-1">Ditolak</h3>
                                    <p className="text-2xl font-bold text-red-700">
                                        {totalStats.ditolak.toLocaleString()}
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-green-50 border border-green-100 rounded-2xl">
                                <CardContent className="p-4 text-center">
                                    <h3 className="text-sm font-medium text-green-900 mb-1">Selesai</h3>
                                    <p className="text-2xl font-bold text-green-700">
                                        {totalStats.selesai.toLocaleString()}
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-purple-50 border border-purple-100 rounded-2xl">
                                <CardContent className="p-4 text-center">
                                    <h3 className="text-sm font-medium text-purple-900 mb-1">Lain-lain</h3>
                                    <p className="text-2xl font-bold text-purple-700">
                                        {totalStats.lain_lain.toLocaleString()}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <InformasiPengaduanSidebar activeMenu="Layanan Perizinan" />

                        <Card className="border shadow-sm rounded-2xl">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Keterangan Status
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">
                                            <span className="font-semibold">Diterima:</span> Berkas diterima dan masuk antrian
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">
                                            <span className="font-semibold">Diproses:</span> Sedang dalam proses verifikasi
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">
                                            <span className="font-semibold">Ditolak:</span> Berkas tidak memenuhi syarat
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">
                                            <span className="font-semibold">Selesai:</span> Proses perizinan selesai
                                        </span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}