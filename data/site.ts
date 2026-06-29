export type NavItem = {
  label: string
  to: string
}

export const company = {
  name: '深圳市元构场智能科技有限公司',
  shortName: '元构场',
  slogan: '用 AI 重构您的生意入口',
  description:
    '为华南地区中小 B 端企业提供品效合一的 AI 数字化升级服务，聚焦 GEO 生成式引擎优化、私有化定制智能体与企业官网 + 小程序 AI 建站。',
  phone: '13829979319',
  email: 'service@yuangouchang.ai',
  address: '深圳市龙岗区龙岗街道南联社区龙谷路 16 号远洋广场 13 栋 1906-2',
  serviceTime: '周一至周六 09:00 - 18:30',
  seoDescription:
    '元构场为家居建材、工业制造、本地生活服务企业提供从被 AI 发现到被 AI 成交的全链路增长方案。'
}

export const navItems: NavItem[] = [
  { label: '首页', to: '/' },
  { label: '解决方案', to: '/solutions' },
  { label: '成功案例', to: '/cases' },
  { label: '招商合作', to: '/partnership' },
  { label: '资源中心', to: '/resources' },
  { label: '关于我们', to: '/about' },
  { label: '客户服务', to: '/support' }
]

export const heroStats = [
  { value: 200, suffix: '+', label: '本地地域关键词覆盖' },
  { value: 500, suffix: '+', label: '全案长尾词维护能力' },
  { value: 7, suffix: 'x24', label: '智能客服服务时长' },
  { value: 3, suffix: '大', label: '核心 AI 增长产品矩阵' }
]

export const valuePoints = [
  {
    title: 'AI 搜索占位',
    description: '让品牌内容在豆包、DeepSeek、Kimi、通义千问等 AI 搜索推荐场景获得优先曝光。'
  },
  {
    title: '智能体承接转化',
    description: '通过专属知识库和业务流程编排，把咨询、客服、培训、销售问答沉淀到同一个入口。'
  },
  {
    title: '轻量数字基建',
    description: '用官网、小程序和在线智能体快速搭建展示、获客、接待与转化闭环。'
  }
]

export const industries = [
  '家居建材',
  '工业制造',
  '本地生活服务',
  '财税与教培',
  '跨境与出海预备企业'
]

export const products = [
  {
    name: 'SaaS GEO 标准版',
    subtitle: '本地商家 / 个体户专属',
    price: '7200 元 / 年',
    icon: 'geo',
    highlight: '200 组本地地域关键词',
    description:
      '聚焦地域词 + 品类词优化，快速在主流 AI 平台建立本地搜索结果前排露出，适合门店获客与区域性品牌扩张。',
    tags: ['地域词优化', '知识库搭建', '季度排名报表', '7 天试用'],
    details: [
      '轻量化知识库搭建与月度内容迭代',
      '面向本地商家、财税、教培等门店型企业',
      '帮助客户在 AI 搜索场景中被精准发现'
    ]
  },
  {
    name: 'SaaS GEO 全案版',
    subtitle: '区域连锁 / 品牌制造商',
    price: '14800 元 / 年',
    icon: 'radar',
    highlight: '500+ 组品牌与行业长尾词',
    description:
      '覆盖品牌词、地域词、行业通用词，面向家居品牌、灯饰厂商、中小型工业设备制造商抢占全国性行业流量。',
    tags: ['品牌词占位', '多平台维护', '月度复盘', '文案自动生成'],
    details: [
      '支持全 AI 平台排名维护与数据分析',
      '适合区域连锁、品牌商和全国业务扩张阶段',
      '提供效果兜底与专属服务群跟进'
    ]
  },
  {
    name: '私有化定制智能体',
    subtitle: '私有部署 / 云端部署',
    price: '31000 元起 + 6900 元 / 年运维',
    icon: 'bot',
    highlight: '支持 ERP / CRM / 进销存接入',
    description:
      '根据企业产品手册、售后文档与业务流程构建专属知识库，沉淀内部问答、员工培训和 7x24 智能客服能力。',
    tags: ['知识库定制', '模型微调', '业务集成', '数字员工'],
    details: [
      '支持本地服务器或专有云环境部署',
      '连接内部系统实现自动化服务协同',
      '围绕咨询、售后与培训场景沉淀长期资产'
    ]
  },
  {
    name: 'AI 官网 + 小程序建站',
    subtitle: '官网与小程序一体化搭建',
    price: '4800 元起 / 套',
    icon: 'build',
    highlight: '展示、获客、接待一体闭环',
    description:
      '区别于传统建站，内置 AI 内容生成、多语种支持与在线问答智能体，可无缝集成 GEO 优化引擎。',
    tags: ['多终端适配', '多语种', '智能问答', '快速上线'],
    details: [
      '支持官网、小程序与营销页统一管理',
      '适合品牌焕新、业务升级与出海预备企业',
      '兼顾视觉体验、SEO/GEO 能力与扩展性'
    ]
  }
]

