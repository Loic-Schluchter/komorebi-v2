import type {Metadata} from "next";
import {Cormorant_Garamond, Inter, Shippori_Mincho} from "next/font/google";
import "./globals.css";
import {GeolocationProvider} from "@/app/providers/GeolocationProvider";

const cormorant = Cormorant_Garamond({
    variable: "--font-cormorant",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    style: ["normal", "italic"],
});

const shippori = Shippori_Mincho({
    variable: "--font-shippori",
    weight: ["400", "500", "600"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Komorebi — A guide to Japan",
    description: "Discover Japan, season by season. Curated places, local voices, mindful travel.",
    openGraph:{
        title:"Komorebi — A guide to Japan",
        description: "Discover Japan, season by season. Curated places, local voices, mindful travel.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height:630,
            }
        ],
        url:"https://komorebi.vercel.app",
        siteName:"Komorebi",
        locale:"en_US",
        type:"website",
    },
    icons:{
        icon:"/favicon.webp",
        shortcut:"/favicon.webp",
        apple:"/favicon.webp",
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${cormorant.variable} ${shippori.variable} ${inter.variable} h-full antialiased`}>
        <body className="min-h-dvh flex flex-col font-sans">{
            <GeolocationProvider>{children}</GeolocationProvider>
        }</body>
        </html>
    );
}
