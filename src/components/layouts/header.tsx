"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const nav = [
    {
        label: "Beranda",
        href: "/",
    },
    {
        label: "Layanan",
        children: [
            { label: "Perizinan Online", href: "/" },
            { label: "Tracking Berkas", href: "/" },
            { label: "Pencarian Perizinan (KBLI)", href: "/" },
            { label: "Bantuan", href: "/" },
            { label: "Kunjungan", href: "/" },
        ],
    },
    {
        label: "Penanaman Modal",
        children: [
            { label: "Arah dan Kebijakan", href: "/" },
            { label: "Realisasi Investasi", href: "/" },
            { label: "Promosi Investasi", href: "/" },
        ],
    },
    {
        label: "Informasi",
        children: [
            { label: "Informasi Perizinan", href: "/" },
            { label: "Informasi Publik", href: "/" },
        ],
    },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);
    const [desktopDropdown, setDesktopDropdown] = useState<number | null>(null);

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-white border-b">
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
                                    <button className="flex items-center gap-1 py-2">
                                        {item.label}
                                        <ChevronDown size={16} />
                                    </button>

                                    {/* Dropdown */}
                                    <div
                                        className={`absolute right-0 top-full pt-2 ${desktopDropdown === idx ? "block" : "hidden"
                                            }`}
                                    >
                                        <div className="w-56 rounded-md border bg-white shadow-md">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link key={item.label} href={item.href} className="py-2">
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
                    <Image src="/images/main-logo.png" alt="DPMPTSP Logo" width={100} height={32} />
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
                                        className={`transition ${mobileDropdown === idx ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {mobileDropdown === idx && (
                                    <div className="mt-2 ml-2 flex flex-col gap-2 text-sm">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    setMobileDropdown(null);
                                                }}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
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
