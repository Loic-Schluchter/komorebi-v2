import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    allowedDevOrigins: ['192.168.1.105'],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "places.googleapis.com"
            }
        ],

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

};

export default nextConfig;