export const solutionSteps = [
  {
    title: 'AI 诊断与定位',
    description: '结合行业、区域、产品和竞品，输出关键词结构与数字化升级方向。'
  },
  {
    title: '知识库与内容建模',
    description: '搭建结构化知识库，沉淀产品资料、案例、FAQ、流程与证据素材。'
  },
  {
    title: '搜索占位与转化承接',
    description: '推进 GEO 排名优化，并把流量导入官网、小程序和智能体接待入口。'
  },
  {
    title: '复盘迭代与扩张',
    description: '按月追踪排名、咨询、线索和成交质量，持续优化模型与投放策略。'
  }
]

export const caseStudies = [
  {
    name: '华南某灯饰品牌',
    industry: '家居建材',
    intro: '围绕品牌词、招商词和工程词完成 GEO 全案布局，提升 AI 搜索场景曝光与渠道线索。',
    metrics: [
      { label: '核心词进入前排', value: '58 组' },
      { label: '月均咨询量', value: '3000+' },
      { label: '招商转化提升', value: '60%' }
    ],
    tags: ['GEO 全案版', '品牌招商', '线索增长']
  },
  {
    name: '深圳某财税服务机构',
    industry: '本地生活服务',
    intro: '以地域词优化带动本地获客，并用在线智能体自动承接企业咨询与流程答疑。',
    metrics: [
      { label: '地域词覆盖', value: '200+' },
      { label: '7 日试用转化', value: '35%' },
      { label: '人工客服负担下降', value: '45%' }
    ],
    tags: ['标准版', '智能客服', '本地搜索']
  },
  {
    name: '珠三角工业设备厂商',
    industry: '工业制造',
    intro: '通过行业长尾词与产品知识库建设，在复杂产品咨询场景中实现 AI 精准推荐与售前答疑。',
    metrics: [
      { label: 'AI 平台曝光提升', value: '3.2x' },
      { label: '有效商机率', value: '80%' },
      { label: '月均表单量', value: '107+' }
    ],
    tags: ['工业制造', '知识库', '售前智能体']
  }
]

export const partnershipBenefits = [
  {
    title: '市场红利',
    description: '承接 AI 营销、企业服务和数字化升级需求增长，抢占城市和产业带入口。'
  },
  {
    title: '高返佣机制',
    description: '提供底价供货、成交分润与定制项目协同支持，兼顾现金流和长期收益。'
  },
  {
    title: '品牌支持',
    description: '提供标准化产品物料、销售话术、方案模板、案例包装和交付流程支持。'
  },
  {
    title: '全程赋能',
    description: '覆盖培训、售前、演示、技术兜底和复盘机制，降低代理商试错成本。'
  }
]

export const partnershipPlans = [
  {
    name: '金牌代理',
    deposit: '5 万元',
    rebate: '成交折扣 8 折',
    share: '分润比例 15%',
    features: ['区域保护政策', '标准产品培训', '营销物料支持', '基础项目陪跑']
  },
  {
    name: '钻石代理',
    deposit: '15 万元',
    rebate: '成交折扣 7 折',
    share: '分润比例 25%',
    featured: true,
    features: ['优先线索支持', '专项培训体系', '方案联合提案', '标杆案例共建']
  },
  {
    name: '战略伙伴',
    deposit: '50 万元',
    rebate: '成交折扣 6 折',
    share: '分润比例 40%',
    features: ['全系产品授权', '定制项目共创', '联合品牌活动', '城市级生态合作']
  }
]

export const partnershipProcess = [
  '咨询了解',
  '资质审核',
  '签约洽谈',
  '培训赋能',
  '正式运营'
]

