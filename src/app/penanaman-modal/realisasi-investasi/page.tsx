"use client"

import {
    ChartBar,
    FileText,
    Info,
} from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    BarChart as ReBarChart,
} from "recharts"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const investmentData = [
    { year: "2014", target: 1200, realisasi: 2900 },
    { year: "2015", target: 2200, realisasi: 3200 },
    { year: "2016", target: 2300, realisasi: 2400 },
    { year: "2017", target: 2400, realisasi: 3000 },
    { year: "2018", target: 2500, realisasi: 3200 },
    { year: "2019", target: 2600, realisasi: 2800 },
    { year: "2020", target: 2600, realisasi: 1700 },
    { year: "2021", target: 2650, realisasi: 800 },
    { year: "2022", target: 2700, realisasi: 1600 },
    { year: "2023", target: 2750, realisasi: 2000 },
    { year: "2024", target: 2800, realisasi: 1800 },
    { year: "2025", target: 2100, realisasi: 1700 },
]

export default function RealisasiInvestasiPage() {
    return (
        <main className="bg-background">
            {/* ================= HEADER ================= */}
            <div className="mt-10 py-16 container mx-auto px-6">
                <Breadcrumb className="mb-4">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/penanaman-modal/arah-dan-kebijakan">Penanaman Modal</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Realisasi Investasi</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            Realisasi Investasi Kota Bogor
                        </h1>
                        <div className="w-24 h-1.5 bg-primary rounded-full" />
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <ChartBar className="w-4 h-4" />
                        <span>Data Investasi</span>
                    </div>
                </div>

                <p className="text-gray-600 max-w-3xl">
                    Informasi capaian target dan realisasi penanaman modal di Kota Bogor
                    berdasarkan data resmi DPMPTSP.
                </p>
            </div>

            {/* ================= CONTENT ================= */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                    {/* ================= MAIN ================= */}
                    <div className="lg:col-span-8 space-y-10">
                        {/* ===== CHART ===== */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Grafik Realisasi Investasi</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    Target vs Realisasi Penanaman Modal (dalam miliar rupiah)
                                </p>
                            </CardHeader>

                            <CardContent className="h-105">
                                <ChartContainer
                                    config={{
                                        target: {
                                            label: "Target",
                                            color: "hsl(var(--chart-1))",
                                        },
                                        realisasi: {
                                            label: "Realisasi",
                                            color: "hsl(var(--chart-2))",
                                        },
                                    }}
                                >
                                    <ResponsiveContainer width="100%" height="100%">
                                        <ReBarChart data={investmentData}>
                                            <CartesianGrid vertical={false} />
                                            <XAxis dataKey="year" />
                                            <YAxis />
                                            <ChartTooltip content={<ChartTooltipContent />} />
                                            <Bar
                                                dataKey="target"
                                                radius={[4, 4, 0, 0]}
                                                fill="var(--color-target)"
                                            />
                                            <Bar
                                                dataKey="realisasi"
                                                radius={[4, 4, 0, 0]}
                                                fill="var(--color-realisasi)"
                                            />
                                        </ReBarChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                            </CardContent>
                        </Card>

                        {/* ===== INSIGHT ===== */}
                        <div className="rounded-xl border bg-card p-6">
                            <h2 className="text-xl font-semibold">
                                Analisis & Insight Investasi
                            </h2>

                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                <li>
                                    • Realisasi investasi mengalami penurunan pada periode
                                    2020–2021 yang dipengaruhi oleh kondisi pandemi.
                                </li>
                                <li>
                                    • Tren pemulihan mulai terlihat sejak tahun 2022 dengan
                                    peningkatan realisasi yang stabil.
                                </li>
                                <li>
                                    • Periode 2018–2019 mencatatkan capaian investasi tertinggi
                                    dalam satu dekade terakhir.
                                </li>
                                <li>
                                    • Peningkatan realisasi menunjukkan kepercayaan investor yang
                                    semakin baik terhadap iklim usaha Kota Bogor.
                                </li>
                            </ul>
                        </div>

                        {/* ===== CATATAN ===== */}
                        <div className="rounded-xl border bg-muted p-6 text-sm">
                            <div className="flex items-start gap-3">
                                <Info className="mt-0.5 h-5 w-5 text-muted-foreground" />
                                <p className="text-muted-foreground">
                                    Data realisasi investasi bersumber dari DPMPTSP Kota Bogor dan
                                    dapat diperbarui secara berkala sesuai laporan resmi.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ================= SIDEBAR ================= */}
                    <aside className="lg:col-span-4 space-y-6">
                        <div className="rounded-xl border bg-card p-6">
                            <h3 className="mb-4 text-lg font-semibold">
                                Ringkasan Informasi
                            </h3>

                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Periode Data</AccordionTrigger>
                                    <AccordionContent>
                                        Data investasi periode 2014–2025.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Sumber Data</AccordionTrigger>
                                    <AccordionContent>
                                        DPMPTSP Kota Bogor.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Satuan Nilai</AccordionTrigger>
                                    <AccordionContent>
                                        Rupiah (Rp).
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Metodologi</AccordionTrigger>
                                    <AccordionContent>
                                        Data dihimpun berdasarkan laporan realisasi penanaman modal
                                        tahunan.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className="rounded-xl border bg-card p-6">
                            <h3 className="mb-4 text-lg font-semibold">
                                Tautan Terkait
                            </h3>

                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2">
                                    <FileText className="h-4 w-4" />
                                    <a href="#" className="hover:underline">
                                        Kebijakan Penanaman Modal
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FileText className="h-4 w-4" />
                                    <a href="#" className="hover:underline">
                                        Statistik Perizinan
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FileText className="h-4 w-4" />
                                    <a href="#" className="hover:underline">
                                        Profil Investasi Kota Bogor
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    )
}
