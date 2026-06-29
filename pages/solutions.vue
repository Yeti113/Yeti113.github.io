<script setup lang="ts">
import { company, industries, products, solutionSteps } from '~/data/site'

useSeoMeta({
  title: '解决方案',
  description: `${company.shortName}面向家居建材、工业制造、本地生活服务等行业提供 GEO、智能体与 AI 建站组合方案。`
})

const selectedIndex = ref(1)
</script>

<template>
  <div>
    <PageHero
      eyebrow="Solutions"
      title="围绕行业场景打造可落地的 AI 增长方案"
      description="把 GEO 搜索占位、私有化智能体与 AI 官网小程序打通，用技术能力服务企业增长、交付和组织效率。"
    />

    <section class="section-shell">
      <div class="site-container">
        <RevealBlock>
          <SectionHeading
            eyebrow="行业聚焦"
            title="优先服务这些对增长最敏感的行业"
            description="立足深圳与大湾区，兼顾品牌制造商、区域连锁与本地生活服务企业。"
            center
          />
        </RevealBlock>
        <div class="mt-10 flex flex-wrap justify-center gap-3">
          <span
            v-for="industry in industries"
            :key="industry"
            class="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700"
          >
            {{ industry }}
          </span>
        </div>
      </div>
    </section>

    <section class="section-shell bg-sky-50/70">
      <div class="site-container">
        <RevealBlock>
          <SectionHeading
            eyebrow="产品组合"
            title="从标准化 SaaS 到高毛利定制项目"
            description="不同阶段的企业可以先做搜索占位，也可以直接打通智能体与 AI 建站闭环。"
          />
        </RevealBlock>
        <div class="mt-12 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div class="grid gap-6 md:grid-cols-2">
            <ProductCard
              v-for="(product, index) in products"
              :key="product.name"
              v-bind="product"
              :active="selectedIndex === index"
              @click="selectedIndex = index"
            />
          </div>
          <div class="glass-panel p-8">
            <p class="text-sm text-indigo-600">组合推荐</p>
            <h2 class="mt-3 text-3xl font-bold text-slate-900">
              {{ products[selectedIndex].name }}
            </h2>
            <p class="mt-4 text-base text-slate-600">
              {{ products[selectedIndex].description }}
            </p>
            <div class="mt-8 grid gap-4">
              <div class="rounded-2xl border border-slate-200 bg-white p-5">
                <p class="text-sm text-slate-500">适配客户</p>
                <p class="mt-2 font-semibold text-slate-900">
                  {{ products[selectedIndex].subtitle }}
                </p>
              </div>
              <div class="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
                <p class="text-sm text-slate-600">参考价格</p>
                <p class="mt-2 text-2xl font-bold text-slate-900">
                  {{ products[selectedIndex].price }}
                </p>
              </div>
            </div>
            <div class="mt-8">
              <p class="text-sm text-slate-500">交付能力</p>
              <ul class="mt-4 space-y-3 text-sm text-slate-600">
                <li
                  v-for="detail in products[selectedIndex].details"
                  :key="detail"
                  class="flex gap-3"
                >
                  <span class="mt-1.5 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{{ detail }}</span>
                </li>
              </ul>
            </div>
            <NuxtLink to="/support" class="btn-primary mt-8">
              获取行业方案
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell">
      <div class="site-container">
        <RevealBlock>
          <SectionHeading
            eyebrow="实施流程"
            title="项目从诊断到复盘的标准路径"
            description="在浅色背景下强化方案解释与服务理解，降低客户沟通成本。"
            center
          />
        </RevealBlock>
        <div class="mt-12 grid gap-6 lg:grid-cols-4">
          <div v-for="(step, index) in solutionSteps" :key="step.title" class="glass-panel h-full p-6">
            <div class="text-sm text-indigo-600">0{{ index + 1 }}</div>
            <h3 class="mt-4 text-xl font-semibold text-slate-900">
              {{ step.title }}
            </h3>
            <p class="text-muted mt-4">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
