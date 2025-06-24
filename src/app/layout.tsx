import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "모두의 여행",
  description: "함께 여행 계획 짜기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-gray-200 text-black flex items-center justify-center min-h-screen">
        <div className="w-full max-w-[480px] min-h-screen bg-white flex flex-col shadow-md">
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
