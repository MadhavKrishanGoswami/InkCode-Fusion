import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Cursor from "../components/GradientBubbles/GradientBubbles";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inkcode-Fusion",
  description: "Technical Interview Conducting Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
