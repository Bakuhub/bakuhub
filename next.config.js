/** @type {import("next").NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});
const nextConfig = withBundleAnalyzer({
    reactStrictMode: true,
    images: {
        domains: ["bakuhub.s3.amazonaws.com"],
    },
    webpack: (config, {dev, isServer}) => {
        // Replace React with Preact only in client production build
        if (!dev && !isServer) {
            Object.assign(config.resolve.alias, {
                react: "preact/compat",
                "react-dom/test-utils": "preact/test-utils",
                "react-dom": "preact/compat",
            });
        }

        return config;
    },
});

module.exports = nextConfig;
