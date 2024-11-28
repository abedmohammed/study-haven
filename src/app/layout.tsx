import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
