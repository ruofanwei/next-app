// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['unsplash.com'],
  },
};

module.exports = nextConfig;
