import Image from "next/image";
import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Identitas */}
                <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/pemkot-bogor.png"
                            alt="DPMPTSP Logo"
                            width={64}
                            height={40}
                            priority
                        />
                        <h1 className="text-xl font-bold">DPMPTSP<br /> KOTA BOGOR</h1>
                    </Link>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu
                        Kota Bogor berkomitmen memberikan pelayanan perizinan
                        yang cepat, transparan, dan profesional.
                    </p>

                    <div className="flex gap-3">
                        <Link href="https://www.facebook.com/dpmptsp.kota.bogor/" className="p-2 rounded-full border hover:bg-gray-100">
                            <Facebook size={16} />
                        </Link>
                        <Link href="https://www.instagram.com/dpmptsp_kotabgr/" className="p-2 rounded-full border hover:bg-gray-100">
                            <Instagram size={16} />
                        </Link>
                        <Link href="https://twitter.com/DPMPTSP_KotaBgr" className="p-2 rounded-full border hover:bg-gray-100">
                            <Twitter size={16} />
                        </Link>
                        <Link href="https://www.youtube.com/channel/UCebMgEnWoeGoraGpxz42vEg" className="p-2 rounded-full border hover:bg-gray-100">
                            <Youtube size={16} />
                        </Link>
                    </div>
                </div>

                {/* Menu Utama */}
                <div className="space-y-3">
                    <h3 className="font-semibold">Menu Utama</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><Link href="/">Beranda</Link></li>
                        <li><Link href="/profil">Profil DPMPTSP</Link></li>
                        <li><Link href="/layanan">Layanan</Link></li>
                        <li><Link href="/berita">Berita & Agenda</Link></li>
                        <li><Link href="/kontak">Kontak</Link></li>
                    </ul>
                </div>

                {/* Layanan */}
                <div className="space-y-3">
                    <h3 className="font-semibold">Layanan</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>Perizinan Online</li>
                        <li>Tracking Berkas</li>
                        <li>Pencarian KBLI</li>
                        <li>Penanaman Modal</li>
                        <li>Konsultasi Perizinan</li>
                    </ul>
                </div>

                {/* Kontak */}
                <div className="space-y-4">
                    <h3 className="font-semibold">Kontak Kami</h3>

                    <div className="flex gap-3 text-sm text-gray-600">
                        <MapPin size={18} className="mt-0.5" />
                        <span>
                            Jl. Raya Tajur No.54<br />
                            Kota Bogor, Jawa Barat
                        </span>
                    </div>

                    <div className="flex gap-3 text-sm text-gray-600">
                        <Phone size={18} />
                        <span>(0251) 833-XXXX</span>
                    </div>

                    <div className="flex gap-3 text-sm text-gray-600">
                        <Mail size={18} />
                        <span>dpmptsp@kotabogor.go.id</span>
                    </div>

                    <div className="flex gap-3 text-sm text-gray-600">
                        <Clock size={18} />
                        <span>Senin – Jumat, 08.00 – 16.00</span>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t py-4 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} DPMPTSP Kota Bogor. Seluruh hak dilindungi.
            </div>
        </footer>
    );
}
