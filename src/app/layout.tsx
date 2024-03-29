import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals_css/global.css";
import "./globals_css/slider.css";
import "./globals_css/header.css";
import "./globals_css/hero.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apple Clone",
  description: "courtesy of Davis ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
