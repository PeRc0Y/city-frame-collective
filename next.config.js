/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'drive.google.com', 'lh3.googleusercontent.com'],
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
