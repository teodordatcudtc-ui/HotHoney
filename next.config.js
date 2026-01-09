/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['scontent.cdninstagram.com', 'instagram.com'],
    unoptimized: false,
  },
}

module.exports = nextConfig
