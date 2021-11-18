// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['images.pexels.com', 'res.cloudinary.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
