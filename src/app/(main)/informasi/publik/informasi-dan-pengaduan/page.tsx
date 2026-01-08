/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import InformasiPengaduanSidebar from "@/components/shared/InformasiPengaduanSidebar";
import { useState, useEffect } from "react";
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
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface PengaduanData {
  bulan: string;
  masuk: number;
  proses: number;
  selesai: number;
  ditolak: number;
  pending: number;
}

interface StatistikPengaduan {
  totalMasuk: number;
  totalProses: number;
  totalSelesai: number;
  totalDitolak: number;
  totalPending: number;
  persentaseSelesai: number;
  rataWaktu: number;
}

export default function InformasiPengaduanPage() {
  const [selectedYear, setSelectedYear] = useState<string>("2026");
  const [chartData, setChartData] = useState<PengaduanData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [statistik, setStatistik] = useState<StatistikPengaduan>({
    totalMasuk: 0,
    totalProses: 0,
    totalSelesai: 0,
    totalDitolak: 0,
    totalPending: 0,
    persentaseSelesai: 0,
    rataWaktu: 0,
  });

  // Daftar tahun untuk dropdown
  const years = ["2020", "2021", "2022", "2023", "2024", "2025", "2026"];

  // Data contoh berdasarkan struktur dari PHP
  const sampleData: PengaduanData[] = [
    {
      bulan: "Januari",
      masuk: 45,
      proses: 15,
      selesai: 25,
      ditolak: 3,
      pending: 2,
    },
    {
      bulan: "Februari",
      masuk: 38,
      proses: 12,
      selesai: 20,
      ditolak: 4,
      pending: 2,
    },
    {
      bulan: "Maret",
      masuk: 52,
      proses: 18,
      selesai: 30,
      ditolak: 2,
      pending: 2,
    },
    {
      bulan: "April",
      masuk: 40,
      proses: 10,
      selesai: 25,
      ditolak: 3,
      pending: 2,
    },
    {
      bulan: "Mei",
      masuk: 48,
      proses: 15,
      selesai: 28,
      ditolak: 3,
      pending: 2,
    },
    {
      bulan: "Juni",
      masuk: 55,
      proses: 20,
      selesai: 30,
      ditolak: 3,
      pending: 2,
    },
    {
      bulan: "Juli",
      masuk: 60,
      proses: 25,
      selesai: 30,
      ditolak: 3,
      pending: 2,
    },
    {
      bulan: "Agustus",
      masuk: 42,
      proses: 12,
      selesai: 25,
      ditolak: 3,
      pending: 2,
    },
    {
      bulan: "September",
      masuk: 50,
      proses: 18,
      selesai: 28,
      ditolak: 2,
      pending: 2,
    },
    {
      bulan: "Oktober",
      masuk: 58,
      proses: 22,
      selesai: 30,
      ditolak: 4,
      pending: 2,
    },
    {
      bulan: "November",
      masuk: 65,
      proses: 25,
      selesai: 35,
      ditolak: 3,
      pending: 2,
    },
    {
      bulan: "Desember",
      masuk: 70,
      proses: 30,
      selesai: 35,
      ditolak: 3,
      pending: 2,
    },
  ];

  // Data untuk pie chart
  const pieData = [
    { name: "Selesai", value: 341 },
    { name: "Proses", value: 222 },
    { name: "Ditolak", value: 38 },
    { name: "Pending", value: 24 },
  ];

  const COLORS = ["#10b981", "#f59e0b", "#ef4444", "#6b7280"];

  // Fetch data dari API
  const fetchPengaduanData = async (year: string) => {
    setIsLoading(true);
    try {
      // Simulasi API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Untuk contoh, kita gunakan data statis yang dimodifikasi berdasarkan tahun
      const modifiedData = sampleData.map((item) => ({
        ...item,
        masuk: item.masuk * (1 + (parseInt(year) - 2026) * 0.15),
        proses: item.proses * (1 + (parseInt(year) - 2026) * 0.15),
        selesai: item.selesai * (1 + (parseInt(year) - 2026) * 0.15),
        ditolak: item.ditolak * (1 + (parseInt(year) - 2026) * 0.15),
        pending: item.pending * (1 + (parseInt(year) - 2026) * 0.15),
      }));

      setChartData(modifiedData);

      // Hitung statistik
      const totals = modifiedData.reduce(
        (acc, item) => ({
          totalMasuk: acc.totalMasuk + item.masuk,
          totalProses: acc.totalProses + item.proses,
          totalSelesai: acc.totalSelesai + item.selesai,
          totalDitolak: acc.totalDitolak + item.ditolak,
          totalPending: acc.totalPending + item.pending,
        }),
        {
          totalMasuk: 0,
          totalProses: 0,
          totalSelesai: 0,
          totalDitolak: 0,
          totalPending: 0,
        }
      );

      const persentaseSelesai =
        totals.totalMasuk > 0
          ? (totals.totalSelesai / totals.totalMasuk) * 100
          : 0;

      // Simulasi rata-rata waktu penyelesaian (dalam hari)
      const rataWaktu = 5 + (parseInt(year) - 2026) * 0.5;

      setStatistik({
        ...totals,
        persentaseSelesai,
        rataWaktu,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Effect untuk fetch data saat tahun berubah
  useEffect(() => {
    fetchPengaduanData(selectedYear);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear]);

  // Format tooltip untuk bar chart
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toLocaleString()} pengaduan
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Format tooltip untuk pie chart
  const CustomPieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800 mb-2">{payload[0].name}</p>
          <p className="text-sm" style={{ color: payload[0].color }}>
            {payload[0].value.toLocaleString()} pengaduan
          </p>
        </div>
      );
    }
    return null;
  };

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
                <BreadcrumbLink href="/informasi/publik">
                  Informasi Publik
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Informasi dan Pengaduan</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Informasi dan Pengaduan
              </h1>
              <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />
              <p className="text-gray-600 max-w-3xl">
                Statistik pengaduan masyarakat terhadap layanan DPMPTSP Kota
                Bogor dan respons yang diberikan
              </p>
            </div>

            <div className="flex items-center gap-3">
              <label
                htmlFor="tahun"
                className="text-sm font-medium text-gray-700"
              >
                Tahun:
              </label>
              <select
                id="tahun"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                disabled={isLoading}
              >
                {years.map((year) => (
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
                  Grafik Pengaduan per Bulan
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
                          tick={{ fontSize: 12 }}
                          width={60}
                          label={{
                            value: "Jumlah Pengaduan",
                            angle: -90,
                            position: "insideLeft",
                          }}
                        />
                        <Tooltip
                          content={<CustomTooltip />}
                          cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
                        />
                        <Legend verticalAlign="top" height={36} />
                        <Bar
                          name="Masuk"
                          dataKey="masuk"
                          fill="#3b82f6"
                          radius={[4, 4, 0, 0]}
                        />
                        <Bar
                          name="Proses"
                          dataKey="proses"
                          fill="#f59e0b"
                          radius={[4, 4, 0, 0]}
                        />
                        <Bar
                          name="Selesai"
                          dataKey="selesai"
                          fill="#10b981"
                          radius={[4, 4, 0, 0]}
                        />
                        <Bar
                          name="Ditolak"
                          dataKey="ditolak"
                          fill="#ef4444"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border shadow-sm rounded-2xl">
                <CardContent>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Distribusi Status Pengaduan
                  </h2>
                  <div className="w-full h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomPieTooltip />} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="border shadow-sm rounded-2xl">
                <CardContent>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Statistik Pengaduan {selectedYear}
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-gray-700">
                        Total Pengaduan Masuk:
                      </span>
                      <span className="font-bold text-blue-600">
                        {statistik.totalMasuk.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-gray-700">Dalam Proses:</span>
                      <span className="font-bold text-yellow-600">
                        {statistik.totalProses.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-gray-700">Selesai:</span>
                      <span className="font-bold text-green-600">
                        {statistik.totalSelesai.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-gray-700">Ditolak:</span>
                      <span className="font-bold text-red-600">
                        {statistik.totalDitolak.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-gray-700">
                        Persentase Penyelesaian:
                      </span>
                      <span className="font-bold text-purple-600">
                        {statistik.persentaseSelesai.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Rata-rata Waktu:</span>
                      <span className="font-bold text-indigo-600">
                        {statistik.rataWaktu.toFixed(1)} hari
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border shadow-sm rounded-2xl">
              <CardContent>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Tabel Detail Pengaduan per Bulan
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-primary/5 text-left">
                        <th className="p-3 border">Bulan</th>
                        <th className="p-3 border">Masuk</th>
                        <th className="p-3 border">Proses</th>
                        <th className="p-3 border">Selesai</th>
                        <th className="p-3 border">Ditolak</th>
                        <th className="p-3 border">Pending</th>
                      </tr>
                    </thead>
                    <tbody>
                      {chartData.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="p-3 border font-medium">
                            {item.bulan}
                          </td>
                          <td className="p-3 border text-center">
                            {item.masuk.toLocaleString()}
                          </td>
                          <td className="p-3 border text-center">
                            {item.proses.toLocaleString()}
                          </td>
                          <td className="p-3 border text-center">
                            {item.selesai.toLocaleString()}
                          </td>
                          <td className="p-3 border text-center">
                            {item.ditolak.toLocaleString()}
                          </td>
                          <td className="p-3 border text-center">
                            {item.pending.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                      <tr className="font-semibold bg-gray-50">
                        <td className="p-3 border">TOTAL</td>
                        <td className="p-3 border text-center">
                          {statistik.totalMasuk.toLocaleString()}
                        </td>
                        <td className="p-3 border text-center">
                          {statistik.totalProses.toLocaleString()}
                        </td>
                        <td className="p-3 border text-center">
                          {statistik.totalSelesai.toLocaleString()}
                        </td>
                        <td className="p-3 border text-center">
                          {statistik.totalDitolak.toLocaleString()}
                        </td>
                        <td className="p-3 border text-center">
                          {statistik.totalPending.toLocaleString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <InformasiPengaduanSidebar activeMenu="Informasi dan Pengaduan" />
            <Card className="border shadow-sm rounded-2xl">
              <CardContent>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Keterangan Status
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      <span className="font-semibold">Masuk:</span> Pengaduan
                      baru diterima
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      <span className="font-semibold">Proses:</span> Sedang
                      dalam investigasi
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      <span className="font-semibold">Selesai:</span> Pengaduan
                      telah ditanggapi
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      <span className="font-semibold">Ditolak:</span> Pengaduan
                      tidak memenuhi syarat
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      <span className="font-semibold">Pending:</span> Menunggu
                      informasi tambahan
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm rounded-2xl">
              <CardContent>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Layanan Pengaduan
                </h3>
                <ul className="space-y-3">
                  <li className="text-sm text-gray-700">
                    <span className="font-semibold">Hotline:</span> (0251)
                    123-4567
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-semibold">Email:</span>{" "}
                    pengaduan@kotabogor.go.id
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-semibold">Jam Operasional:</span>{" "}
                    Senin-Jumat, 08:00-16:00
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-semibold">Lokasi:</span> Kantor
                    DPMPTSP Kota Bogor
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
