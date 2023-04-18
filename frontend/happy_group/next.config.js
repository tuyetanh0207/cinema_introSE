// /** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/da2qtf6sw/image/upload/v1681396702/movie-cloud/**',
      },
    ],
  },
}

module.exports = nextConfig
