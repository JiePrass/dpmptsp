import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },{
        protocol: "https",
        hostname: "perizinan.kotabogor.go.id",
      },{
        protocol: "https",
        hostname: "simpeg.kotabogor.go.id",
      },
    ],
  },
};

export default nextConfig;
