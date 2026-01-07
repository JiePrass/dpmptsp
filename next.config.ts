import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      }, {
        protocol: "https",
        hostname: "perizinan.kotabogor.go.id",
        pathname: "/**",
      }, {
        protocol: "https",
        hostname: "simpeg.kotabogor.go.id",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
