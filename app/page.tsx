import { ToolCard } from "@/components/tool-card"

const tools = [
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "AiPPT",
    description: "AI一键生成PPT，用户无需排版、配色、配图，只需输入主题，AI即可一键生成。",
    tag: "AI办公工具"
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "比格AI PPT",
    description: "支持AI一键生成PPT大纲，导入本地文本文件，一键更换模板配色，AI一键美化。",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "AI免费思维导图",
    description: "AI智能思维导图，输入一句话即可生成。",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "精定AI工具集",
    description: "AI灵感选图、AI智能设计、AI文生图、AI取标题、创作效率新的FUNK。",
    tag: "综合会员"
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "AI爆款文案一键分析",
    description: "热点/爆文/文章内容分析，标题文案优化写作、AI内容创新能生成，新媒体。",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "讯飞翻文",
    description: "一键生成Word、PPT文档，让工作和学习更轻松、更高效。",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "Xmind",
    description: "【思维导图】Xmind AI思维导图助手。",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "讯飞听见",
    description: "【会议工具】讯飞听见是由科大讯飞推出的高效语音转文字、多语种翻译。",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "酷表ChatExcel",
    description: "【表格数据处理】北大团队开发的通过聊天来操作Excel表格的AI工具。",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "博思AI白板",
    description: "【思维导图】AI自动生成文字和思维导图。",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "Mind Show",
    description: "【幻灯片】国内独立开发者开发的输入内容自动生成PPT演示工具。",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "Ajelix",
    description: "【表格数据处理】处理Excel和Google sheets表格的AI工具。",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "Monica",
    description: "【效率提升】Chat GPT驱动的Chrome浏览器AI助手软件。",
  }
]

export default function Page() {
  return (
    <div className="container py-8 mx-auto">
      <h1 className="text-2xl font-bold mb-6">AI办公工具</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <ToolCard
            key={index}
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
            tag={tool.tag}
          />
        ))}
      </div>
    </div>
  )
}

