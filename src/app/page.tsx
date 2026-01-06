import BeritaSection from "@/components/landing/berita-section";
import HeroSection from "@/components/landing/hero-section";
import SambutanSection from "@/components/landing/sambutan-section";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";


export default function Home() {
  return (
    <>
      
      <div className="flex min-h-screen flex-col font-sans bg-white dark:bg-black">
        <HeroSection />
        <SambutanSection />
        <BeritaSection />
      </div>
      
    </>
  );
}
