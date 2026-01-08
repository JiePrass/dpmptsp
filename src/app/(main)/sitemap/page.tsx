import Link from "next/link";

export default function SitemapPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="border-b border-gray-200 py-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <p className="text-sm text-gray-500">/ sitemap</p>
          <h1 className="text-4xl font-bold text-gray-900 mt-10">Peta Situs</h1>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Daftar seluruh halaman website dalam tampilan ringkas dan mudah
            diakses.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Navigasi Utama */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Navigasi Utama
            </h2>
            <ul className="mt-4 space-y-2 text-blue-700">
              <li>
                <Link href="/">Beranda</Link>
              </li>
              <li>
                <Link href="/berita">Berita</Link>
              </li>
              <li>
                <Link href="/galeri">Galeri</Link>
              </li>
              <li>
                <Link href="/layanan">Layanan</Link>
              </li>
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Informasi
            </h2>
            <ul className="mt-4 space-y-2 text-blue-700">
              <li>
                <Link href="/informasi/perizinan">Informasi Perizinan</Link>
              </li>
              <li>
                <Link href="/informasi/publik">Informasi Publik</Link>
              </li>
              <li>
                <Link href="/penanaman-modal">Penanaman Modal</Link>
              </li>
            </ul>
          </div>

          {/* Tentang */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Tentang DPMPTSP
            </h2>
            <ul className="mt-4 space-y-2 text-blue-700">
              <li>
                <Link href="/tentang/struktur-organisasi">
                  Struktur Organisasi
                </Link>
              </li>
              <li>
                <Link href="/tentang/pokok-dan-fungsi">Pokok & Fungsi</Link>
              </li>
              <li>
                <Link href="/tentang/perencanaan-dan-laporan">
                  Perencanaan & Laporan
                </Link>
              </li>
            </ul>
          </div>

          {/* Autentikasi */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Akun
            </h2>
            <ul className="mt-4 space-y-2 text-blue-700">
              <li>
                <Link href="/auth/login">Login</Link>
              </li>
              <li>
                <Link href="/auth/register">Registrasi</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Legal
            </h2>
            <ul className="mt-4 space-y-2 text-blue-700">
              <li>
                <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan">Syarat & Ketentuan</Link>
              </li>
              <li>
                <Link href="/sitemap">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* All URLs */}
        <div className="max-w-screen-xl mx-auto px-4 mt-14 border-t pt-8">
          <h3 className="text-sm font-semibold uppercase text-gray-900 mb-4">
            Semua Path URL
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-gray-700">
            {[
              "/",
              "/login",
              "/register",

              "/berita",
              "/berita/1",

              "/galeri",

              "/layanan",
              "/layanan/bantuan",
              "/layanan/kunjungan",
              "/layanan/tracking-berkas",

              "/informasi",
              "/informasi/perizinan",
              "/informasi/perizinan/bahan-paparan",
              "/informasi/perizinan/jenis-dan-syarat",
              "/informasi/perizinan/peraturan-dan-regulasi",
              "/informasi/perizinan/standar-gambar",
              "/informasi/perizinan/surat-pernyataan",

              "/informasi/publik",
              "/informasi/publik/informasi-dan-pengaduan",
              "/informasi/publik/layanan-perizinan",
              "/informasi/publik/realisasi-retribusi",

              "/penanaman-modal",
              "/penanaman-modal/arah-dan-kebijakan",
              "/penanaman-modal/promosi-investasi",
              "/penanaman-modal/realisasi-investasi",

              "/tentang",
              "/tentang/kami",
              "/tentang/penilaian",
              "/tentang/perencanaan-dan-laporan",
              "/tentang/pokok-dan-fungsi",
              "/tentang/struktur-organisasi",

              "/sitemap",
            ].map((path) => (
              <li key={path}>
                <Link href={path} className="hover:underline">
                  {path}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
