/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
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

// Data contoh
const sampleData = [
    { bulan: "Januari", target: 450000000, realisasi: 420000000 },
    { bulan: "Februari", target: 460000000, realisasi: 440000000 },
    { bulan: "Maret", target: 470000000, realisasi: 460000000 },
    { bulan: "April", target: 480000000, realisasi: 475000000 },
    { bulan: "Mei", target: 490000000, realisasi: 485000000 },
    { bulan: "Juni", target: 500000000, realisasi: 495000000 },
    { bulan: "Juli", target: 510000000, realisasi: 500000000 },
    { bulan: "Agustus", target: 520000000, realisasi: 515000000 },
    { bulan: "September", target: 530000000, realisasi: 525000000 },
    { bulan: "Oktober", target: 540000000, realisasi: 535000000 },
    { bulan: "November", target: 550000000, realisasi: 545000000 },
    { bulan: "Desember", target: 560000000, realisasi: 555000000 },
];

interface RetribusiData {
    bulan: string;
    target: number;
    realisasi: number;
}

export default function RealisasiRetribusiChart() {
    const [selectedYear, setSelectedYear] = useState<string>("2024");
    const [chartData, setChartData] = useState<RetribusiData[]>(sampleData);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Daftar tahun untuk dropdown
    const years = [
        "2017", "2018", "2019", "2020", "2021",
        "2022", "2023", "2024", "2025", "2026"
    ];

    // Format angka ke dalam format Rupiah
    const formatRupiah = (value: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    // Custom tooltip untuk chart
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
                    <p className="font-semibold text-gray-800 mb-2">{label}</p>
                    {payload.map((entry: any, index: number) => (
                        <p key={index} className="text-sm" style={{ color: entry.color }}>
                            {entry.name}: {formatRupiah(entry.value)}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    // Fetch data dari API (simulasi)
    const fetchRetribusiData = async (year: string) => {
        setIsLoading(true);
        try {
            // Simulasi API call delay
            await new Promise(resolve => setTimeout(resolve, 500));

            // Untuk contoh, kita gunakan data statis yang dimodifikasi berdasarkan tahun
            const modifiedData = sampleData.map(item => ({
                ...item,
                realisasi: item.realisasi * (1 + (parseInt(year) - 2024) * 0.1),
                target: item.target * (1 + (parseInt(year) - 2024) * 0.1)
            }));

            setChartData(modifiedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Effect untuk fetch data saat tahun berubah
    useEffect(() => {
        fetchRetribusiData(selectedYear);
    }, [selectedYear]);

    // Format label pada sumbu Y
    const formatYAxis = (value: number) => {
        if (value >= 1000000000) {
            return `${(value / 1000000000).toFixed(0)}M`;
        } else if (value >= 1000000) {
            return `${(value / 1000000).toFixed(0)}JT`;
        } else if (value >= 1000) {
            return `${(value / 1000).toFixed(0)}K`;
        }
        return value.toString();
    };

    // Hitung statistik
    const totalTarget = chartData.reduce((sum, item) => sum + item.target, 0);
    const totalRealisasi = chartData.reduce((sum, item) => sum + item.realisasi, 0);
    const pencapaian = totalTarget > 0 ? (totalRealisasi / totalTarget) * 100 : 0;

    return (
        <section className="w-full py-24 bg-white">
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
                                <BreadcrumbPage>Realisasi Retribusi</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Realisasi Retribusi
                            </h1>
                            <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />
                            <p className="text-gray-600 max-w-3xl">
                                Grafik perbandingan target dan realisasi retribusi per bulan
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <label htmlFor="tahun" className="text-sm font-medium text-gray-700">
                                Tahun:
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
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <Card className="border shadow-sm rounded-2xl">
                            <CardContent>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Grafik Target vs Realisasi Retribusi
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
                                                    dataKey="bulan"
                                                    angle={-45}
                                                    textAnchor="end"
                                                    height={60}
                                                    tick={{ fontSize: 12 }}
                                                />
                                                <YAxis
                                                    tickFormatter={formatYAxis}
                                                    tick={{ fontSize: 12 }}
                                                    width={60}
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
                                                    name="Target"
                                                    dataKey="target"
                                                    fill="#3b82f6"
                                                    radius={[4, 4, 0, 0]}
                                                    opacity={0.8}
                                                />
                                                <Bar
                                                    name="Realisasi"
                                                    dataKey="realisasi"
                                                    fill="#10b981"
                                                    radius={[4, 4, 0, 0]}
                                                />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Card className="bg-blue-50 border border-blue-100 rounded-2xl">
                                <CardContent>
                                    <h3 className="text-sm font-medium text-blue-900 mb-1">Total Target {selectedYear}</h3>
                                    <p className="text-2xl font-bold text-blue-700">
                                        {formatRupiah(totalTarget)}
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-green-50 border border-green-100 rounded-2xl">
                                <CardContent>
                                    <h3 className="text-sm font-medium text-green-900 mb-1">Total Realisasi {selectedYear}</h3>
                                    <p className="text-2xl font-bold text-green-700">
                                        {formatRupiah(totalRealisasi)}
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-purple-50 border border-purple-100 rounded-2xl">
                                <CardContent>
                                    <h3 className="text-sm font-medium text-purple-900 mb-1">Pencapaian</h3>
                                    <p className="text-2xl font-bold text-purple-700">
                                        {pencapaian.toFixed(1)}%
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <Card className="border shadow-sm rounded-2xl">
                            <CardContent className="space-y-3">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Keterangan
                                </h2>
                                <div className="flex items-center gap-2">
                                    <span className="inline-block w-4 h-4 bg-blue-500 rounded-full"></span>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Target:</span> Jumlah retribusi yang ditargetkan per bulan
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Realisasi:</span> Jumlah retribusi yang berhasil dicapai per bulan
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <InformasiPengaduanSidebar activeMenu="Realisasi Retribusi" />
                    </div>
                </div>
            </div>
        </section>
    );
}