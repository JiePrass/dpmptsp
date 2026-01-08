import Image from "next/image";
import NewsCard from "@/components/shared/news-card";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Newspaper,
    Calendar,
    Tag,
} from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type NewsItem = {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    time: string;
    image: string;
};

import { newsData, categories } from "@/lib/news";



export default function BeritaPage() {
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
                                <BreadcrumbPage>Berita</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">
                                Berita & Informasi
                            </h1>
                            <div className="w-24 h-1.5 bg-primary rounded-full" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Newspaper className="w-4 h-4" />
                            <span>Total {newsData.length} berita</span>
                        </div>
                    </div>

                    <p className="text-gray-600 max-w-3xl">
                        Informasi terbaru mengenai kegiatan, kebijakan, dan layanan
                        DPMPTSP Kota Bogor untuk masyarakat dan pelaku usaha.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Statistik */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="rounded-2xl shadow-sm">
                                <CardContent className="p-6 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Total Berita</p>
                                        <p className="text-3xl font-bold text-gray-900">
                                            {newsData.length}
                                        </p>
                                    </div>
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Newspaper className="w-6 h-6 text-primary" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="rounded-2xl shadow-sm">
                                <CardContent className="p-6 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Kategori Aktif</p>
                                        <p className="text-3xl font-bold text-gray-900">
                                            {categories.length - 1}
                                        </p>
                                    </div>
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Tag className="w-6 h-6 text-primary" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="rounded-2xl shadow-sm">
                                <CardContent className="p-6 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Update Terakhir</p>
                                        <p className="text-3xl font-bold text-gray-900">2026</p>
                                    </div>
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Calendar className="w-6 h-6 text-primary" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* List Berita */}
                        <Card className="rounded-2xl shadow-sm">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Berita Terbaru
                                </h2>

                                <div className="grid gap-6 md:grid-cols-2">
                                    {newsData.map((item) => (
                                        <NewsCard key={item.id} data={item} />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Kategori */}
                        <Card className="rounded-2xl shadow-sm">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-6">
                                    Kategori Berita
                                </h3>
                                <ScrollArea className="h-72 pr-4">
                                    <div className="space-y-2">
                                        {categories.map((cat) => (
                                            <a
                                                key={cat.id}
                                                href="#"
                                                className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 transition group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                                    <span className="text-gray-700 group-hover:text-gray-900">
                                                        {cat.name}
                                                    </span>
                                                </div>
                                                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                                    {cat.count}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </CardContent>
                        </Card>

                        {/* Info */}
                        <Card className="rounded-2xl shadow-sm">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="relative w-14 h-14">
                                        <Image
                                            src="https://perizinan.kotabogor.go.id/portal_22/themes/portal/images/web/pemkot.png"
                                            alt="Pemkot Bogor"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">
                                            DPMPTSP Kota Bogor
                                        </h4>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Informasi & Publikasi Resmi
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-3">
                                    <div className="p-3 bg-primary/5 rounded-lg">
                                        <p className="text-xs font-medium text-primary mb-1">
                                            KONTEN RESMI
                                        </p>
                                        <p className="text-sm text-gray-700">
                                            Seluruh berita bersumber dari DPMPTSP Kota Bogor
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
