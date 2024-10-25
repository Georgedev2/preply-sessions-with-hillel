/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp','image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dvqsg4pdp/images/**',
      },
    ],
  },
};

export default nextConfig;
