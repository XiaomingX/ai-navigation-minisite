import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 优化字体加载策略：添加 display: 'swap' 避免文本加载阻塞，提升用户体验
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // 1. 基础信息优化（专业性+相关性）
  title: {
    default: "JobLeap4U - 全球优质招聘网站导航",
    template: "%s | 覆盖远程/外企/跨国招聘平台", // 强化核心关键词，提升搜索匹配度
  },
  description: "JobLeap4U 是专业的全球招聘平台导航工具，汇集 50+ 顶尖求职招聘网站（含远程招聘、外企招聘、跨国企业岗位），为求职者精准匹配岗位资源，为企业高效对接人才，打造一站式招聘资源入口。", // 修正语病+强化专业价值
  keywords: [
    "全球招聘网站导航",
    "远程招聘平台",
    "外企招聘渠道",
    "跨国求职工具",
    "自由职业平台",
  ], // 补充核心业务关键词，提升专业性

  // 2. 权威性与可信度强化
  publisher: "JobLeap4U", // 明确发布方
  robots: { index: true, follow: true }, // 明确索引策略

  // 3. 规范链接与替代内容（避免重复索引）
  alternates: {
    canonical: "https://minisite.jobleap4u.com", // 唯一规范链接，强化首页权重
  },

  // 4. Open Graph 优化（通用社交预览，支撑EEAT中的“用户体验”）
  openGraph: {
    title: "JobLeap4U - 全球招聘网站导航",
    description: "汇集 50+ 全球顶尖招聘平台，覆盖远程、外企、跨国岗位，求职者与企业的高效对接工具。",
    type: "website",
    url: "https://minisite.jobleap4u.com",
    siteName: "JobLeap4U",
    images: [
      {
        url: "https://jobleap4u.com/twitter-image.png", // 建议替换为实际的品牌Banner图（1200x630px最佳）
        width: 1200,
        height: 630,
        alt: "JobLeap4U 全球招聘网站导航平台", // 图片ALT文本，提升可访问性
      },
    ],
  },

  // 5. Twitter（X）专属SEO元标签（提升社交分享曝光与点击）
  twitter: {
    card: "summary_large_image", // 大图预览样式，视觉吸引力更强
    title: "JobLeap4U - 全球招聘网站导航",
    description: "找远程工作、外企岗位？50+ 全球招聘平台一键直达 | JobLeap4U", // 更简洁的社交化文案
    site: "@JobLeap4U", // 替换为你的官方Twitter账号
    creator: "@JobLeap4U", // 内容创建者账号
    images: [
      {
        url: "https://jobleap4u.com/twitter-image.png", // 建议单独设计Twitter预览图（1200x675px最佳）
        width: 1200,
        height: 675,
        alt: "JobLeap4U - 覆盖全球的招聘平台导航",
      },
    ],
  },

  // 6. 用户体验优化（响应式+兼容性）
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0", // 优化移动端显示
  icons: {
    icon: "https://jobleap4u.com/favicon.ico", // 替换为实际的网站图标，强化品牌识别
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN"> {/* 修正语言属性：内容为中文，明确地区为中国，提升本地化体验 */}
      <head>
        {/* 可选：添加结构化数据（Schema.org），进一步强化EEAT中的“可信度” */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "JobLeap4U",
              "url": "https://minisite.jobleap4u.com",
              "description": "全球优质招聘网站导航工具",
              "publisher": {
                "@type": "Organization",
                "name": "JobLeap4U",
                "url": "https://jobleap.cn"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://minisite.jobleap4u.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* 头部：强化品牌认知与导航（提升用户体验+EEAT中的“经验”） */}
        <header className="bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* 建议添加品牌Logo */}
              <img 
                src="https://jobleap4u.com/jobleap.svg" 
                alt="JobLeap4U  Logo" 
                className="w-8 h-8"
              />
              <h1 className="text-xl font-bold text-gray-800">JobLeap4U</h1>
            </div>
            <nav className="hidden md:flex gap-6 text-gray-600">
              <a href="/" className="font-medium text-primary-600">首页</a>
              <a href="/about" className="hover:text-primary-600 transition-colors">关于我们</a>
              <a href="/contact" className="hover:text-primary-600 transition-colors">联系我们</a>
            </nav>
          </div>
        </header>

        {/* 主内容区：语义化标签提升可访问性 */}
        <main className="flex-grow">{children}</main>

        {/* 底部：补充信任信息（强化EEAT中的“可信度”） */}
        <footer className="bg-gray-50 border-t border-gray-200 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-800">关于 JobLeap4U</h3>
                <p className="text-gray-600">我们专注于整合全球优质招聘资源，为求职者和企业提供高效、精准的导航服务，助力职业发展与人才招聘。</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-800">快速链接</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/privacy" className="hover:text-primary-600 transition-colors">隐私政策</a></li>
                  <li><a href="/terms" className="hover:text-primary-600 transition-colors">服务条款</a></li>
                  <li><a href="/faq" className="hover:text-primary-600 transition-colors">常见问题</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-800">联系我们</h3>
                <p className="text-gray-600">邮箱：contact@jobleap4u.com</p>
                <p className="text-gray-600">关联平台：<a href="https://jobleap.cn" className="text-primary-600 hover:underline">JobLeap 主站</a></p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} JobLeap4U. 保留所有权利。
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}