export const resources = [
  {
    title: 'AI 趋势年度白皮书',
    category: '白皮书',
    type: 'PDF',
    size: '5.8MB',
    downloads: '1,234',
    description: '洞察企业在 AI 搜索、智能体、AI 建站方向的升级机会与投入优先级。'
  },
  {
    title: 'GEO 实战案例合集',
    category: '案例集',
    type: 'PDF',
    size: '4.1MB',
    downloads: '987',
    description: '收录家居建材、工业制造和本地生活服务行业的典型增长案例。'
  },
  {
    title: '渠道合作手册',
    category: '工具包',
    type: 'PDF',
    size: '2.2MB',
    downloads: '1,567',
    description: '帮助代理商快速了解产品结构、目标客群、销售话术与协同流程。'
  },
  {
    title: 'AI 营销入门视频课',
    category: '视频教程',
    type: 'VIDEO',
    size: '12 节',
    downloads: '3,456',
    description: '面向企业主和销售团队，建立 GEO、智能体与站点转化的认知框架。'
  }
]

export const timeline = [
  {
    year: '2022',
    title: '团队组建',
    description: '启动 AI 搜索与知识库方向探索，形成技术与商务协同团队。'
  },
  {
    year: '2023',
    title: '产品模型验证',
    description: '打磨 GEO 优化、知识库问答和 AI 建站能力，验证多个行业试点场景。'
  },
  {
    year: '2024',
    title: '三位一体产品成型',
    description: '形成 GEO 搜索占位 + 智能体转化 + 数字基建闭环，切入华南中小 B 端市场。'
  },
  {
    year: '2025',
    title: '渠道扩张',
    description: '面向大湾区与全国重点城市招募合作伙伴，拓展多行业解决方案。'
  }
]

export const teamMembers = [
  {
    name: '顾问团队',
    role: '行业策略',
    description: '聚焦 AI 营销、数字化咨询与中小企业增长策略，负责整体方案设计。'
  },
  {
    name: '技术团队',
    role: '算法与工程',
    description: '负责知识库建模、生成式引擎优化、智能体编排与官网小程序开发。'
  },
  {
    name: '交付团队',
    role: '项目实施',
    description: '覆盖需求调研、内容建模、部署上线、数据复盘与客户成功管理。'
  },
  {
    name: '渠道团队',
    role: '合作生态',
    description: '支持商协会、财税顾问、园区服务机构与代理伙伴完成市场开拓。'
  }
]

export const honors = [
  '规划申请深度合成算法备案',
  '筹备双软认证与国家高新技术企业申报',
  '计划加入深圳软件行业与人工智能相关协会',
  '争取华为云、腾讯云、阿里云生态合作机会'
]

export const testimonials = [
  {
    quote: '从 AI 搜索曝光到官网承接，再到智能体答疑，整个链路终于打通了。',
    author: '家居建材客户',
    role: '市场负责人'
  },
  {
    quote: '以前靠人工回复很难跟上咨询量，现在线索筛选效率明显提升。',
    author: '本地财税机构',
    role: '业务合伙人'
  },
  {
    quote: '工业品咨询复杂，但知识库智能体能把参数和场景讲清楚，成交更稳。',
    author: '工业设备厂商',
    role: '销售总监'
  }
]

export const faqs = [
  {
    question: 'GEO 和传统 SEO 有什么区别？',
    answer:
      'GEO 更强调内容在生成式搜索与推荐场景中的结构化可理解性，关注 AI 平台回答引用、推荐占位和知识图谱可见度。'
  },
  {
    question: '智能体能否接入企业现有系统？',
    answer:
      '可以，元构场支持按需对接 ERP、CRM、进销存和客服系统，构建适配企业业务流程的私有化智能体。'
  },
  {
    question: '官网和小程序是否可以一起做？',
    answer:
      '可以，AI 建站方案支持官网与小程序一体化交付，并与 GEO 与在线智能体形成闭环。'
  }
]

export const supportCards = [
  {
    title: '免费 AI 诊断',
    description: '输出企业当前 AI 搜索曝光、内容结构和转化入口问题清单。',
    action: '预约诊断'
  },
  {
    title: '方案咨询',
    description: '结合行业与预算，定制 GEO、智能体和 AI 建站组合方案。',
    action: '了解方案'
  },
  {
    title: '交付支持',
    description: '项目启动、知识库整理、培训上线、效果复盘全流程陪跑。',
    action: '联系顾问'
  }
]
