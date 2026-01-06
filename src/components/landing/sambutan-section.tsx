import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SambutanSection() {
    return (
        <section className="w-full py-16">
            <div className="container mx-auto px-4">
                <Card className="overflow-hidden rounded-3xl border-none">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {/* Left Profile */}
                        <div className="relative flex flex-col items-center justify-center text-center text-white">
                            <Image
                                src="/images/kepala-dinas.png"
                                alt="Kepala Dinas"
                                width={300}
                                height={500}
                                className="object-contain"
                            />
                        </div>

                        {/* Right Content */}
                        <CardContent className="md:col-span-2 p-8">
                            <div className="mb-4">
                                <h2 className="text-2xl font-bold text-foreground">
                                    Sambutan Kepala Badan
                                </h2>
                                <div className="mt-2 h-1 w-10 rounded-full bg-primary" />
                            </div>

                            <ScrollArea className="h-60 pr-4">
                                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                                    <p>
                                        Assalamu`alaikum Warahmatullahi Wabarakatuh.
                                    </p>
                                    <p>
                                        Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kota Bogor terus berkomitmen untuk meningkatkan kualitas pelayanan publik dan menciptakan iklim investasi yang kondusif. Kami memahami betul pentingnya inovasi dan perbaikan berkelanjutan dalam memberikan pelayanan yang lebih baik kepada masyarakat dan dunia usaha. Kami berharap dapat memperkuat kerjasama dengan berbagai pihak serta terbuka untuk mendengar masukan dan saran dari semua masyarakat agar kami dapat terus beradaptasi dan berinovasi sesuai dengan kebutuhan dan perkembangan terkini.
                                    </p>
                                    <p>
                                        Website ini hadir sebagai wujud komitmen kami dalam
                                        meningkatkan transparansi, akuntabilitas, dan aksesibilitas
                                        informasi publik terkait pengelolaan keuangan dan aset
                                        daerah. Melalui platform digital ini, kami berupaya
                                        menyajikan informasi yang akurat, terkini, dan bermanfaat
                                        bagi masyarakat luas.
                                    </p>
                                </div>
                            </ScrollArea>

                            <div className="mt-6 flex items-center gap-3 border-t pt-4">
                                <div>
                                    <p className="text-sm font-semibold">
                                        H. EKO PRABOWO, AP.,M.Si
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        Plt. Kepala DPMPTSP Kota Bogor
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </section>
    );
}
