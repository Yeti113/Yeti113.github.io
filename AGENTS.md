# Agents

本项目是一个公司官网，最终使用nuxtjs生成的静态网页部署

## 开发环境

- 使用npm管理依赖
- 使用nodejs + nuxtjs 框架
- 使用tailwindcss框架编写样式

## 技术栈要求

NuxtJS使用Composition API

TailwindCSS使用PostCSS

VueUse最新版（用于组合式工具函数）

字体：Inter / PingFang SC（参考瑞哈希使用PingFang SC）

动画：GSAP / IntersectionObserver


## 配色方案（AI科技蓝紫调，参考瑞哈希官网风格）

/* 主色 - 科技蓝紫 */
primary:   #4F46E5  /* indigo-600 */
primary-light: #818CF8  /* indigo-400 */
secondary: #7C3AED  /* violet-600 */
accent:    #06B6D4  /* cyan-500 */

/* 辅助色 */
success:   #10B981  /* emerald-500 用于数据亮点 */
warning:   #F59E0B  /* amber-500 */

/* 中性色 */
dark:      #0F172A  /* slate-900 */
dark-bg:   #1E293B  /* slate-800 */
gray:      #64748B  /* slate-500 */
light:     #F8FAFC  /* slate-50 */

/* 渐变 */
gradient-hero: from-indigo-600 via-purple-600 to-pink-500
gradient-card: from-slate-900 to-slate-800


## 排版规范

| 元素  | 字号           | 字重           | 说明                                                               |
| ----- | -------------- | -------------- | ------------------------------------------------------------------ |
| H1    | text-5xl ~ 6xl | font-extrabold | 首页主标题，如“瑞哈希·AI全球全网全链营销”[](https://rhxsz.com/) |
| H2    | text-3xl ~ 4xl | font-bold      | 区块标题，如“四大AI营销产品体系”[](https://rhxsz.com/)           |
| H3    | text-xl ~ 2xl  | font-semibold  | 卡片标题                                                           |
| Body  | text-base ~ lg | font-normal    | 正文内容                                                           |
| Data  | text-3xl ~ 4xl | font-bold      | 数据数字展示，如“70+”“1000+”[](https://rhxsz.com/)             |
| Small | text-sm        | font-light     | 辅助文字                                                           |

## 间距与圆角

* 容器最大宽度: `max-w-7xl`
* 区块内边距: `py-16 ~ py-24`
* 卡片圆角: `rounded-2xl`
* 按钮圆角: `rounded-full`
* 数据卡片: 圆角 + 毛玻璃效果


## 组件设计要求

### AppHeader（固定导航栏）

* 滚动时透明→毛玻璃效果（backdrop-blur）
* 左侧Logo（图片或SVG）
* 导航链接: 首页、解决方案、成功案例、招商合作、资源中心、关于我们、客户服务[](https://rhxsz.com/)
* 右侧: “用户登录”按钮[](https://rhxsz.com/)
* 移动端: 汉堡菜单 + 全屏侧滑菜单[](https://rhxsz.com/)

### AppFooter

* 多列布局: 品牌介绍、快速链接、产品体系、联系方式
* 底部: 版权信息 + 社交图标
* 返回顶部按钮

### StatCounter（数字滚动组件）

* 从0计数到目标值
* 支持后缀（+、万+等）
* 使用IntersectionObserver触发

### Carousel（轮播组件）

* 支持自动播放 + 手动切换
* 左右箭头 + 底部指示点
* 平滑过渡动画

### ProductCard

* 图标（SVG）+ 标题 + 副标题 + 描述 + 标签组 + 按钮
* 悬停效果: 上浮 + 光效
* 支持active状态切换

### CaseCard

* Logo + 名称 + 行业 + 标签 + 数据指标
* 轮播中展示

## 交互与动画要求

| 交互         | 实现方式                                           |
| ------------ | -------------------------------------------------- |
| 页面切换     | Nuxt的 `<NuxtPage>` + fade过渡动画               |
| 滚动进入     | `useIntersectionObserver` + 类触发（fade-in）    |
| 数字滚动     | `useCounter` 或自定义 + IntersectionObserver     |
| 数据统计行   | 进入视口时触发数字动画[](https://rhxsz.com/)       |
| 产品卡片切换 | 点击切换active状态[](https://rhxsz.com/)           |
| 轮播         | 箭头切换 + 指示点 + 自动播放[](https://rhxsz.com/) |
| 弹窗         | 点击“了解更多”打开模态框[](https://rhxsz.com/)   |
| 汉堡菜单     | `useToggle`控制开合                              |
| 导航栏       | 滚动监听切换透明/毛玻璃                            |

## 响应式断点

| 断点 | 屏幕           | 布局调整                         |
| ---- | -------------- | -------------------------------- |
| sm   | < 640px        | 单列布局，导航折叠，产品卡片堆叠 |
| md   | 640px ~ 1024px | 2列网格，导航显示                |
| lg   | > 1024px       | 3-4列网格，完整导航，轮播展示    |
