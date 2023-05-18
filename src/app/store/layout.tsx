import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import "../globals_css/global.css";
import "../globals_css/header.css";
import "./css/excerpt.css";
import "./css/hero1.css";
import "./css/hero2.css";
import "./css/hero3.css";
import "./css/hero4.css";
import "./css/footer_exc.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apple Store Clone",
  description: "courtesy of Davis ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-[#F3F5F7]">{children}</body>
    </html>
  );
}
