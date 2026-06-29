<script setup lang="ts">
defineProps<{
  title: string
  description: string
  eyebrow?: string
}>()
</script>

<template>
  <section class="hero-gradient noise-mask relative overflow-hidden">
    <div class="site-container section-shell relative">
      <div class="max-w-4xl py-10">
        <p
          v-if="eyebrow"
          class="mb-5 inline-flex rounded-full border border-sky-200 bg-white/85 px-4 py-1 text-sm text-indigo-600"
        >
          {{ eyebrow }}
        </p>
        <h1 class="title-xl">
          {{ title }}
        </h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>


