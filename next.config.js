/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'img.heroui.chat',
      'drive.google.com',
      'res-console.cloudinary.com',
      'res.cloudinary.com',
      'lh3.googleusercontent.com', // biasanya Google Drive redirect ke sini
    ],
  },
}

module.exports = nextConfig
