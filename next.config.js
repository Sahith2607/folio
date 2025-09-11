/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Disable ESLint during production builds to avoid missing plugin errors
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ['picsum.photos'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**', // allow all images from i.ibb.co
      },
    ],
  },
};

module.exports = nextConfig;
