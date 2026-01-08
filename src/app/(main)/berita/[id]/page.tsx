
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { newsData, type NewsItem } from "@/lib/news";
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import NewsCard from "@/components/shared/news-card";

interface NewsPageProps {
  params: Promise<{ id: string }>;
}

export default async function NewsDetail({ params }: NewsPageProps) {
  const { id } = await params;
  const newsId = parseInt(id, 10);

  const news: NewsItem | undefined = newsData.find((item) => item.id === newsId);

  if (!news) return notFound();

  // Get related news (same category, exclude current)
  const relatedNews = newsData
    .filter(item => item.category === news.category && item.id !== news.id)
    .slice(0, 3);

  // Format date for structured data
  const formatDate = (dateString?: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  return date.toISOString().split('T')[0];
};


  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 mt-10">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-600 hover:text-primary">
                  Beranda
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/berita" className="text-gray-600 hover:text-primary">
                  Berita
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-900 font-medium">
                  Detail Berita
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/berita">
                <Button variant="ghost" className="gap-2 text-gray-600 hover:text-primary">
                  <ArrowLeft className="w-4 h-4" />
                  Kembali ke Berita
                </Button>
              </Link>
            </div>

            <article className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
              <div className="mb-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <Tag className="w-4 h-4" />
                    {news.category}
                  </span>
                  
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{news.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={formatDate(news.time)}>{news.time}</time>
                    </div>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {news.title}
                </h1>
              </div>

              <div className="relative h-64 md:h-96 w-full mb-8 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {news.excerpt}
                </div>
                
                <Separator className="my-8" />
                
                <div className="space-y-6 text-gray-700">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  
                  <blockquote className="border-l-4 border-primary pl-6 italic text-gray-600 my-8">
                    "Ini adalah kutipan penting dari berita yang memberikan penekanan pada poin tertentu 
                    dalam konten."
                  </blockquote>
                  
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                    architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 font-medium">Bagikan:</span>
                    <div className="flex gap-2">
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    Dipublikasikan pada {news.time}
                  </div>
                </div>
              </div>
            </article>

            {relatedNews.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Berita Terkait
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedNews.map((item) => (
                    <NewsCard key={item.id} data={item} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <Card className="rounded-2xl shadow-sm top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Berita Terbaru
                </h3>
                <div className="space-y-4">
                  {newsData.slice(0, 5).map((item) => (
                    <Link 
                      key={item.id} 
                      href={`/berita/${item.id}`}
                      className="block group"
                    >
                      <div className="flex gap-3 p-3 rounded-lg hover:bg-primary/5 transition">
                        <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-primary line-clamp-2">
                            {item.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                            <Calendar className="w-3 h-3" />
                            {item.time}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Kategori
                </h3>
                <div className="space-y-2">
                  {Array.from(new Set(newsData.map(item => item.category))).map((category, index) => (
                    <Link
                      key={index}
                      href={`/berita/kategori/${category.toLowerCase()}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 transition group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-gray-700 group-hover:text-primary">
                          {category}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {newsData.filter(item => item.category === category).length}
                      </span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
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

                <div className="mt-6 space-y-4">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <p className="text-xs font-medium text-primary mb-1">
                      KONTEN RESMI
                    </p>
                    <p className="text-sm text-gray-700">
                      Berita bersumber langsung dari DPMPTSP Kota Bogor
                    </p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs font-medium text-gray-600 mb-1">
                      VERIFIKASI
                    </p>
                    <p className="text-sm text-gray-700">
                      Informasi telah diverifikasi dan dapat dipertanggungjawabkan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "headline": news.title,
              "image": [news.image],
              "datePublished": formatDate(news.time),
              "dateModified": formatDate(news.time),
              "author": {
                "@type": "Person",
                "name": news.author
              },
              "publisher": {
                "@type": "Organization",
                "name": "DPMPTSP Kota Bogor",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://perizinan.kotabogor.go.id/portal_22/themes/portal/images/web/pemkot.png"
                }
              },
              "description": news.excerpt
            })
          }}
        />
      </div>
    </section>
  );
}