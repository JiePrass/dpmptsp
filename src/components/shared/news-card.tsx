import Image from "next/image";
import Link from "next/link";
import {
    Calendar,
    User,
    Tag,
    ArrowRight,
} from "lucide-react";

type NewsItem = {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    time: string;
    image: string;
};

interface NewsCardProps {
    data: NewsItem;
}

export default function NewsCard({ data }: NewsCardProps) {
    return (
        <article className="group rounded-2xl border bg-white shadow-sm transition hover:shadow-md overflow-hidden">
            {/* Image */}
            <div className="relative h-48 w-full">
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Category */}
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 mb-3">
                    <Tag className="h-3 w-3" />
                    {data.category}
                </span>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {data.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {data.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{data.author}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{data.time}</span>
                    </div>
                </div>

                {/* Action */}
                <Link
                    href={`/berita/${data.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:underline"
                >
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </article>
    );
}
