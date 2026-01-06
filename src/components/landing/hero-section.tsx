// components/HeroSection.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { src: "/bg1.jpg", alt: "Gedung pemerintahan modern" },
  { src: "/bg2.jpeg", alt: "Kantor pemerintahan" },
  { src: "/bg3.webp", alt: "Tim kerja pemerintahan" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-[-1]"
            }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover brightness-50"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay tipis */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Konten utama */}
      <div className="absolute inset-0 flex justify-center items-center z-20 px-4">
        <div className="text-center max-w-4xl mt-32">
          <p className="text-lg md:text-xl font-medium text-white mb-2 drop-shadow-lg">
            Selamat datang di website
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
            <span className="text-yellow-300">Badan Keuangan dan Aset Daerah</span>
            <br />
            <span className="text-white">Kota Bogor</span>
          </h1>
          <p className="text-base md:text-lg font-medium text-white mb-8 drop-shadow-lg">
            Melayani masyarakat dengan profesional dan transparan
          </p>

          {/* Form Pencarian */}
          <form className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 bg-blue-500/30 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl shadow-black/20 border border-white/30">

              {/* Pilihan Kategori */}
              <div className="flex-shrink-0">
                <label htmlFor="search-category" className="sr-only">
                  Pilih kategori pencarian
                </label>
                <select
                  id="search-category"
                  className="w-full sm:w-auto px-4 py-3 border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 bg-white/80 backdrop-blur-sm text-gray-800 transition-all duration-300"
                  defaultValue="dokumen"
                >
                  <option value="dokumen">Cari Publikasi</option>
                  <option value="berita">Cari Berita</option>
                  <option value="aset">Sewa Aset Daerah</option>
                </select>
              </div>

              {/* Input Pencarian */}
              <div className="flex-1">
                <label htmlFor="search-query" className="sr-only">
                  Masukkan kata kunci pencarian
                </label>
                <input
                  id="search-query"
                  type="text"
                  placeholder="Masukkan kata kunci..."
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 bg-white/80 backdrop-blur-sm text-gray-800 transition-all duration-300 border-white/40"
                />
              </div>

              {/* Tombol Cari */}
              <button
                type="submit"
                className="flex-shrink-0 px-6 py-3 bg-blue-600/90 backdrop-blur-sm text-white rounded-lg hover:bg-blue-700/90 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 border border-blue-500/30 hover:border-blue-400/50"
              >
                Cari
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
