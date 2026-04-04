/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.bidingservices.com',
      },
    ],
  },
};

module.exports = nextConfig;