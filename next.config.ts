// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Μπορείς να προσθέσεις εδώ ό,τι άλλο configuration χρειάζεσαι
};

export default nextConfig;
