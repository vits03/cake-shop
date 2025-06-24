import type { Metadata } from "next";
import { Mona_Sans,Satisfy } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Audette – Cake Shop in Mauritius",
  description: "Custom cakes made with love in Mauritius. Explore our collection of birthday cakes, wedding cakes, and more.",
 keywords: [
    "cake",
    "cakes",
    "cake shop",
    "Mauritius cake shop",
    "custom cakes",
    "birthday cakes",
    "wedding cakes",
    "designer cakes",
    "Audette cakes",
    "Mauritius"
  ]  ,/* metadataBase: new URL("#"), // Replace with your actual domain

  openGraph: {
    title: "Audette – Cake Shop in Mauritius",
    description: "Custom cakes made with love in Mauritius. Explore our collection of birthday cakes, wedding cakes, and more.",
  url: "#",
    siteName: "Audette Cakes",
    images: [
      {
        url: "/images/cakes/cake1.jpg", // Replace with your actual image path
        width: 960,
        height: 1280,
        alt: "A beautifully decorated birthday cake from Audette Cakes",
      },
    ],
    locale: "en_MU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Audette – Cake Shop in Mauritius",
    description: "Order cakes for all occasions in Mauritius – baked with love by Audette.",
    images: ["/images/cakes/cake1.jpg"], // same as OG image
    creator: "@AudetteCakes", // optional if you have a Twitter account
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "#",
  },
*/
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};



const mona = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  display: "swap", // optional but recommended
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: "400",
  display: "swap", // optional
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  ${mona.variable}  ${satisfy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
