import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals_css/global.css";
import "./globals_css/footer.css";
import "./globals_css/header.css";
import "./globals_css/hero.css";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "apple",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
      </body>
    </html>
  );
}
