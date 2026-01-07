"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const nav = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Tentang",
    children: [
      { label: "Kami", href: "/tentang/kami" },
      { label: "Pokok dan Fungsi", href: "/tentang/pokok-dan-fungsi" },
      { label: "Struktur Organisasi", href: "/tentang/struktur-organisasi" },
      { label: "Penilaian", href: "/tentang/penilaian" },
      {
        label: "Perencanaan dan Pelaporan",
        href: "/tentang/perencanaan-dan-laporan",
      },
    ],
  },
  {
    label: "Layanan",
    children: [
      // { label: "Perizinan Online", href: "/layanan/perizinan-online" },
      { label: "Perizinan Online", href: "/login" },
      { label: "Tracking Berkas", href: "/layanan/tracking-berkas" },
      {
        label: "Pencarian Perizinan (KBLI)",
        href: "/register",
      },
      // {
      //   label: "Pencarian Perizinan (KBLI)",
      //   href: "/layanan/pencarian-perizinan",
      // },
      { label: "Bantuan", href: "/layanan/bantuan" },
      { label: "Kunjungan", href: "/layanan/kunjungan" },
    ],
  },
  {
    label: "Penanaman Modal",
    children: [
      {
        label: "Arah dan Kebijakan",
        href: "/penanaman-modal/arah-dan-kebijakan",
      },
      {
        label: "Realisasi Investasi",
        href: "/penanaman-modal/realisasi-investasi",
      },
      {
        label: "Promosi Investasi",
        href: "/penanaman-modal/promosi-investasi",
      },
    ],
  },
  {
    label: "Informasi",
    children: [
      { label: "Informasi Perizinan", href: "/informasi/perizinan/" },
      { label: "Informasi Publik", href: "/informasi/publik" },
    ],
  },
  {
    label: "Berita & Galeri",
    children: [
      { label: "Berita", href: "/berita" },
      { label: "Galeri", href: "/galeri" },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<number | null>(null);

  const isActive = (href?: string) => {
    if (!href) return false;

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white border-b z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo Image */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/main-logo.png"
              alt="DPMPTSP Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item, idx) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDesktopDropdown(idx)}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  {/* Trigger */}
                  <button
                    className={`flex items-center gap-1 py-2 transition-colors
    ${item.children?.some((c) => isActive(c.href))
                        ? "text-primary font-medium"
                        : "text-gray-700 hover:text-primary"
                      }`}
                  >
                    {item.label}
                    <ChevronDown size={16} />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute right-0 top-full pt-2 hover:cursor-pointer transition-all duration-200 ease-out
    ${desktopDropdown === idx
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                      }`}
                  >
                    <div className="w-56 rounded-md border bg-white shadow-md">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`block px-4 py-2 transition-colors
    ${isActive(child.href)
                              ? "border-l-4 border-primary bg-primary/5 text-primary font-medium"
                              : "border-l-4 border-transparent hover:bg-gray-100"
                            }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`py-2 transition-colors
    ${isActive(item.href)
                      ? "text-primary font-medium"
                      : "text-gray-700 hover:text-primary"
                    }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => {
            setMobileOpen(false);
            setMobileDropdown(null);
          }}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <Image
            src="/images/main-logo.png"
            alt="DPMPTSP Logo"
            width={100}
            height={32}
          />
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-4 gap-4">
          {nav.map((item, idx) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="flex w-full items-center justify-between font-medium"
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === idx ? null : idx)
                  }
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileDropdown === idx ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Animated Dropdown */}
                <div
                  className={`ml-2 mt-2 flex flex-col gap-2 text-sm overflow-hidden
            transition-all duration-200 ease-out
            ${mobileDropdown === idx
                      ? "opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-1"
                    }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className={`py-1 pl-2 border-l-4 transition-colors
    ${isActive(child.href)
                          ? "border-primary text-primary font-medium"
                          : "border-transparent"
                        }`}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileDropdown(null);
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </aside>
    </>
  );
}
