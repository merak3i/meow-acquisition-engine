/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "meowcreativehaus.lovable.app",
      },
    ],
  },
};

module.exports = nextConfig;
