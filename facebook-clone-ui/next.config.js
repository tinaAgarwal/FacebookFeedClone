/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
     domains: [ "commons.wikimedia.org",
                "static.xx.fbcdn.net",
                "platform-lookaside.fbsbx.com",
                 "images.pexels.com"
              ],
  },
};

module.exports = nextConfig
