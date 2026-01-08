"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { TentangMenu } from "@/components/shared/TentangSidebar";

export default function PenghargaanPage() {
  const sidebarItems = [
    {
      id: 1,
      title: "Kami",
      href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/1",
    },
    {
      id: 2,
      title: "Tugas Pokok Dan Fungsi",
      href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/2",
    },
    {
      id: 3,
      title: "Struktur Organisasi",
      href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/3",
    },
    {
      id: 4,
      title: "Penilaian/Penghargaan",
      href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/4",
    },
    {
      id: 5,
      title: "Perencanaan dan Pelaporan",
      href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/5",
    },
    {
      id: 6,
      title: "Maklumat Pelayanan",
      href: "https://perizinan.kotabogor.go.id/portal_22/index.php/portal/page/t/6",
    },
  ];

  // Skeleton components untuk setiap kartu penghargaan
  const SkeletonPenghargaan1 = () => {
    return (
      <div className="p-4 md:p-6">
        <p className="font-bold md:text-3xl text-xl text-white mb-2">
          Penghargaan Inovasi Pelayanan
        </p>
        <p className="font-normal text-base text-white/90 mb-4">Tahun 2023</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          DPMPTSP Kota Bogor menerima penghargaan untuk inovasi sistem pelayanan
          terpadu berbasis teknologi informasi yang meningkatkan efisiensi
          pelayanan hingga 40%.
        </p>
      </div>
    );
  };

  const SkeletonPenghargaan2 = () => {
    return (
      <div className="p-4 md:p-6">
        <p className="font-bold md:text-3xl text-xl text-white mb-2">
          Piagam Pelayanan Publik
        </p>
        <p className="font-normal text-base text-white/90 mb-4">Tahun 2022</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Penghargaan atas komitmen dalam memberikan pelayanan publik yang
          transparan, akuntabel, dan sesuai dengan standar nasional.
        </p>
      </div>
    );
  };

  const SkeletonPenghargaan3 = () => {
    return (
      <div className="p-4 md:p-6">
        <p className="font-bold md:text-3xl text-xl text-white mb-2">
          Adhikarya Patala
        </p>
        <p className="font-normal text-base text-white/90 mb-4">Tahun 2021</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Penghargaan tingkat nasional untuk kinerja pelayanan perizinan yang
          memenuhi standar pelayanan minimal dengan nilai kepuasan masyarakat
          tertinggi.
        </p>
      </div>
    );
  };

  const SkeletonPenghargaan4 = () => {
    return (
      <div className="p-4 md:p-6">
        <p className="font-bold md:text-3xl text-xl text-white mb-2">
          Kategori Pelayanan Terbaik
        </p>
        <p className="font-normal text-base text-white/90 mb-4">Tahun 2020</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Penghargaan untuk kategori pelayanan tercepat dan terbaik dalam
          penanganan perizinan investasi di wilayah Jawa Barat.
        </p>
      </div>
    );
  };

  const SkeletonPenghargaan5 = () => {
    return (
      <div className="p-4 md:p-6">
        <p className="font-bold md:text-3xl text-xl text-white mb-2">
          Inovasi Digital Award
        </p>
        <p className="font-normal text-base text-white/90 mb-4">Tahun 2019</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Sistem Online Single Submission (OSS) DPMPTSP Kota Bogor dinilai
          sebagai platform digital pelayanan perizinan terinovatif.
        </p>
      </div>
    );
  };

  const SkeletonPenghargaan6 = () => {
    return (
      <div className="p-4 md:p-6">
        <p className="font-bold md:text-3xl text-xl text-white mb-2">
          Penghargaan MURI
        </p>
        <p className="font-normal text-base text-white/90 mb-4">Tahun 2018</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Rekor MURI untuk pelayanan perizinan dengan waktu tunggu tercepat dan
          jumlah layanan terbanyak dalam satu hari.
        </p>
      </div>
    );
  };

  const SkeletonPenghargaan7 = () => {
    return (
      <div className="p-4 md:p-6">
        <p className="font-bold md:text-3xl text-xl text-white mb-2">
          Kepuasan Masyarakat Tertinggi
        </p>
        <p className="font-normal text-base text-white/90 mb-4">Tahun 2017</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Survey independen menempatkan DPMPTSP Kota Bogor sebagai institusi
          pelayanan dengan tingkat kepuasan masyarakat tertinggi se-Jawa Barat.
        </p>
      </div>
    );
  };

  const SkeletonPenghargaan8 = () => {
    return (
      <div className="p-4 md:p-6">
        <p className="font-bold md:text-3xl text-xl text-white mb-2">
          Green Office Award
        </p>
        <p className="font-normal text-base text-white/90 mb-4">Tahun 2016</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Penghargaan untuk kantor ramah lingkungan dengan implementasi
          paperless system dan pengelolaan limbah yang berkelanjutan.
        </p>
      </div>
    );
  };

  const penghargaanCards = [
    {
      id: 1,
      content: <SkeletonPenghargaan1 />,
      className: "md:col-span-2",
      thumbnail:
        "https://perizinan.kotabogor.go.id/portal_22/themes/portal/images/icon/411.jpg",
    },
    {
      id: 2,
      content: <SkeletonPenghargaan2 />,
      className: "col-span-1",
      thumbnail:
        "https://perizinan.kotabogor.go.id/portal_22/themes/portal/images/icon/Gambarku_22_1.jpeg",
    },
    {
      id: 3,
      content: <SkeletonPenghargaan3 />,
      className: "col-span-1",
      thumbnail:
        "https://perizinan.kotabogor.go.id/portal_22/themes/portal/images/icon/Gambarku_22_2.jpeg",
    },
    {
      id: 4,
      content: <SkeletonPenghargaan4 />,
      className: "md:col-span-2",
      thumbnail:
        "https://perizinan.kotabogor.go.id/portal_22/themes/portal/images/icon/Gambarku_22_3.jpeg",
    },
    {
      id: 5,
      content: <SkeletonPenghargaan5 />,
      className: "col-span-1",
      thumbnail:
        "https://perizinan.kotabogor.go.id/portal_22/themes/portal/images/icon/penggahargaan.jpg",
    },
    {
      id: 6,
      content: <SkeletonPenghargaan6 />,
      className: "col-span-1",
      thumbnail:
        "https://perizinan.kotabogor.go.id/portal_22/themes/portal/images/icon/penghargaan.JPG",
    },
    {
      id: 7,
      content: <SkeletonPenghargaan7 />,
      className: "md:col-span-2",
      thumbnail:
        "https://perizinan.kotabogor.go.id/portal_22/themes/portal/images/icon/PENKIN_PTSP_DAN_PPB.jpg",
    },
    {
      id: 8,
      content: <SkeletonPenghargaan8 />,
      className: "col-span-1",
      thumbnail:
        "https://perizinan.kotabogor.go.id/portal_22/themes/portal/images/icon/WhatsApp_Image_2023-08-09_at_10.48_.36_.jpeg",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 mt-10">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-gray-600 hover:text-primary"
                >
                  Beranda
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="kami"
                  className="text-gray-600 hover:text-primary"
                >
                  Tentang
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="">
                  Penilaian/Penghargaan
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Penghargaan dan Prestasi DPMPTSP Kota Bogor
          </h1>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />

          <p className="text-gray-600 mt-6 max-w-3xl">
            Berikut adalah berbagai penghargaan dan prestasi yang telah diraih
            oleh Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu
            (DPMPTSP) Kota Bogor dalam memberikan pelayanan terbaik kepada
            masyarakat dan investor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2">
            <Card className="border shadow-sm rounded-2xl overflow-hidden mb-6 md:mb-8">
              <CardContent className="p-4 md:p-8">
                {/* Layout Grid Interaktif */}
                <div className="min-h-[600px] md:min-h-[800px] w-full">
                  <LayoutGrid cards={penghargaanCards} />
                </div>

                {/* Keterangan */}
                <div className="mt-8 md:mt-12 p-4 md:p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                    Makna Penghargaan
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Setiap penghargaan yang diterima merupakan bentuk pengakuan
                    atas komitmen DPMPTSP Kota Bogor dalam memberikan pelayanan
                    publik yang SMART: Sederhana, Mudah, Akuntabel, Ramah, dan
                    Tepat Waktu. Klik atau hover pada setiap gambar untuk
                    melihat detail penghargaan.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Inovasi Pelayanan
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Kepuasan Masyarakat
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Transparansi
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Akuntabilitas
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <TentangMenu activeId={4} />

            <Card className="border shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="relative w-12 md:w-16 h-12 md:h-16 flex-shrink-0">
                    <Image
                      src="https://perizinan.kotabogor.go.id/portal_22/themes/portal/images/web/pemkot.png"
                      alt="Logo Pemkot Bogor"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 48px, 64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-base md:text-lg leading-tight">
                      DPMPTSP KOTA BOGOR
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 line-clamp-2">
                      Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu
                    </p>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <div className="p-2 md:p-3 bg-primary/5 rounded-lg">
                    <p className="text-xs font-medium text-primary mb-1">
                      ALAMAT
                    </p>
                    <p className="text-xs md:text-sm text-gray-700">
                      Jl. Kapten Muslihat No. 21 Kota Bogor
                    </p>
                  </div>

                  <div className="p-2 md:p-3 bg-primary/5 rounded-lg">
                    <p className="text-xs font-medium text-primary mb-1">
                      EMAIL
                    </p>
                    <p className="text-xs md:text-sm text-gray-700">
                      perizinan@kotabogor.go.id
                    </p>
                  </div>

                  <div className="p-2 md:p-3 bg-primary/5 rounded-lg">
                    <p className="text-xs font-medium text-primary mb-1">
                      TELEPON
                    </p>
                    <p className="text-xs md:text-sm text-gray-700">
                      (0251) 832-XXXX
                    </p>
                  </div>

                  <div className="p-2 md:p-3 bg-primary/5 rounded-lg">
                    <p className="text-xs font-medium text-primary mb-1">
                      JAM OPERASIONAL
                    </p>
                    <p className="text-xs md:text-sm text-gray-700">
                      Senin - Jumat, 08:00 - 16:00 WIB
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
