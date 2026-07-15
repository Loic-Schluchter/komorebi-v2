import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    allowedDevOrigins: ['192.168.1.105'],
    images: {
        formats: ['image/avif', 'image/webp'],
        qualities: [25, 50, 75],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "places.googleapis.com"
            }
        ]
    },

    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                ],
            },
        ];
    },

    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    productionBrowserSourceMaps: false,

};

export default nextConfig;