// components/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] sm:h-[500px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-image.jpg" // ganti sesuai path gambar
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Menu / Navbar dengan background */}
      <nav className="absolute top-0 left-0 right-0 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold">Logo</div>
          <ul className="flex space-x-6 text-gray-800 dark:text-gray-200">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center px-6 sm:items-start sm:text-left">
        <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          Welcome to Our Website
        </h1>
        <p className="mb-6 max-w-xl text-lg text-white/90 sm:text-xl md:text-2xl">
          We create amazing digital experiences for your business.
        </p>
        <div>
          <button className="mr-4 rounded-lg bg-blue-600 px-6 py-3 text-white shadow-lg hover:bg-blue-700">
            Get Started
          </button>
          <button className="rounded-lg border border-white px-6 py-3 text-white hover:bg-white/20">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
