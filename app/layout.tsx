import type React from "react";
import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";

const inter = Nanum_Gothic({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "모두의 여행",
  description: "친구들과 함께 멋진 여행을 계획하고 관리하세요",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
