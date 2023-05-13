import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import "../globals_css/global.css";
import "../globals_css/header.css";

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
      <body className="relative bg-[#F5F5F7]">{children}</body>
    </html>
  );
}
