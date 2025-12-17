import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pontislabs - AI 전문 개발 스튜디오",
  description:
    "토스, 네이버, 에이블리 출신 프로덕트 중심 AI 전문가들이 기획부터 개발, 배포까지 한 번에 책임집니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
