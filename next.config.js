/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kamila-next-ecommerce.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
