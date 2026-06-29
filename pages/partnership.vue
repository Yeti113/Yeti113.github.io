<script setup lang="ts">
import { company, partnershipBenefits, partnershipPlans, partnershipProcess } from '~/data/site'

useSeoMeta({
  title: '招商合作',
  description: `${company.shortName}招募行业代理与生态合作伙伴，提供产品、培训、方案和交付支持。`
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Partnership"
      title="共享 AI 营销市场红利，共创增长未来"
      description="面向建材商会、财税协会、教培联盟、产业园与企业服务顾问开放合作，通过标准化产品体系与技术支持快速复制成交。"
    />

    <section class="section-shell">
      <div class="site-container">
        <SectionHeading
          eyebrow="合作价值"
          title="为什么选择元构场作为合作伙伴"
          description="不仅有产品，更有面向销售与交付的完整支持体系。"
          center
        />
        <div class="mt-12 grid gap-6 lg:grid-cols-4">
          <div v-for="(benefit, index) in partnershipBenefits" :key="benefit.title" class="glass-panel h-full p-6 text-center">
            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-xl font-bold text-indigo-600">
              {{ index + 1 }}
            </div>
            <h3 class="mt-5 text-xl font-semibold text-slate-900">
              {{ benefit.title }}
            </h3>
            <p class="text-muted mt-4">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell bg-sky-50/70">
      <div class="site-container">
        <SectionHeading
          eyebrow="代理等级"
          title="适配不同发展阶段的合作方案"
          description="结合浅色科技感视觉，强化方案对比、返佣机制和合作权益表达。"
          center
        />
        <div class="mt-12 grid gap-6 xl:grid-cols-3">
          <div
            v-for="plan in partnershipPlans"
            :key="plan.name"
            class="glass-panel h-full p-7"
            :class="plan.featured ? 'border-cyan-400/40 bg-white' : ''"
          >
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-sm text-indigo-600">代理等级</p>
                <h3 class="mt-2 text-2xl font-bold text-slate-900">
                  {{ plan.name }}
                </h3>
              </div>
              <span v-if="plan.featured" class="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs text-cyan-700">
                推荐方案
              </span>
            </div>
            <div class="mt-6 grid gap-4">
              <div class="rounded-2xl border border-slate-200 bg-white p-5">
                <p class="text-sm text-slate-500">保证金</p>
                <p class="mt-2 text-2xl font-bold text-slate-900">{{ plan.deposit }}</p>
              </div>
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-2xl border border-slate-200 bg-white p-5">
                  <p class="text-sm text-slate-500">折扣</p>
                  <p class="mt-2 text-lg font-semibold text-slate-900">{{ plan.rebate }}</p>
                </div>
                <div class="rounded-2xl border border-slate-200 bg-white p-5">
                  <p class="text-sm text-slate-500">分润</p>
                  <p class="mt-2 text-lg font-semibold text-emerald-600">{{ plan.share }}</p>
                </div>
              </div>
            </div>
            <ul class="mt-6 space-y-3 text-sm text-slate-600">
              <li v-for="feature in plan.features" :key="feature" class="flex gap-3">
                <span class="mt-1.5 h-2 w-2 rounded-full bg-cyan-400" />
                <span>{{ feature }}</span>
              </li>
            </ul>
            <NuxtLink to="/support" class="btn-primary mt-8 w-full">
              申请合作
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell">
      <div class="site-container">
        <SectionHeading
          eyebrow="加入流程"
          title="从咨询到正式运营的五步路径"
          description="标准化流程帮助合作伙伴更快完成理解、签约、培训与开单。"
          center
        />
        <div class="mt-12 grid gap-6 md:grid-cols-5">
          <div v-for="(step, index) in partnershipProcess" :key="step" class="text-center">
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-xl font-bold text-white">
              {{ index + 1 }}
            </div>
            <p class="mt-4 text-base font-semibold text-slate-900">
              {{ step }}
            </p>
          </div>
        </div>

        <div class="hero-gradient mt-16 rounded-[2rem] border border-sky-200 p-8 text-center sm:p-12">
          <p class="text-sm text-indigo-600">开启财富增长通道</p>
          <h2 class="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            加入元构场合作网络，一起服务更多企业
          </h2>
          <p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            联系我们获取合作细则、产品清单、销售话术与演示资料，帮助你更快启动业务。
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <NuxtLink to="/support" class="btn-primary">
              立即申请
            </NuxtLink>
            <a :href="`tel:${company.phone}`" class="btn-secondary">
              电话咨询
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
