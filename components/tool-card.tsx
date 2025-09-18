'use client'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image" // Next.js 内置 Image 组件（核心缓存依赖）
import { useState, useEffect } from "react"

interface ToolCardProps {
  icon: string
  title: string
  description: string
  tag?: string
  link: string
}

export function ToolCard({ icon, title, description, tag, link }: ToolCardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isTimeout, setIsTimeout] = useState(false)

  useEffect(() => {
    // 重置状态（icon 变化时重新触发）
    setIsLoading(true)
    setHasError(false)
    setIsTimeout(false)

    // 10秒超时定时器（原有逻辑保留）
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsTimeout(true)
        setIsLoading(false)
      }
    }, 60000)

    return () => clearTimeout(timer)
  }, [icon])

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="group hover:shadow-md transition-shadow h-full">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-start justify-between">
            {/* 父容器必须为 relative，配合 Image 的 fill 属性 */}
            <div className="relative w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
              {isTimeout ? (
                <div className="absolute inset-0 flex items-center justify-center text-red-500 text-xs">
                  超时
                </div>
              ) : hasError ? (
                <div className="absolute inset-0 flex items-center justify-center text-red-500 text-xs">
                  出错
                </div>
              ) : (
                // Next.js Image 组件：自动缓存+优化
                <Image
                  src={icon}
                  alt={`${title} 图标`} // 优化 alt 文本，提升可访问性
                  fill // 填充父容器（需配合 relative 父容器）
                  className="object-contain rounded-lg"
                  onLoad={() => setIsLoading(false)} // 加载成功：关闭加载状态
                  onError={() => {
                    setHasError(true)
                    setIsLoading(false)
                  }} // 加载失败：显示错误状态
                  priority={false} // 非首屏图片无需优先级（默认 false，可按需调整）
                />
              )}
            </div>
            {tag && (
              <Badge variant="secondary" className="text-xs">
                {tag}
              </Badge>
            )}
          </div>
          <div>
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </a>
  )
}