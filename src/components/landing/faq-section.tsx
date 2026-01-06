"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
    {
        question: "Apa itu DPMPTSP Kota Bogor?",
        answer:
            "DPMPTSP Kota Bogor adalah perangkat daerah yang menyelenggarakan pelayanan perizinan dan non-perizinan serta fasilitasi penanaman modal secara terpadu.",
    },
    {
        question: "Apakah pengurusan perizinan harus datang langsung ke kantor?",
        answer:
            "Sebagian besar layanan perizinan dapat dilakukan secara online melalui sistem OSS dan layanan digital DPMPTSP Kota Bogor. Kunjungan langsung hanya diperlukan untuk layanan tertentu.",
    },
    {
        question: "Bagaimana cara mengajukan perizinan secara online?",
        answer:
            "Pemohon dapat mengajukan perizinan melalui sistem OSS atau portal layanan DPMPTSP Kota Bogor dengan melengkapi data dan dokumen yang dipersyaratkan.",
    },
    {
        question: "Bagaimana cara mengecek status permohonan perizinan?",
        answer:
            "Status permohonan dapat dipantau melalui fitur tracking berkas pada sistem OSS atau layanan online DPMPTSP menggunakan nomor registrasi permohonan.",
    },
    {
        question: "Berapa lama proses penerbitan izin?",
        answer:
            "Waktu penyelesaian izin berbeda-beda sesuai jenis layanan dan standar pelayanan yang berlaku. Informasi estimasi waktu tersedia pada masing-masing layanan perizinan.",
    },
    {
        question: "Apakah layanan DPMPTSP dipungut biaya?",
        answer:
            "Sebagian besar layanan perizinan tidak dipungut biaya. Jika terdapat retribusi, hal tersebut akan diinformasikan secara transparan sesuai ketentuan peraturan daerah.",
    },
    {
        question: "Bagaimana cara menyampaikan pengaduan atau konsultasi?",
        answer:
            "Masyarakat dapat menyampaikan pengaduan atau melakukan konsultasi melalui kanal resmi DPMPTSP Kota Bogor atau melalui sistem pengaduan yang telah disediakan.",
    },
]

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index))
    }

    return (
        <section
            id="faq"
            className="container mx-auto px-6 pb-32 flex justify-center"
        >

            <div className="md:max-w-3xl w-full">
                {/* Header */}
                <div className="flex flex-col text-center mb-12 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className="font-light md:px-32 text-muted-foreground">
                        Informasi umum seputar layanan perizinan dan penanaman modal
                        DPMPTSP Kota Bogor.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = index === activeIndex
                        const answerId = `faq-answer-${index}`

                        return (
                            <div key={index} className="bg-white rounded-md">
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between px-5 py-4 text-left text-base md:text-lg font-medium transition-colors"
                                    aria-expanded={isOpen}
                                    aria-controls={answerId}
                                >
                                    {faq.question}
                                    {isOpen ? (
                                        <ChevronUp className="w-5 h-5 transition-transform" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 transition-transform" />
                                    )}
                                </button>

                                {/* Answer (Tailwind Animation) */}
                                <div
                                    id={answerId}
                                    className={`px-5 overflow-hidden transition-all duration-300 ease-out
                    ${isOpen
                                            ? "max-h-60 opacity-100 pb-4"
                                            : "max-h-0 opacity-0 pb-0"
                                        }`}
                                >
                                    <p className="text-sm md:text-base text-gray-600">
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
