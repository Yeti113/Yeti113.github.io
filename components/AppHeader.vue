<script setup lang="ts">
import { useToggle, useWindowScroll } from '@vueuse/core'
import { company, navItems } from '~/data/site'

const route = useRoute()
const [isOpen, toggleOpen] = useToggle(false)
const { y } = useWindowScroll()

const isScrolled = computed(() => y.value > 18)

watch(
  () => route.path,
  () => {
    isOpen.value = false
  }
)
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'border-b border-slate-200/80 bg-white/85 backdrop-blur-xl' : 'bg-transparent'"
  >
    <div class="site-container">
      <div class="flex h-20 items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 text-lg font-extrabold text-white">
            元
          </div>
          <div>
            <div class="text-sm font-semibold text-slate-900">
              {{ company.shortName }}
            </div>
            <div class="text-xs text-slate-500">
              AI 增长解决方案服务商
            </div>
          </div>
        </NuxtLink>

        <nav class="hidden items-center gap-7 lg:flex">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="text-sm text-slate-600 hover:text-indigo-600"
            :class="route.path === item.to ? 'text-indigo-600' : ''"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="hidden items-center gap-3 lg:flex">
          <NuxtLink to="/support" class="btn-primary text-xs">
            用户登录
          </NuxtLink>
        </div>

        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 lg:hidden"
          aria-label="切换导航"
          @click="toggleOpen()"
        >
          <span class="space-y-1.5">
            <span class="block h-0.5 w-5 bg-current" />
            <span class="block h-0.5 w-5 bg-current" />
            <span class="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>
    </div>

    <transition name="page">
      <div v-if="isOpen" class="border-t border-slate-200 bg-white/95 lg:hidden">
        <div class="site-container flex min-h-[calc(100vh-5rem)] flex-col justify-between py-8">
          <div class="space-y-4">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="block rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-700"
            >
              {{ item.label }}
            </NuxtLink>
          </div>

          <NuxtLink to="/support" class="btn-primary w-full">
            用户登录
          </NuxtLink>
        </div>
      </div>
    </transition>
  </header>
</template>


