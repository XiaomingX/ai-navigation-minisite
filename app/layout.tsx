import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobLeap4U - 全球优质招聘招聘网站导航",
  description: "JobLeap4U汇集全球顶尖秀求职招聘网站，为求职者和雇主聘方提供一站式招聘资源导航服务，轻松你轻松连接接理想工作与优秀人才。",
  // 可以根据需要添加更多元数据
  alternates: {
    canonical: "https://minisite.jobleap4u.com",
  },
  openGraph: {
    title: "JobLeap4U - 全球招聘网站导航",
    description: "汇集集全球优秀求职招聘平台，连接求职者与雇主的桥梁",
    type: "website",
    url: "https://minisite.jobleap4u.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
