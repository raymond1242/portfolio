import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raymond | Software Engineer",
  description: "Software Engineer with 5+ years in backend development, cloud-native solutions, and data engineering: Python, AWS, Snowflake, and AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
