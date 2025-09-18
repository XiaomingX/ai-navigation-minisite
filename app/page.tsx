import { ToolCard } from "@/components/tool-card"

const tools = [
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=jobleap.cn",
    title: "JobLeap",
    description: "专注于招聘和求职的信息平台，提供岗位推荐、职业发展指导和行业资讯，帮助求职者和企业高效对接。",
    tag: "招聘求职",
    link: "https://jobleap.cn"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=github.com",
    title: "GitHub Jobs",
    description: "面向开发者的招聘平台，依托GitHub社区，聚集全球技术职位和远程工作机会，方便开发者展示作品并申请职位。",
    tag: "技术招聘",
    link: "https://jobs.github.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=51job.com",
    title: "前程无忧",
    description: "中国领先的人力资源服务商之一，提供丰富的求职招聘信息和职业发展服务。",
    tag: "人才招聘",
    link: "https://www.51job.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=liepin.com",
    title: "猎聘",
    description: "面向中高端人才的专业招聘平台，帮助求职者精准匹配优质职位。",
    tag: "高端招聘",
    link: "https://www.liepin.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=zhaopin.com",
    title: "智联招聘",
    description: "全国性的综合招聘平台，提供招聘、求职、企业服务一站式解决方案。",
    tag: "综合招聘",
    link: "https://www.zhaopin.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=bosszhipin.com",
    title: "BOSS直聘",
    description: "以直聊为特点，打通求职者和招聘Boss的沟通桥梁，提升招聘效率。",
    tag: "直聊招聘",
    link: "https://www.zhipin.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=upwork.com",
    title: "Upwork",
    description: "全球领先的自由职业者接单平台，提供海量远程项目，涵盖技术开发、设计、写作等多种服务。",
    tag: "自由职业",
    link: "https://www.upwork.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=fiverr.com",
    title: "Fiverr",
    description: "全球自由职业者市场，用户可以发布和承接微任务，适合设计、文案、视频制作等短周期项目。",
    tag: "自由职业",
    link: "https://www.fiverr.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=freelancer.com",
    title: "Freelancer",
    description: "大型自由职业者和雇主在线平台，支持竞标模式，项目涵盖多个行业和技能级别。",
    tag: "自由职业",
    link: "https://www.freelancer.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=toptal.com",
    title: "Toptal",
    description: "高端自由职业者平台，专注于软件开发、设计和金融人才筛选，连接全球顶级项目与客户。",
    tag: "高端自由职业",
    link: "https://www.toptal.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=workable.com",
    title: "Workable",
    description: "全球招聘平台，提供数千个职位，支持远程及办公室工作，帮助企业快速找到合适人才。",
    tag: "招聘平台",
    link: "https://jobs.workable.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=indeed.com",
    title: "Indeed",
    description: "全球最大求职网站之一，涵盖多个国家和地区，提供职位搜索、公司评价和简历服务。",
    tag: "求职招聘",
    link: "https://www.indeed.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=michaelpage.com",
    title: "Michael Page",
    description: "专业招聘网站，专注中高端职位，覆盖金融、法律、技术等多个行业，服务全球30多个国家。",
    tag: "专业招聘",
    link: "https://www.michaelpage.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=monster.com",
    title: "Monster",
    description: "全球知名的在线招聘平台，提供丰富职位搜索和职业发展资源，支持多语言服务。",
    tag: "求职招聘",
    link: "https://www.monster.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=glassdoor.com",
    title: "Glassdoor",
    description: "集职位搜索、公司评价和薪资信息于一体的平台，帮助求职者做出明智的职业选择。",
    tag: "职场信息",
    link: "https://www.glassdoor.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=linkedin.com",
    title: "LinkedIn",
    description: "全球最大的职业社交平台，兼具招聘、求职与专业网络建设功能。",
    tag: "职业社交",
    link: "https://www.linkedin.com/jobs"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=careerbuilder.com",
    title: "CareerBuilder",
    description: "提供职位搜索和职业建议，拥有庞大的企业合作网络，覆盖广泛行业职位。",
    tag: "招聘平台",
    link: "https://www.careerbuilder.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=reed.co.uk",
    title: "Reed",
    description: "英国领先招聘网站，涵盖多个行业的职位信息，支持简历投递和职业发展指导。",
    tag: "招聘平台",
    link: "https://www.reed.co.uk"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=seek.com.au",
    title: "Seek",
    description: "澳大利亚最大的招聘网站，提供多元化职位机会，覆盖澳洲及新西兰市场。",
    tag: "招聘平台",
    link: "https://www.seek.com.au"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=workday.com",
    title: "Workday",
    description: "领先的企业人力资本管理平台，许多大公司使用Workday发布招聘信息，涵盖多种技术与程序员职位。",
    tag: "企业招聘",
    link: "https://workday.wd5.myworkdayjobs.com/Workday"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=stackoverflow.com",
    title: "Stack Overflow Jobs",
    description: "为开发者打造的职业平台，提供真实项目和职位，支持远程和全球招聘。",
    tag: "开发者招聘",
    link: "https://stackoverflowjobs.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=remotive.io",
    title: "Remotive",
    description: "远程技术岗位的招聘平台，聚焦软件开发人员及相关技术职位，支持全球远程工作机会。",
    tag: "远程技术招聘",
    link: "https://remotive.io"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=angel.co",
    title: "AngelList",
    description: "专注初创企业招聘的平台，适合程序员和技术人才寻找创业公司和远程岗位。",
    tag: "初创招聘",
    link: "https://angel.co/jobs"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=technojobs.co.uk",
    title: "Technojobs",
    description: "英国领先IT招聘网站，涵盖软件开发、网络安全、大数据等技术岗位。",
    tag: "技术招聘",
    link: "https://www.technojobs.co.uk"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=mynavi.jp",
    title: "マイナビ (Mynavi)",
    description: "著名的日本招聘平台，覆盖新卒及有经验求职者，职位类别丰富。",
    tag: "日本招聘",
    link: "https://www.mynavi.jp"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=doda.jp",
    title: "Doda",
    description: "日本大型中途（有经验者）招聘网站，提供猎头服务和高端职位推荐。",
    tag: "日本招聘",
    link: "https://doda.jp"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=gaijinpot.com",
    title: "GaijinPot Jobs",
    description: "专为在日外国人设计的求职平台，职位多样，适合英语或双语人才。",
    tag: "日本招聘",
    link: "https://jobs.gaijinpot.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=saramin.co.kr",
    title: "Saramin",
    description: "韩国大型招聘平台，覆盖广泛行业职位，是求职者首选的综合招聘网站。",
    tag: "韩国招聘",
    link: "https://www.saramin.co.kr"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=work.go.kr",
    title: "Korea Employment Information Service",
    description: "韩国政府官方就业服务网站，提供正规招聘信息及职涯指导。",
    tag: "政府招聘",
    link: "https://www.work.go.kr"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=mycareersfuture.gov.sg",
    title: "MyCareersFuture",
    description: "新加坡政府主导的职业平台，拥有大量职位发布，支持多行业及技能匹配。",
    tag: "政府招聘",
    link: "https://www.mycareersfuture.gov.sg"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=waiqi.com",
    title: "神仙外企",
    description: "专业的中国外企求职招聘平台，覆盖全国各大城市外企职位，支持内推和社区互动，岗位多样且更新快速。",
    tag: "外企招聘",
    link: "https://www.waiqi.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=eleduck.com",
    title: "电鸭社区",
    description: "专注远程办公和互联网岗位的招聘交流社区，倡导灵活工作和远程合作。",
    tag: "远程招聘社区",
    link: "https://eleduck.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=bayt.com",
    title: "Bayt",
    description: "中东最大求职招聘平台，提供阿联酋、沙特、卡塔尔等国职位，支持多语言和行业搜索。",
    tag: "中东招聘",
    link: "https://www.bayt.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=gulftalent.com",
    title: "GulfTalent",
    description: "专注中东高端职位的招聘平台，涉及金融、科技、工程等专业岗位。",
    tag: "中东高端招聘",
    link: "https://www.gulftalent.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=career.ru",
    title: "Career.ru",
    description: "面向应届毕业生和年轻求职者的招聘网站，提供培训和实习机会。",
    tag: "毕业生招聘",
    link: "https://career.ru"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=sg.jobstreet.com",
    title: "JobStreet",
    description: "东南亚最大的招聘网站之一，提供全面多行业职位，支持多国语言搜索和申请。",
    tag: "东南亚招聘",
    link: "https://www.jobstreet.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=kalibrr.com",
    title: "Kalibrr",
    description: "聚焦菲律宾及印尼市场的专业招聘平台，着重技术与专业岗位，支持在线面试。",
    tag: "东南亚招聘",
    link: "https://www.kalibrr.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=glints.com",
    title: "Glints",
    description: "东南亚地区活跃的职业发展平台，兼具实习、全职及远程工作机会，支持职场培训。",
    tag: "东南亚招聘",
    link: "https://glints.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=sinojobs.com",
    title: "SinoJobs",
    description: "欧洲领先的国际及中欧跨国人才招聘平台，专注提供中欧企业招聘和海外人才服务。",
    tag: "国际招聘",
    link: "https://www.sinojobs.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=randstad.com",
    title: "Randstad Europe",
    description: "全球最大的雇佣机构之一，提供临时及永久职位，涵盖IT、医疗保健、工程及金融领域。",
    tag: "临时招聘",
    link: "https://www.randstad.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=adecco.com",
    title: "Adecco Europe",
    description: "国际领先的人力资源服务供应商，为欧洲企业提供多行业劳动力解决方案和人员配置。",
    tag: "综合招聘",
    link: "https://www.adecco.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=ziprecruiter.com",
    title: "ZipRecruiter",
    description: "大型综合招聘平台，提供全职、兼职及远程工作岗位，适合多行业求职者，支持职位搜索与匹配。",
    tag: "综合招聘",
    link: "https://www.ziprecruiter.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=dice.com",
    title: "Dice",
    description: "专注于IT和技术领域的招聘平台，覆盖全职及远程技术岗位，是技术人才求职的重要渠道。",
    tag: "技术招聘",
    link: "https://www.dice.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=flexjobs.com",
    title: "FlexJobs",
    description: "专注远程、弹性工作和自由职业机会的平台，为求职者提供高质量的兼职和全职远程岗位。",
    tag: "远程招聘",
    link: "https://www.flexjobs.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=weworkremotely.com",
    title: "We Work Remotely",
    description: "全球领先的远程职位发布平台，覆盖设计、编程、客户支持等多个领域，专注纯远程岗位。",
    tag: "远程招聘",
    link: "https://weworkremotely.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=arc.dev",
    title: "Arc.dev",
    description: "硅谷科技公司直连的远程开发者平台，提供高薪远程合约岗位，门槛较高但岗位质量极佳。",
    tag: "技术远程",
    link: "https://arc.dev"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=workana.com",
    title: "Workana",
    description: "拉美及全球市场成长快速的自由职业平台，覆盖设计、编程及市场营销等领域，支持多币种支付。",
    tag: "自由职业",
    link: "https://www.workana.com"
  }  
]

export default function Page() {
  return (
    <div className="container py-8 mx-auto">
      <h1 className="text-2xl font-bold mb-6">全球招聘网站</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 优化：用唯一的 link 替代 index 作为 key，避免重渲染 */}
        {tools.map((tool) => (
          <ToolCard
            key={tool.link}
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