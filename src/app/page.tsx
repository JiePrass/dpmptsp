// app/page.tsx
import HeroSection from "@/components/landing/hero-section"; // BENAR, sesuai file
import SambutanSection from "@/components/landing/sambutan";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";


export default function Home() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col font-sans bg-zinc-50 dark:bg-black">
        <HeroSection />
        <main className="mx-auto w-full max-w-3xl px-6 py-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Main Content
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            This is your main page content below the hero section.
          </p>
        </main>
        <SambutanSection />
      </div>
      <Footer />
    </>
  );
}
