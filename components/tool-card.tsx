'use client'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
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
    // 重置状态
    setIsLoading(true)
    setHasError(false)
    setIsTimeout(false)

    // 设置10秒超时定时器
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsTimeout(true)
        setIsLoading(false)
      }
    }, 30000)

    return () => clearTimeout(timer)
  }, [icon])

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card className="group hover:shadow-md transition-shadow">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-start justify-between">
            <div className="relative w-10 h-10 bg-gray-100 rounded-lg">
              {isTimeout ? (
                <div className="absolute inset-0 flex items-center justify-center text-red-500 text-xs">
                  超时
                </div>
              ) : hasError ? (
                <div className="absolute inset-0 flex items-center justify-center text-red-500 text-xs">
                  出错
                </div>
              ) : (
                <Image
                  src={icon}
                  alt={title}
                  fill
                  className="object-contain rounded-lg"
                  onLoad={() => setIsLoading(false)}
                  onError={() => {
                    setHasError(true)
                    setIsLoading(false)
                  }}
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
    