    export type NewsItem = {
        id: number;
        title: string;
        excerpt: string;
        category: string;
        author: string;
        time: string;
        image: string;
    };

export const newsData: NewsItem[] = [
    {
        id: 2,
        title: "Panduan Pengajuan Perizinan Berusaha melalui OSS-RBA",
        excerpt:
            "DPMPTSP Kota Bogor menyediakan panduan resmi pengajuan perizinan berusaha berbasis risiko melalui sistem OSS-RBA untuk memudahkan pelaku usaha.",
        category: "Panduan",
        author: "Tim Layanan OSS DPMPTSP",
        time: "3 hari lalu",
        image:
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Evaluasi Kinerja Pelayanan Perizinan Triwulan I Tahun 2024",
        excerpt:
            "DPMPTSP Kota Bogor merilis hasil evaluasi kinerja pelayanan perizinan Triwulan I sebagai bagian dari peningkatan kualitas layanan publik.",
        category: "Laporan",
        author: "Subbag Evaluasi dan Pelaporan",
        time: "1 minggu lalu",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Optimalisasi Sistem Layanan Perizinan Online DPMPTSP",
        excerpt:
            "Optimalisasi sistem perizinan online dilakukan untuk meningkatkan kecepatan proses, stabilitas layanan, dan kemudahan akses bagi masyarakat.",
        category: "Pembaruan Sistem",
        author: "Tim Pengembangan Sistem Informasi",
        time: "2 minggu lalu",
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 5,
        title: "Sosialisasi Layanan Perizinan bagi Pelaku UMKM Kota Bogor",
        excerpt:
            "DPMPTSP Kota Bogor melaksanakan kegiatan sosialisasi layanan perizinan untuk mendukung legalitas dan pengembangan usaha mikro dan kecil.",
        category: "Sosialisasi",
        author: "Bidang Pelayanan Perizinan",
        time: "3 minggu lalu",
        image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
    },
];

export const categories = [
    { id: 1, name: "Semua", count: 12 },
    { id: 2, name: "Layanan Publik", count: 5 },
    { id: 3, name: "Sosialisasi", count: 3 },
    { id: 4, name: "Investasi", count: 2 },
    { id: 5, name: "Pengumuman", count: 2 },
];
