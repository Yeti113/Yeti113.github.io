<script setup lang="ts">
import { company, navItems, products } from '~/data/site'

const year = new Date().getFullYear()

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="border-t border-slate-200 bg-[#f4f7ff]">
    <div class="site-container py-16">
      <div class="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 text-lg font-extrabold text-white">
              元
            </div>
            <div>
              <h3 class="text-xl font-bold text-slate-900">
                {{ company.shortName }}
              </h3>
              <p class="text-sm text-slate-500">
                {{ company.slogan }}
              </p>
            </div>
          </div>
          <p class="mt-5 max-w-md text-sm leading-7 text-slate-600">
            {{ company.description }}
          </p>
          <div class="mt-6 space-y-2 text-sm text-slate-600">
            <p>{{ company.phone }}</p>
            <p>{{ company.email }}</p>
            <p>{{ company.address }}</p>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            快速链接
          </h4>
          <div class="mt-5 space-y-3">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="block text-sm text-slate-600 hover:text-indigo-600"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            产品体系
          </h4>
          <div class="mt-5 space-y-3">
            <p v-for="product in products" :key="product.name" class="text-sm text-slate-600">
              {{ product.name }}
            </p>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            联系方式
          </h4>
          <div class="mt-5 space-y-3 text-sm text-slate-600">
            <p>服务时间：{{ company.serviceTime }}</p>
            <p>支持方式：电话 / 邮件 / 项目群</p>
            <p>合作咨询：预约诊断后 24 小时内响应</p>
          </div>

          <button type="button" class="btn-secondary mt-6" @click="backToTop">
            返回顶部
          </button>
        </div>
      </div>

      <div class="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
        <p>© {{ year }} {{ company.name }} 版权所有</p>
        <p>Node.js + NuxtJS + TailwindCSS 驱动的 AI 科技官网</p>
      </div>
    </div>
  </footer>
</template>


