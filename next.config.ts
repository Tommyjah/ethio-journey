import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname, // This forces Next.js to look ONLY at this folder
  images: {
    qualities: [75, 90, 100], // Configure allowed image qualities including 90
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;