import type { Metadata } from "next";
import { Mona_Sans,Satisfy } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Clarence cakes",
  description: "Slices of heaven",
};
const mona = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
})

const satisfy = Satisfy({
  variable: "--font-satisfys",
  weight:"400",
})

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
