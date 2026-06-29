<script setup lang="ts">
import { caseStudies, company } from '~/data/site'

useSeoMeta({
  title: '成功案例',
  description: `${company.shortName}服务于家居建材、工业制造、本地生活服务等行业的 AI 增长案例。`
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Cases"
      title="从曝光到转化，案例证明方案有效"
      description="聚焦家居建材、工业制造与本地服务行业，通过 AI 搜索占位、智能体承接与站点转化闭环提升咨询和成交效率。"
    />

    <section class="section-shell">
      <div class="site-container">
        <SectionHeading
          eyebrow="案例矩阵"
          title="典型行业项目展示"
          description="采用浅色卡片和蓝色强调色，保留数据展示能力，同时更贴近参考图的整体明亮气质。"
          center
        />
        <div class="mt-12 grid gap-6 xl:grid-cols-3">
          <CaseCard
            v-for="(item, index) in [...caseStudies, ...caseStudies]"
            :key="`${item.name}-${index}`"
            :name="item.name"
            :industry="item.industry"
            :intro="item.intro"
            :metrics="item.metrics"
            :tags="item.tags"
          />
        </div>
      </div>
    </section>

    <section class="section-shell bg-sky-50/70">
      <div class="site-container">
        <div class="glass-panel mx-auto max-w-4xl p-8 text-center sm:p-10">
          <p class="text-sm text-indigo-600">成为下一个成功案例</p>
          <h2 class="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            让 AI 帮你提升品牌可见度和线索质量
          </h2>
          <p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            无论是本地门店、区域连锁还是工业制造企业，都可以从一次定制诊断开始，找到更适合自己的 AI 增长路径。
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <NuxtLink to="/support" class="btn-primary">
              预约诊断
            </NuxtLink>
            <NuxtLink to="/solutions" class="btn-secondary">
              了解方案
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
