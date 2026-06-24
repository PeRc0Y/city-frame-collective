/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com', 'lh3.googleusercontent.com'],
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
