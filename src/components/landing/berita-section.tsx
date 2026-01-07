import Image from "next/image";
import Link from "next/link";

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

const news: NewsItem[] = [
  {
    id: 2,
    title: "Panduan Pengajuan Perizinan Berusaha melalui OSS-RBA",
    excerpt:
      "DPMPTSP Kota Bogor menyediakan panduan resmi pengajuan perizinan berusaha berbasis risiko melalui sistem OSS-RBA untuk memudahkan pelaku usaha.",
    category: "Panduan",
    author: "Tim Layanan OSS DPMPTSP",
    time: "3 hari lalu",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Evaluasi Kinerja Pelayanan Perizinan Triwulan I Tahun 2024",
    excerpt:
      "DPMPTSP Kota Bogor merilis hasil evaluasi kinerja pelayanan perizinan Triwulan I sebagai bagian dari peningkatan kualitas layanan publik.",
    category: "Laporan",
    author: "Subbag Evaluasi dan Pelaporan",
    time: "1 minggu lalu",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Optimalisasi Sistem Layanan Perizinan Online DPMPTSP",
    excerpt:
      "Optimalisasi sistem perizinan online dilakukan untuk meningkatkan kecepatan proses, stabilitas layanan, dan kemudahan akses bagi masyarakat.",
    category: "Pembaruan Sistem",
    author: "Tim Pengembangan Sistem Informasi",
    time: "2 minggu lalu",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Sosialisasi Layanan Perizinan bagi Pelaku UMKM Kota Bogor",
    excerpt:
      "DPMPTSP Kota Bogor melaksanakan kegiatan sosialisasi layanan perizinan untuk mendukung legalitas dan pengembangan usaha mikro dan kecil.",
    category: "Sosialisasi",
    author: "Bidang Pelayanan Perizinan",
    time: "3 minggu lalu",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
  },
];


export default function BeritaSection() {
  return (
    <section className="py-16 px-6">
      <div className="mb-10 text-center">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          Berita & Informasi Terbaru
        </h2>
        <p className="text-lg text-muted-foreground">
          Informasi terkini seputar pelayanan perizinan dan kegiatan DPMPTSP Kota Bogor
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-6 px-4 lg:grid-cols-3">
        {/* Main News */}
        <div className="lg:col-span-2">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={mainNews.image}
              alt={mainNews.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="py-4">
            <p className="text-sm text-muted-foreground mb-1">
              {mainNews.category}
            </p>
            <h3 className="text-2xl font-semibold leading-tight">
              {mainNews.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-2">
              {mainNews.author} • {mainNews.time}
            </p>
            <p className="mt-3 text-muted-foreground line-clamp-3">
              {mainNews.excerpt}
            </p>
          </div>
        </div>

        {/* Other News */}
        <div className="space-y-6">
          {news.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-xs text-muted-foreground mb-1">
                  {item.category}
                </p>
                <h4 className="font-semibold leading-snug line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
