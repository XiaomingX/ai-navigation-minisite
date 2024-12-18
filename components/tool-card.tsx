import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ToolCardProps {
  icon: string
  title: string
  description: string
  tag?: string
}

export function ToolCard({ icon, title, description, tag }: ToolCardProps) {
  return (
    <Card className="group hover:shadow-md transition-shadow">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div className="relative w-10 h-10">
            <Image
              src={icon}
              alt={title}
              fill
              className="object-contain rounded-lg"
            />
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
  )
}

