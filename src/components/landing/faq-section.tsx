"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "Apa itu DPMPTSP Kota Bogor?",
        answer: "DPMPTSP Kota Bogor adalah perangkat daerah yang menyelenggarakan pelayanan perizinan dan non-perizinan serta fasilitasi penanaman modal secara terpadu.",
    },
    {
        question: "Apakah pengurusan perizinan harus datang langsung ke kantor?",
        answer: "Sebagian besar layanan perizinan dapat dilakukan secara online melalui sistem OSS dan layanan digital DPMPTSP Kota Bogor.",
    },
    {
        question: "Bagaimana cara mengajukan perizinan secara online?",
        answer: "Pemohon dapat mengajukan perizinan melalui sistem OSS atau portal layanan DPMPTSP Kota Bogor dengan melengkapi data yang dipersyaratkan.",
    },
    {
        question: "Bagaimana cara mengecek status permohonan perizinan?",
        answer: "Status permohonan dapat dipantau melalui fitur tracking berkas pada sistem OSS atau layanan online DPMPTSP.",
    },
    {
        question: "Berapa lama proses penerbitan izin?",
        answer: "Waktu penyelesaian izin berbeda-beda sesuai jenis layanan dan standar pelayanan yang berlaku.",
    },
]

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index))
    }

    return (
        <section id="faq" className="container mx-auto px-6 py-10 md:py-24">
            <div className="flex flex-col gap-8 md:flex-row md:gap-24 items-start">

                {/* BAGIAN KIRI: STICKY HEADER */}
                <div className="md:w-1/3 md:sticky md:top-24">
                    <h2 className="text-4xl md:text-6xl font-bold text-[#1e293b] mb-6">
                        FAQs
                    </h2>
                    <p className="text-gray-500 leading-relaxed max-w-sm">
                        Temukan jawaban atas pertanyaan umum Anda tentang layanan dan produk DPMPTSP Kota Bogor.
                    </p>
                </div>

                {/* BAGIAN KANAN: LIST FAQ */}
                <div className="md:w-2/3 w-full space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = index === activeIndex
                        const answerId = `faq-answer-${index}`

                        return (
                            <div
                                key={index}
                                className={`border rounded-xl transition-all duration-200 ${isOpen ? "border-primary ring-1 ring-primary" : "border-gray-200"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
                                    aria-expanded={isOpen}
                                    aria-controls={answerId}
                                >
                                    <span className="text-base md:text-lg font-semibold text-[#1e293b]">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    id={answerId}
                                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-125 pb-6 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}