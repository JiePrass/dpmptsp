/* eslint-disable @next/next/no-img-element */
"use client";

import { ImageIcon } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type GalleryItem = {
    id: number;
    title: string;
    image: string;
};

const galleries: GalleryItem[] = [
    {
        id: 1,
        title: "Upacara Hari Lahir Pancasila",
        image: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/upacara_hari_Lahir_Pancasila21.png",
    },
    {
        id: 2,
        title: "Launching STRATEGI JITU SEHARI BERES",
        image: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/LAUNCHING123.png",
    },
    {
        id: 3,
        title: "Penertiban Reklame dan Billboard Tidak Berizin",
        image: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/Screenshot_2025-06-16_104759.png",
    },
    {
        id: 4,
        title: "Rapat Koordinasi Perizinan PBG untuk MBR",
        image: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/Gallery_website_(3).png",
    },
    {
        id: 5,
        title: "Gebyar Pelayanan Terpadu 2024",
        image: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/WhatsApp_Image_2024-12-17_at_17.36_.28_.jpeg",
    },
    {
        id: 6,
        title: "Pelaksanaan Gebyar Pelayanan Terpadu",
        image: "https://perizinan.kotabogor.go.id/portal_22/uploads/crud/WhatsApp_Image_2024-11-15_at_12.12_.00_(1)_.jpeg",
    },
];

export default function GaleriPage() {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* ===== HEADER (IDENTIK DENGAN BERITA) ===== */}
                <div className="mb-12 mt-10">
                    <Breadcrumb className="mb-4">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Galeri</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">
                                Galeri Kegiatan
                            </h1>
                            <div className="w-24 h-1.5 bg-primary rounded-full" />
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <ImageIcon className="w-4 h-4" />
                            <span>Total {galleries.length} dokumentasi</span>
                        </div>
                    </div>

                    <p className="text-gray-600 max-w-3xl">
                        Dokumentasi resmi berbagai kegiatan, program, dan pelayanan
                        DPMPTSP Kota Bogor sebagai bentuk transparansi dan informasi publik.
                    </p>
                </div>

                {/* ===== GRID GALERI (PORTAL STYLE) ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleries.map((item) => (
                        <div
                            key={item.id}
                            className="group border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
                        >
                            <div className="relative h-56">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
