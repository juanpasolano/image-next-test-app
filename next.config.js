/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'images.ctfassets.net',
      'picsum.photos',
      'undefined', //because some images could be not set in contentful and would unnecessarily break the build
    ],
  },
}

module.exports = nextConfig
