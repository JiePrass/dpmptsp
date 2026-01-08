import BeritaSection from "@/components/landing/berita-section";
import FAQSection from "@/components/landing/faq-section";
import HeroSection from "@/components/landing/hero-section";
import SambutanSection from "@/components/landing/sambutan-section";


export default function Home() {
  return (
    <>
      
      <div className="flex min-h-screen flex-col font-sans bg-white dark:bg-black">
        <HeroSection />
        <SambutanSection />
        <BeritaSection />
        <FAQSection />
      </div>
      
    </>
  );
}
