"use client";
import { useState } from "react";
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
  Search,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Sidebar from "@/components/layouts/sidebar";

// Mock data untuk tracking status
const mockTrackingData = [
  {
    id: 1,
    status: "Diterima",
    date: "2024-01-15 09:30",
    description: "Berkas diterima di front office",
  },
  {
    id: 2,
    status: "Diproses",
    date: "2024-01-16 14:20",
    description: "Berkas sedang diverifikasi oleh petugas",
  },
  {
    id: 3,
    status: "Disetujui",
    date: "2024-01-18 10:15",
    description: "Berkas telah disetujui oleh kepala bidang",
  },
  {
    id: 4,
    status: "Selesai",
    date: "2024-01-20 11:00",
    description: "Perizinan siap diambil",
  },
];

export default function TrackingBerkasSection() {
  const [trackingId, setTrackingId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [trackingResult, setTrackingResult] = useState<null | {
    success: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
    message: string;
  }>(null);

  const handleSearch = async () => {
    if (!trackingId.trim()) {
      setTrackingResult({
        success: false,
        data: [],
        message: "Silakan masukkan ID Pendaftaran",
      });
      return;
    }

    setIsLoading(true);

    // Simulasi API call
    setTimeout(() => {
      // Mock response - dalam implementasi nyata, ini akan diganti dengan API call
      const isSuccess = Math.random() > 0.3; // 70% success rate untuk demo

      if (isSuccess) {
        setTrackingResult({
          success: true,
          data: mockTrackingData,
          message: `Tracking berhasil untuk ID: ${trackingId}`,
        });
      } else {
        setTrackingResult({
          success: false,
          data: [],
          message: "ID Pendaftaran tidak ditemukan atau terjadi kesalahan",
        });
      }

      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="w-full py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 mt-10">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/layanan">Layanan</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Tracking Berkas</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tracking Berkas
          </h1>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />

          <p className="text-gray-600 mt-6 max-w-3xl">
            Lacak status pengajuan perizinan Anda dengan mudah menggunakan ID
            Pendaftaran. Masukkan ID yang Anda dapatkan saat pengajuan untuk
            melihat progress terkini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent>
                <div className="mb-10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <div className="flex-1 w-full">
                      <label
                        htmlFor="trackingId"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        ID Pendaftaran
                      </label>
                      <div className="flex gap-3">
                        <Input
                          id="trackingId"
                          type="text"
                          placeholder="Masukkan ID Pendaftaran Anda"
                          value={trackingId}
                          onChange={(e) => setTrackingId(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                          className="flex-1 bg-white"
                        />
                        <Button
                          onClick={handleSearch}
                          disabled={isLoading}
                          className="bg-primary hover:bg-blue-700 text-white px-6"
                        >
                          {isLoading ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                              Mencari...
                            </>
                          ) : (
                            <>
                              <Search className="w-4 h-4 mr-2" />
                              Cari
                            </>
                          )}
                        </Button>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Contoh: BGR-2024-001234
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  {isLoading ? (
                    <div className="space-y-4">
                      <Skeleton className="h-32 w-full" />
                      <Skeleton className="h-32 w-full" />
                    </div>
                  ) : trackingResult ? (
                    <div
                      className={`p-6 rounded-xl border ${trackingResult.success
                        ? "bg-blue-50 border-blue-200"
                        : "bg-red-50 border-red-200"
                        }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        {trackingResult.success ? (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        ) : (
                          <AlertCircle className="w-6 h-6 text-red-600" />
                        )}
                        <h3
                          className={`text-lg font-semibold ${trackingResult.success
                            ? "text-green-700"
                            : "text-red-700"
                            }`}
                        >
                          {trackingResult.message}
                        </h3>
                      </div>

                      {trackingResult.success &&
                        trackingResult.data.length > 0 && (
                          <div className="mt-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-6">
                              Riwayat Status Berkas
                            </h4>

                            <div className="relative">
                              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200" />

                              <div className="space-y-8 ml-12">
                                {trackingResult.data.map((item, index) => (
                                  <div key={item.id} className="relative">
                                    <div
                                      className={`absolute -left-12 top-0 w-12 h-12 rounded-full flex items-center justify-center border-4 border-white ${index === trackingResult.data.length - 1
                                        ? "bg-green-500"
                                        : "bg-blue-500"
                                        }`}
                                    >
                                      {index ===
                                        trackingResult.data.length - 1 ? (
                                        <CheckCircle className="w-5 h-5 text-white" />
                                      ) : (
                                        <Clock className="w-5 h-5 text-white" />
                                      )}
                                    </div>

                                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                                        <h5 className="text-lg font-semibold text-gray-900">
                                          {item.status}
                                        </h5>
                                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                          {item.date}
                                        </span>
                                      </div>
                                      <p className="text-gray-600">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                              <div className="flex items-center gap-3 mb-3">
                                <FileText className="w-6 h-6 text-green-600" />
                                <h5 className="text-lg font-semibold text-gray-900">
                                  Status Saat Ini
                                </h5>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                <p className="text-gray-700">
                                  <span className="font-semibold">
                                    {
                                      trackingResult.data[
                                        trackingResult.data.length - 1
                                      ]?.status
                                    }
                                    :
                                  </span>{" "}
                                  {
                                    trackingResult.data[
                                      trackingResult.data.length - 1
                                    ]?.description
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200">
                      <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-600 mb-2">
                        Masukkan ID Pendaftaran
                      </h4>
                      <p className="text-gray-500">
                        Silakan masukkan ID Pendaftaran Anda di kolom di atas
                        untuk melacak status berkas
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Informasi Penting
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-2">
                        <AlertCircle className="w-5 h-5 inline mr-2" />
                        Jika ID Tidak Ditemukan
                      </h4>
                      <ul className="text-yellow-700 space-y-1 text-sm">
                        <li>• Periksa kembali penulisan ID Pendaftaran</li>
                        <li>• Pastikan Anda sudah menerima email konfirmasi</li>
                        <li>• Hubungi kami jika masalah berlanjut</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        <Clock className="w-5 h-5 inline mr-2" />
                        Estimasi Waktu
                      </h4>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• Perizinan sederhana: 3-5 hari kerja</li>
                        <li>• Perizinan menengah: 5-10 hari kerja</li>
                        <li>• Perizinan kompleks: 10-15 hari kerja</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Sidebar activeId={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
