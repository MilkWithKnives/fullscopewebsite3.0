import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // serve AVIF/WebP when the browser supports it
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [200, 320, 480, 640, 750], // for inline/small images
  },
  async headers() {
    return [
      {
        // long-cache any original assets under /images (immutable names once deployed)
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;