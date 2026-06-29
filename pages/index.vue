<script setup lang="ts">
import {
  caseStudies,
  company,
  heroStats,
  products,
  resources,
  solutionSteps,
  testimonials,
  valuePoints
} from '~/data/site'

useSeoMeta({
  title: '首页',
  description: company.seoDescription
})

const activeProductIndex = ref(0)
const activeProduct = computed(() => products[activeProductIndex.value])
</script>

<template>
  <div>
    <section class="hero-gradient noise-mask relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.12),transparent_16%),radial-gradient(circle_at_left,rgba(14,165,233,0.12),transparent_22%)]" />
      <div class="site-container relative section-shell">
        <div class="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <RevealBlock>
            <div class="max-w-3xl py-10">
              <p class="mb-5 inline-flex rounded-full border border-sky-200 bg-white/90 px-4 py-1 text-sm text-indigo-600">
                GEO + 智能体 + AI 建站一体化
              </p>
              <h1 class="title-xl">
                {{ company.shortName }}用 AI 打通
                <span class="text-gradient">曝光、转化与交付</span>
              </h1>
              <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                {{ company.description }}
              </p>
              <div class="mt-8 flex flex-wrap gap-4">
                <NuxtLink to="/support" class="btn-primary">
                  预约免费诊断
                </NuxtLink>
                <NuxtLink to="/solutions" class="btn-secondary">
                  查看解决方案
                </NuxtLink>
              </div>
              <div class="mt-10 flex flex-wrap gap-3">
                <span
                  v-for="point in valuePoints"
                  :key="point.title"
                  class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
                >
                  {{ point.title }}
                </span>
              </div>
            </div>
          </RevealBlock>

          <RevealBlock :delay="0.12">
            <div class="glass-panel relative overflow-hidden p-6 lg:p-8">
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
              <div class="relative">
                <p class="text-sm font-medium text-indigo-600">AI 增长仪表盘</p>
                <h2 class="mt-3 text-3xl font-bold text-slate-900">
                  从被 AI 发现到被 AI 成交
                </h2>
                <div class="mt-8 grid gap-4 sm:grid-cols-2">
                  <div class="rounded-2xl border border-slate-200 bg-white p-5">
                    <p class="text-sm text-slate-500">核心产品</p>
                    <p class="mt-3 text-xl font-semibold text-slate-900">GEO / 智能体 / AI 建站</p>
                  </div>
                  <div class="rounded-2xl border border-slate-200 bg-white p-5">
                    <p class="text-sm text-slate-500">聚焦行业</p>
                    <p class="mt-3 text-xl font-semibold text-slate-900">家居建材 / 工业制造 / 本地服务</p>
                  </div>
                  <div class="rounded-2xl border border-slate-200 bg-white p-5">
                    <p class="text-sm text-slate-500">交付模式</p>
                    <p class="mt-3 text-xl font-semibold text-slate-900">标准化 SaaS + 定制化项目</p>
                  </div>
                  <div class="rounded-2xl border border-slate-200 bg-white p-5">
                    <p class="text-sm text-slate-500">效果保障</p>
                    <p class="mt-3 text-xl font-semibold text-slate-900">数据复盘 + 服务兜底机制</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>

        <div class="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <RevealBlock
            v-for="(stat, index) in heroStats"
            :key="stat.label"
            :delay="index * 0.08"
          >
            <StatCounter v-bind="stat" />
          </RevealBlock>
        </div>
      </div>
    </section>

    <section class="section-shell">
      <div class="site-container">
        <RevealBlock>
          <SectionHeading
            eyebrow="产品矩阵"
            title="三位一体 AI 增长产品体系"
            description="围绕搜索曝光、线索承接和数字基建三个层次，帮助企业快速建立 AI 时代的新入口。"
            center
          />
        </RevealBlock>

        <div class="mt-12 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div class="grid gap-6 md:grid-cols-2">
            <RevealBlock
              v-for="(product, index) in products"
              :key="product.name"
              :delay="index * 0.08"
            >
              <ProductCard
                v-bind="product"
                :active="index === activeProductIndex"
                @click="activeProductIndex = index"
              />
            </RevealBlock>
          </div>

          <RevealBlock :delay="0.16">
            <div class="glass-panel sticky top-28 p-7">
              <p class="text-sm text-indigo-600">当前推荐方案</p>
              <h3 class="mt-3 text-3xl font-bold text-slate-900">
                {{ activeProduct.name }}
              </h3>
              <p class="mt-2 text-base text-slate-600">
                {{ activeProduct.subtitle }}
              </p>
              <p class="mt-6 text-sm text-slate-500">方案亮点</p>
              <p class="mt-2 text-lg font-semibold text-slate-900">
                {{ activeProduct.highlight }}
              </p>
              <p class="text-muted mt-6">
                {{ activeProduct.description }}
              </p>
              <div class="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
                <p class="text-sm text-slate-600">参考价格</p>
                <p class="mt-2 text-2xl font-bold text-slate-900">
                  {{ activeProduct.price }}
                </p>
              </div>
              <ul class="mt-6 space-y-3 text-sm text-slate-600">
                <li v-for="detail in activeProduct.details" :key="detail" class="flex gap-3">
                  <span class="mt-1.5 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{{ detail }}</span>
                </li>
              </ul>
              <NuxtLink to="/support" class="btn-primary mt-8 w-full">
                获取专属方案
              </NuxtLink>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>

    <section class="section-shell bg-sky-50/70">
      <div class="site-container">
        <RevealBlock>
          <SectionHeading
            eyebrow="交付路径"
            title="四步搭建 AI 增长闭环"
            description="从诊断、知识建模到搜索占位与转化承接，帮助企业把 AI 能力落到真实业务上。"
            center
          />
        </RevealBlock>
        <div class="mt-12 grid gap-6 lg:grid-cols-4">
          <RevealBlock
            v-for="(step, index) in solutionSteps"
            :key="step.title"
            :delay="index * 0.08"
          >
            <div class="glass-panel h-full p-6">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-lg font-bold text-white">
                {{ index + 1 }}
              </div>
              <h3 class="mt-5 text-xl font-semibold text-slate-900">
                {{ step.title }}
              </h3>
              <p class="text-muted mt-4">
                {{ step.description }}
              </p>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>

    <section class="section-shell">
      <div class="site-container">
        <RevealBlock>
          <SectionHeading
            eyebrow="成功案例"
            title="典型行业落地案例"
            description="把案例数据、行业标签和价值结果集中展示，整体观感更贴近浅色科技风。"
            center
          />
        </RevealBlock>
        <RevealBlock :delay="0.08" class="mt-12">
          <Carousel :items="caseStudies">
            <template #default="{ item }">
              <CaseCard
                :name="item.name"
                :industry="item.industry"
                :intro="item.intro"
                :metrics="item.metrics"
                :tags="item.tags"
              />
            </template>
          </Carousel>
        </RevealBlock>
      </div>
    </section>

    <section class="section-shell bg-sky-50/70">
      <div class="site-container">
        <RevealBlock>
          <SectionHeading
            eyebrow="客户声音"
            title="来自真实业务场景的反馈"
            description="在浅色底上保留信息层次和科技质感，兼顾可读性与页面通透感。"
            center
          />
        </RevealBlock>
        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          <RevealBlock
            v-for="(item, index) in testimonials"
            :key="item.author"
            :delay="index * 0.08"
          >
            <div class="glass-panel h-full p-6">
              <p class="text-lg leading-8 text-slate-700">
                “{{ item.quote }}”
              </p>
              <div class="mt-6 border-t border-slate-200 pt-5">
                <p class="font-semibold text-slate-900">
                  {{ item.author }}
                </p>
                <p class="text-sm text-slate-500">
                  {{ item.role }}
                </p>
              </div>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>

    <section class="section-shell">
      <div class="site-container">
        <div class="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <RevealBlock>
            <SectionHeading
              eyebrow="资源中心"
              title="精选资料助力团队快速理解 AI 增长"
              description="从趋势白皮书到渠道手册，把潜在客户与合作伙伴需要的资料沉淀到同一个入口。"
            />
            <div class="mt-8 space-y-4">
              <div
                v-for="resource in resources.slice(0, 3)"
                :key="resource.title"
                class="glass-panel p-5"
              >
                <div class="flex flex-wrap items-center gap-3">
                  <span class="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs text-cyan-700">
                    {{ resource.category }}
                  </span>
                  <span class="text-xs text-slate-500">
                    {{ resource.type }} · {{ resource.size }} · {{ resource.downloads }} 次下载
                  </span>
                </div>
                <h3 class="mt-3 text-xl font-semibold text-slate-900">
                  {{ resource.title }}
                </h3>
                <p class="text-muted mt-3">
                  {{ resource.description }}
                </p>
              </div>
            </div>
          </RevealBlock>

          <RevealBlock :delay="0.12">
            <div class="hero-gradient noise-mask relative overflow-hidden rounded-[2rem] border border-sky-200 p-8 sm:p-10">
              <div class="relative">
                <p class="text-sm text-indigo-600">立即咨询</p>
                <h2 class="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                  预约一次免费的 AI 增长诊断
                </h2>
                <p class="mt-5 max-w-xl text-base leading-8 text-slate-600">
                  我们会结合你的行业、区域、产品结构与预算，给出更适合的 GEO、智能体和建站组合建议。
                </p>
                <div class="mt-8 flex flex-wrap gap-4">
                  <NuxtLink to="/support" class="btn-primary">
                    立即预约
                  </NuxtLink>
                  <a :href="`tel:${company.phone}`" class="btn-secondary">
                    电话咨询
                  </a>
                </div>
                <div class="mt-8 grid gap-4 sm:grid-cols-2">
                  <div class="rounded-2xl border border-slate-200 bg-white/85 p-5">
                    <p class="text-sm text-slate-600">服务电话</p>
                    <p class="mt-2 text-xl font-semibold text-slate-900">
                      {{ company.phone }}
                    </p>
                  </div>
                  <div class="rounded-2xl border border-slate-200 bg-white/85 p-5">
                    <p class="text-sm text-slate-600">响应机制</p>
                    <p class="mt-2 text-xl font-semibold text-slate-900">
                      24 小时内反馈
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  </div>
</template>
