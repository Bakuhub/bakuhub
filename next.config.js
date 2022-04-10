/** @type {import("next").NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});
const nextConfig = withBundleAnalyzer({
    reactStrictMode: true,
    images: {
        domains: ["bakuhub.s3.amazonaws.com"],
    },
});

module.exports = nextConfig;
