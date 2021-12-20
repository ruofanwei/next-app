// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  presets: [require.resolve('next/babel')],
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['i.imgur.com', 'images.pexels.com', 'res.cloudinary.com', 'images.unsplash.com'],
  },
  i18n: {
    locales: ['en-US', 'zh-Hant-TW', 'ja-JP'],
    defaultLocale: 'zh-Hant-TW',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};

module.exports = nextConfig;
