<script setup lang="ts">
defineProps<{
  name: string
  industry: string
  intro: string
  metrics: Array<{ label: string; value: string }>
  tags: string[]
}>()
</script>

<template>
  <article class="glass-panel h-full p-6">
    <div class="flex items-center justify-between gap-4">
      <div>
        <p class="text-xs uppercase tracking-[0.25em] text-cyan-300">
          {{ industry }}
        </p>
        <h3 class="mt-2 text-xl font-semibold text-slate-900">
          {{ name }}
        </h3>
      </div>
      <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-lg font-bold text-white">
        {{ name.slice(0, 1) }}
      </div>
    </div>

    <p class="text-muted mt-5 min-h-[84px]">
      {{ intro }}
    </p>

    <div class="mt-6 grid gap-3 sm:grid-cols-3">
      <div v-for="metric in metrics" :key="metric.label" class="rounded-2xl border border-slate-200/80 bg-white/80 p-4">
        <div class="text-lg font-bold text-slate-900">
          {{ metric.value }}
        </div>
        <div class="mt-2 text-xs text-slate-500">
          {{ metric.label }}
        </div>
      </div>
    </div>

    <div class="mt-5 flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-700"
      >
        {{ tag }}
      </span>
    </div>
  </article>
</template>


