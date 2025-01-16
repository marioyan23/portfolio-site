/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // Match all routes
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache static assets for a year
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/.next/sitemap.xml", // Rewrites for the sitemap
      },
    ];
  },
};

export default nextConfig;
