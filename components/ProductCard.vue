<script setup lang="ts">
const props = defineProps<{
  name: string
  subtitle: string
  price: string
  highlight: string
  description: string
  tags: string[]
  details: string[]
  icon: string
  active?: boolean
}>()

defineEmits<{
  click: []
}>()

const iconMap: Record<string, string> = {
  geo: 'M12 2l7 4v6c0 5-3.5 9.7-7 10-3.5-.3-7-5-7-10V6l7-4zm0 5a3 3 0 100 6 3 3 0 000-6z',
  radar: 'M12 3a9 9 0 109 9M12 7a5 5 0 105 5M12 11a1 1 0 101 1',
  bot: 'M9 3h6M10 8h4M8 6h8a3 3 0 013 3v5a3 3 0 01-3 3H8a3 3 0 01-3-3V9a3 3 0 013-3zm2 8H8m8 0h-2',
  build: 'M4 6h16M7 3v6m10-6v6M6 10h12a2 2 0 012 2v7H4v-7a2 2 0 012-2z'
}

const iconPath = computed(() => iconMap[props.icon] || iconMap.geo)
</script>

<template>
  <button
    type="button"
    class="group glass-panel h-full w-full overflow-hidden p-6 text-left transition duration-300 hover:-translate-y-1"
    :class="active ? 'border-cyan-400/40 bg-white/75 shadow-cyan-500/10' : ''"
    @click="$emit('click')"
  >
    <div class="flex items-start justify-between gap-4">
      <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20">
        <svg viewBox="0 0 24 24" fill="none" class="h-7 w-7 stroke-cyan-300" stroke-width="1.5">
          <path :d="iconPath" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <span class="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
        {{ price }}
      </span>
    </div>

    <div class="mt-6">
      <h3 class="title-md">
        {{ name }}
      </h3>
      <p class="mt-2 text-sm text-cyan-300">
        {{ subtitle }}
      </p>
      <p class="text-muted mt-4">
        {{ description }}
      </p>
    </div>

    <div class="mt-5 rounded-2xl border border-slate-200/80 bg-white/85 p-4">
      <p class="text-sm font-medium text-slate-900">
        {{ highlight }}
      </p>
      <ul class="mt-3 space-y-2 text-sm text-slate-600">
        <li v-for="detail in details" :key="detail" class="flex gap-2">
          <span class="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
          <span>{{ detail }}</span>
        </li>
      </ul>
    </div>

    <div class="mt-5 flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="rounded-full border border-slate-200/80 bg-white/85 px-3 py-1 text-xs text-slate-600"
      >
        {{ tag }}
      </span>
    </div>
  </button>
</template>


