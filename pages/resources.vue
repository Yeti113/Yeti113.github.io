<script setup lang="ts">
import { company, resources } from '~/data/site'

useSeoMeta({
  title: '资源中心',
  description: `${company.shortName}提供 AI 趋势白皮书、案例集、渠道手册与视频教程等资料。`
})

const categories = ['全部', '白皮书', '案例集', '视频教程', '工具包']
const activeCategory = ref('全部')

const filteredResources = computed(() => {
  if (activeCategory.value === '全部') {
    return resources
  }

  return resources.filter((item) => item.category === activeCategory.value)
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Resources"
      title="资源中心"
      description="把白皮书、案例、合作手册和培训内容沉淀为可复用资产，帮助客户和合作伙伴更快理解 AI 增长。"
    />

    <section class="section-shell">
      <div class="site-container">
        <div class="grid gap-8 lg:grid-cols-[0.28fr_0.72fr]">
          <div class="glass-panel p-6">
            <h2 class="text-xl font-semibold text-slate-900">
              资料分类
            </h2>
            <div class="mt-6 space-y-3">
              <button
                v-for="category in categories"
                :key="category"
                type="button"
                class="w-full rounded-2xl px-4 py-3 text-left text-sm transition"
                :class="
                  activeCategory === category
                    ? 'bg-cyan-50 text-cyan-700'
                    : 'bg-white text-slate-600 hover:bg-slate-50'
                "
                @click="activeCategory = category"
              >
                {{ category }}
              </button>
            </div>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <article
              v-for="resource in filteredResources"
              :key="resource.title"
              class="glass-panel h-full p-6"
            >
              <div class="flex flex-wrap items-center gap-3">
                <span class="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs text-cyan-700">
                  {{ resource.category }}
                </span>
                <span class="text-xs text-slate-500">
                  {{ resource.type }} · {{ resource.size }}
                </span>
              </div>
              <h3 class="mt-4 text-xl font-semibold text-slate-900">
                {{ resource.title }}
              </h3>
              <p class="text-muted mt-4">
                {{ resource.description }}
              </p>
              <div class="mt-6 flex items-center justify-between">
                <span class="text-sm text-slate-500">{{ resource.downloads }} 次下载</span>
                <button type="button" class="btn-secondary px-4 py-2 text-xs">
                  下载资料
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell bg-sky-50/70">
      <div class="site-container">
        <div class="mx-auto max-w-4xl text-center">
          <SectionHeading
            eyebrow="更多帮助"
            title="需要更具体的资料或培训支持？"
            description="可以直接预约咨询，我们会根据你的行业和业务阶段推荐更合适的资料包或演示方案。"
            center
          />
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <NuxtLink to="/support" class="btn-primary">
              预约咨询
            </NuxtLink>
            <NuxtLink to="/solutions" class="btn-secondary">
              查看方案
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
