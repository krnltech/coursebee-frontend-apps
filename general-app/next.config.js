const {i18n} = require("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: './general-app/build',
  i18n,
}

module.exports = nextConfig
