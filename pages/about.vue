<script setup lang="ts">
import { company, honors, teamMembers, timeline } from '~/data/site'

useSeoMeta({
  title: '关于我们',
  description: `${company.shortName}专注于为中小 B 端企业提供 AI 搜索、智能体与数字基建一体化服务。`
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="About"
      title="关于元构场"
      description="元构场致力于把生成式 AI 带到真实业务场景里，让企业在搜索、咨询、交付和品牌表达上获得持续增长。"
    />

    <section class="section-shell">
      <div class="site-container">
        <div class="grid gap-8 xl:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="公司简介"
              title="让 AI 不只带来流量，更能承接业务"
              description="元构场是一家聚焦华南中小 B 端市场的 AI 数字化升级服务商，主打 GEO 搜索占位、智能体转化与轻量级数字基建三位一体模式。"
            />
            <div class="mt-8 space-y-5 text-base leading-8 text-slate-600">
              <p>
                公司立足深圳，重点服务家居建材、工业制造、本地生活服务、财税与教培等行业。我们帮助客户从“被 AI 发现”走向“被 AI 成交”，将内容、知识、场景和转化入口整合到同一套增长框架中。
              </p>
              <p>
                通过生成式引擎优化，企业的品牌内容可以在 AI 搜索与推荐场景中获得更高质量曝光；通过私有化智能体，企业可以把售前咨询、售后问答、员工培训和内部知识问答沉淀为长期资产；通过 AI 建站，企业能够快速搭建官网和小程序，形成统一的品牌展示与线索承接界面。
              </p>
            </div>
          </div>

          <div class="grid gap-6">
            <div class="glass-panel overflow-hidden p-2">
              <div class="hero-gradient flex min-h-[280px] items-end rounded-[1.5rem] p-8">
                <div>
                  <p class="text-sm text-indigo-600">成立与发展</p>
                  <p class="mt-3 text-5xl font-extrabold text-slate-900">2022</p>
                  <p class="mt-2 text-sm text-slate-600">开始组建团队并探索 AI 搜索与知识库场景</p>
                </div>
              </div>
            </div>
            <div class="glass-panel p-6">
              <p class="text-sm text-indigo-600">核心定位</p>
              <p class="mt-3 text-lg font-semibold text-slate-900">
                为华南地区中小 B 端企业提供品效合一的 AI 数字化升级服务。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell bg-sky-50/70">
      <div class="site-container">
        <SectionHeading
          eyebrow="发展历程"
          title="沿着技术与交付双线推进"
          description="以时间轴形式呈现公司能力演进和服务范围扩张。"
          center
        />
        <div class="mt-12 mx-auto max-w-4xl space-y-8">
          <div
            v-for="item in timeline"
            :key="item.year"
            class="grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:grid-cols-[120px_1fr]"
          >
            <div class="text-3xl font-extrabold text-cyan-600">
              {{ item.year }}
            </div>
            <div>
              <h3 class="text-xl font-semibold text-slate-900">
                {{ item.title }}
              </h3>
              <p class="text-muted mt-3">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell">
      <div class="site-container">
        <SectionHeading
          eyebrow="核心团队"
          title="围绕咨询、技术、交付和生态协同组建"
          description="团队结构面向中小企业增长场景设计，强调从方案到上线再到复盘的完整闭环。"
          center
        />
        <div class="mt-12 grid gap-6 xl:grid-cols-4">
          <div v-for="member in teamMembers" :key="member.name" class="glass-panel h-full p-6 text-center">
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-2xl font-bold text-white">
              {{ member.name.slice(0, 1) }}
            </div>
            <h3 class="mt-5 text-xl font-semibold text-slate-900">
              {{ member.name }}
            </h3>
            <p class="mt-2 text-sm text-cyan-700">
              {{ member.role }}
            </p>
            <p class="text-muted mt-4">
              {{ member.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell bg-sky-50/70">
      <div class="site-container">
        <SectionHeading
          eyebrow="规划与资质"
          title="构建长期可信的技术与品牌护城河"
          description="把定位书中提及的资质、荣誉和生态合作方向以更清晰的浅色卡片呈现。"
        />
        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <div v-for="item in honors" :key="item" class="glass-panel p-6">
            <p class="text-base leading-8 text-slate-700">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
