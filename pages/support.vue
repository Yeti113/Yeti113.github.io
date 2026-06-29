<script setup lang="ts">
import { company, faqs, supportCards } from '~/data/site'

useSeoMeta({
  title: '客户服务',
  description: `${company.shortName}提供免费 AI 诊断、方案咨询、项目支持与常见问题解答。`
})

const form = reactive({
  name: '',
  phone: '',
  company: '',
  industry: '',
  demand: ''
})

const submitMessage = ref('')

const submitForm = () => {
  submitMessage.value = '表单演示已提交，下一步可以继续接入企业微信、邮件通知或 CRM 系统。'
}
</script>

<template>
  <div>
    <PageHero
      eyebrow="Support"
      title="客户服务"
      description="无论你需要免费诊断、解决方案咨询还是交付支持，元构场都可以围绕你的行业和业务阶段给出建议。"
    />

    <section class="section-shell">
      <div class="site-container">
        <div class="grid gap-6 xl:grid-cols-3">
          <div v-for="item in supportCards" :key="item.title" class="glass-panel h-full p-6">
            <h3 class="text-xl font-semibold text-slate-900">
              {{ item.title }}
            </h3>
            <p class="text-muted mt-4">
              {{ item.description }}
            </p>
            <button type="button" class="btn-secondary mt-6">
              {{ item.action }}
            </button>
          </div>
        </div>

        <div class="mt-12 grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div class="glass-panel p-8">
            <SectionHeading
              eyebrow="预约咨询"
              title="留下需求，我们会尽快联系你"
              description="当前是一版静态线索表单，适合先做展示，后续可继续接入真实线索流转。"
            />

            <form class="mt-8 space-y-4" @submit.prevent="submitForm">
              <div class="grid gap-4 sm:grid-cols-2">
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="联系人"
                  class="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-400/60"
                >
                <input
                  v-model="form.phone"
                  type="text"
                  placeholder="联系电话"
                  class="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-400/60"
                >
              </div>
              <div class="grid gap-4 sm:grid-cols-2">
                <input
                  v-model="form.company"
                  type="text"
                  placeholder="公司名称"
                  class="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-400/60"
                >
                <input
                  v-model="form.industry"
                  type="text"
                  placeholder="所属行业"
                  class="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-400/60"
                >
              </div>
              <textarea
                v-model="form.demand"
                rows="5"
                placeholder="请描述你的业务现状、目标和关注问题"
                class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-400/60"
              />
              <button type="submit" class="btn-primary">
                提交需求
              </button>
              <p v-if="submitMessage" class="text-sm text-emerald-600">
                {{ submitMessage }}
              </p>
            </form>
          </div>

          <div class="space-y-6">
            <div class="glass-panel p-8">
              <p class="text-sm text-indigo-600">直接联系</p>
              <div class="mt-6 space-y-4 text-base text-slate-600">
                <p>电话：{{ company.phone }}</p>
                <p>邮箱：{{ company.email }}</p>
                <p>地址：{{ company.address }}</p>
                <p>服务时间：{{ company.serviceTime }}</p>
              </div>
            </div>

            <div class="glass-panel p-8">
              <SectionHeading
                eyebrow="FAQ"
                title="常见问题"
                description="帮助访客快速建立对产品与交付方式的基本认知。"
              />
              <div class="mt-6 space-y-4">
                <div
                  v-for="item in faqs"
                  :key="item.question"
                  class="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <h3 class="text-lg font-semibold text-slate-900">
                    {{ item.question }}
                  </h3>
                  <p class="mt-3 text-sm leading-7 text-slate-600">
                    {{ item.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
