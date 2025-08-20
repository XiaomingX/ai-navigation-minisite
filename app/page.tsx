import { ToolCard } from "@/components/tool-card"

const tools = [
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=zhihu.com",
    title: "知乎",
    description: "中文互联网知名问答社区，聚集各领域专业人士分享知识、经验和见解。",
    tag: "社交问答",
    link: "https://www.zhihu.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=jobleap.cn",
    title: "JobLeap",
    description: "专注于招聘和求职的信息平台，提供岗位推荐、职业发展指导和行业资讯，帮助求职者和企业高效对接。",
    tag: "招聘求职",
    link: "https://jobleap.cn"
  },  
{
    icon: "https://icon.jobleap4u.com/api/fav/?url=bilibili.com",
    title: "哔哩哔哩",
    description: "年轻人喜爱的视频平台，涵盖动画、番剧、游戏、生活等多种内容形式。",
    tag: "视频娱乐",
    link: "https://www.bilibili.com"
  },
 {
    icon: "https://icon.jobleap4u.com/api/fav/?url=github.com",
    title: "GitHub",
    description: "全球最大的代码托管平台，开发者可在此协作开发、分享开源项目。",
    tag: "编程开发",
    link: "https://www.github.com"
  },
 {
    icon: "https://icon.jobleap4u.com/api/fav/?url=douban.com",
    title: "豆瓣",
    description: "集读书、电影、音乐评论于一体的社区平台，拥有大量深度用户评价。",
    tag: "文化社区",
    link: "https://www.douban.com"
  },
{
    icon: "https://icon.jobleap4u.com/api/fav/?url=csdn.net",
    title: "CSDN",
    description: "中文IT技术社区，提供技术文章、教程、资源下载等服务。",
    tag: "技术学习",
    link: "https://www.csdn.net"
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
            link={tool.link}
          />
        ))}
      </div>
    </div>
  )
}

