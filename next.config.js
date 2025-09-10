/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['picsum.photos'], // allow images from picsum.photos
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
  