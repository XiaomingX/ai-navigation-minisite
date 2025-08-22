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
    title: "GitHub",
    description: "全球最大的代码托管平台，开发者可在此协作开发、分享开源项目。",
    tag: "编程开发",
    link: "https://www.github.com"
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
    icon: "https://icon.jobleap4u.com/api/fav/?url=devex.com",
    title: "Devex",
    description: "国际发展领域的求职平台，专注非营利、政府及国际组织的职位发布和招聘服务。",
    tag: "国际发展招聘",
    link: "https://www.devex.com/jobs/search"
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
    icon: "https://icon.jobleap4u.com/api/fav/?url=dice.com",
    title: "Dice",
    description: "专注于IT和技术岗位的招聘平台，为软件开发人员和技术专家提供丰富职位选择。",
    tag: "技术招聘",
    link: "https://www.dice.com"
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
    icon: "https://icon.jobleap4u.com/api/fav/?url=naukrigulf.com",
    title: "Naukrigulf",
    description: "中东地区领先的招聘网站，覆盖海湾国家多个行业和职位，适合多领域求职者。",
    tag: "中东招聘",
    link: "https://www.naukrigulf.com"
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
    icon: "https://icon.jobleap4u.com/api/fav/?url=monstergulf.com",
    title: "Monster Gulf",
    description: "Monster国际招聘的中东专版，涵盖多个行业职位，支持简历上传及职位匹配。",
    tag: "中东招聘",
    link: "https://www.monstergulf.com"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=superjob.ru",
    title: "SuperJob",
    description: "知名的俄罗斯招聘平台，提供大量职位信息，功能包括职位匹配与简历制作。",
    tag: "俄罗斯招聘",
    link: "https://www.superjob.ru"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=career.ru",
    title: "Career.ru",
    description: "面向应届毕业生和年轻求职者的招聘网站，提供培训和实习机会。",
    tag: "毕业生招聘",
    link: "https://career.ru"
  },
  {
    icon: "https://icon.jobleap4u.com/api/fav/?url=sinojobs.com",
    title: "SinoJobs",
    description: "专注中俄人才交流和招聘的专业平台，聚焦中文人才在俄罗斯的职位机会。",
    tag: "中俄招聘",
    link: "https://www.sinojobs.com"
  }  
]

export default function Page() {
  return (
    <div className="container py-8 mx-auto">
      <h1 className="text-2xl font-bold mb-6">全球招聘网站</h1>
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

