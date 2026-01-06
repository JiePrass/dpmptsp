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
  title: "Pelatihan OSS-RBA untuk Peningkatan Layanan Perizinan",
  excerpt:
    "DPMPTSP Kota Bogor menyelenggarakan pelatihan OSS-RBA bagi petugas perizinan sebagai upaya peningkatan kompetensi, kualitas layanan, dan percepatan proses perizinan berusaha.",
  category: "Pelatihan",
  author: "Bidang Pelayanan Perizinan",
  time: "1 minggu lalu",
  image:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
};

const sideNews: NewsItem[] = [
  {
    id: 2,
    title: "Panduan Pengajuan Perizinan Usaha Melalui OSS-RBA",
    excerpt:
      "Langkah-langkah pengajuan perizinan berusaha secara online melalui sistem OSS-RBA bagi pelaku usaha.",
    category: "Panduan",
    author: "Tim Layanan OSS",
    time: "3 hari lalu",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Evaluasi Kinerja Pelayanan Perizinan Triwulan I",
    excerpt:
      "Hasil evaluasi kinerja pelayanan perizinan DPMPTSP Kota Bogor pada Triwulan I Tahun 2024.",
    category: "Laporan",
    author: "Subbag Evaluasi dan Pelaporan",
    time: "1 minggu lalu",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Pembaruan Sistem Layanan Perizinan Online",
    excerpt:
      "Peningkatan performa dan optimalisasi fitur pada layanan perizinan online untuk kemudahan masyarakat.",
    category: "Pembaruan",
    author: "Tim Pengembangan Sistem",
    time: "2 minggu lalu",
    image:
      "https://images.unsplash.com/photo-1581091870627-3b61c71c1f8e?q=80&w=600&auto=format&fit=crop",
  },
];

export default function BeritaSection() {
  return (
    <section className="py-16">
        <h2 className="mx-5 text-2xl font-bold text-foreground">
          Berita Terbaru
        </h2>
      <div className="container mx-auto grid grid-cols-1 gap-3 px-4 lg:grid-cols-3">
        
        {/* Berita Utama */}
        <Card className="lg:col-span-2 rounded-xl overflow-hidden border-none shadow-lg">
          <div className="relative h-64 md:h-72 w-full">
            <Image
              src={mainNews.image}
              alt={mainNews.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <CardContent className="p-6 rounded-xl">
            <Badge className="mb-3">{mainNews.category}</Badge>
            <h3 className="mb-3 text-2xl font-bold leading-tight">
              {mainNews.title}
            </h3>
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
                  <h4 className="line-clamp-2 text-sm font-semibold">
                    {item.title}
                  </h4>
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
