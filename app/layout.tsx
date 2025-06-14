import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Clarence cakes",
  description: "Slices of heaven",
};
const mona = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  ${mona.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
