import type { Metadata } from "next";
import { Inter, Eczar } from "next/font/google";
import "./globals.css";
import Phone from "@/components/phone";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const eczar = Eczar({ subsets: ["latin"], variable: "--font-eczar" });

export const metadata: Metadata = {
  title: "Study Haven",
  description:
    "Study Haven is a way to find the best study spots in your area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${inter.variable} ${eczar.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
