/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['i.ytimg.com', 'cdn2.ettoday.net', 'img.ltn.com.tw', 'heho.com.tw'], formats: ['image/avif', 'image/webp'], },
}

module.exports = nextConfig
