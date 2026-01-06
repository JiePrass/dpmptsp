import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type NewsItem = {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    time: string;
    image: string;
};

const mainNews: NewsItem = {
    id: 1,
    title: "Pelatihan OSS-RBA bagi Petugas Perizinan DPMPTSP",
    excerpt:
        "DPMPTSP Kota Bogor menyelenggarakan pelatihan intensif penggunaan sistem OSS-RBA bagi petugas perizinan guna meningkatkan kualitas layanan dan percepatan proses perizinan berusaha.",
    category: "Pelatihan",
    author: "Bidang Pelayanan Perizinan",
    time: "1 minggu yang lalu",
    image: "/images/berita-utama.jpg",
};

const sideNews: NewsItem[] = [
    {
        id: 2,
        title: "Panduan Pengajuan Perizinan Usaha Melalui OSS",
        excerpt:
            "Panduan lengkap bagi pelaku usaha dalam mengajukan perizinan berusaha secara online melalui sistem OSS-RBA.",
        category: "Tutorial",
        author: "Tim Layanan OSS",
        time: "3 hari yang lalu",
        image: "/images/berita-1.jpg",
    },
    {
        id: 3,
        title: "Evaluasi Kinerja Pelayanan Perizinan Triwulan I 2024",
        excerpt:
            "DPMPTSP Kota Bogor melakukan evaluasi kinerja pelayanan perizinan pada triwulan pertama tahun 2024.",
        category: "Laporan",
        author: "Subbag Evaluasi & Pelaporan",
        time: "1 minggu yang lalu",
        image: "/images/berita-2.jpg",
    },
    {
        id: 4,
        title: "Pembaruan Layanan Perizinan Online Kota Bogor",
        excerpt:
            "Pembaruan sistem layanan perizinan online menghadirkan peningkatan performa dan kemudahan bagi masyarakat.",
        category: "Update",
        author: "Tim Pengembangan Sistem",
        time: "2 minggu yang lalu",
        image: "/images/berita-3.jpg",
    },
];

export default function BeritaSection() {
    return (
        <section className="py-16">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-3">
                {/* Berita Utama */}
                <Card className="lg:col-span-2 overflow-hidden border-none shadow-lg">
                    <div className="relative h-64 md:h-72 lg:h-92 w-full">
                        <Image
                            src={mainNews.image}
                            alt={mainNews.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <CardContent className="p-6">
                        <Badge className="mb-3">{mainNews.category}</Badge>
                        <h2 className="mb-3 text-2xl font-bold leading-tight">
                            {mainNews.title}
                        </h2>
                        <p className="mb-6 text-sm text-muted-foreground">
                            {mainNews.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Oleh {mainNews.author}</span>
                            <span>{mainNews.time}</span>
                        </div>
                    </CardContent>
                </Card>

                {/* List Berita */}
                <div className="space-y-4">
                    {sideNews.map((item) => (
                        <Card
                            key={item.id}
                            className="flex gap-4 border-none p-4 shadow-sm transition hover:shadow-md"
                        >
                            <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col justify-between">
                                <div>
                                    <Badge variant="secondary" className="mb-1 text-xs">
                                        {item.category}
                                    </Badge>
                                    <h3 className="line-clamp-2 text-sm font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="line-clamp-1 text-xs text-muted-foreground">
                                        {item.excerpt}
                                    </p>
                                </div>

                                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                                    <span>{item.author}</span>
                                    <Link
                                        href="#"
                                        className="font-medium text-primary hover:underline"
                                    >
                                        Baca selengkapnya →
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
