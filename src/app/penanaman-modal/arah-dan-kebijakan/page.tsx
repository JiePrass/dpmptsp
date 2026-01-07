"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { BriefcaseBusiness, Layers } from "lucide-react";

export default function PenanamanModalPage() {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* ===== HEADER ===== */}
                <div className="mb-12 mt-10">
                    <Breadcrumb className="mb-4">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Penanaman Modal</BreadcrumbPage>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Arah dan Kebijakan</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">
                                Penanaman Modal
                            </h1>
                            <div className="w-24 h-1.5 bg-primary rounded-full" />
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <BriefcaseBusiness className="w-4 h-4" />
                            <span>Kebijakan & Strategi Investasi</span>
                        </div>
                    </div>

                    <p className="text-gray-600 max-w-3xl">
                        Informasi arah kebijakan dan strategi Pemerintah Kota Bogor dalam
                        mendorong penanaman modal yang berkelanjutan, inklusif, dan
                        berwawasan lingkungan.
                    </p>
                </div>

                {/* ===== CONTENT ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* KONTEN UTAMA */}
                    <div className="lg:col-span-2 space-y-10">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Arah Kebijakan Penanaman Modal
                            </h2>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li>Perbaikan iklim penanaman modal.</li>
                                <li>Penguatan kelembagaan penanaman modal.</li>
                                <li>
                                    Layanan perizinan yang pasti, transparan, dan berbasis
                                    elektronik (online).
                                </li>
                                <li>
                                    Pelimpahan wewenang Walikota kepada penyelenggara PTSP.
                                </li>
                                <li>
                                    Peningkatan koordinasi antar SKPD dalam pelayanan perizinan.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Persebaran Penanaman Modal
                            </h2>
                            <p className="text-gray-700">
                                Persebaran penanaman modal diarahkan berdasarkan Wilayah
                                Pengembangan (WP) serta kesesuaian rencana tata ruang wilayah.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Fokus Pengembangan
                            </h2>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li>
                                    <strong>Infrastruktur:</strong> jalan, air bersih, pengolahan
                                    sampah, telekomunikasi, dan listrik.
                                </li>
                                <li>
                                    <strong>Jasa & Perdagangan:</strong> pariwisata, pendidikan,
                                    keuangan, perbankan, dan jasa informasi.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Penanaman Modal Berwawasan Lingkungan
                            </h2>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li>Pengurangan emisi dan pengelolaan limbah.</li>
                                <li>Peningkatan proses produksi ramah lingkungan.</li>
                                <li>Pengembangan wilayah berbasis daya dukung lingkungan.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Pemberdayaan UMKM
                            </h2>
                            <p className="text-gray-700">
                                Melalui kemitraan setara, terbuka, dan saling menguntungkan untuk
                                meningkatkan skala usaha secara berkelanjutan.
                            </p>
                        </section>
                    </div>

                    {/* SIDEBAR ACCORDION */}
                    <aside className="space-y-6">
                        <div className="border rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <Layers className="w-5 h-5 text-primary" />
                                <h3 className="font-bold text-gray-900">
                                    Ringkasan Kebijakan
                                </h3>
                            </div>

                            <Accordion type="multiple" className="space-y-2">
                                <AccordionItem value="kebijakan">
                                    <AccordionTrigger>Arah Kebijakan</AccordionTrigger>
                                    <AccordionContent>
                                        Perbaikan iklim investasi, penguatan kelembagaan, dan
                                        optimalisasi layanan PTSP.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="fokus">
                                    <AccordionTrigger>Fokus Pengembangan</AccordionTrigger>
                                    <AccordionContent>
                                        Infrastruktur strategis serta sektor jasa dan perdagangan.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="lingkungan">
                                    <AccordionTrigger>Lingkungan & UMKM</AccordionTrigger>
                                    <AccordionContent>
                                        Investasi berwawasan lingkungan dan pemberdayaan UMKM
                                        melalui kemitraan.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="promosi">
                                    <AccordionTrigger>Promosi & Kerja Sama</AccordionTrigger>
                                    <AccordionContent>
                                        Penguatan Bogor sebagai tujuan investasi dan peningkatan
                                        kerja sama lintas sektor.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
