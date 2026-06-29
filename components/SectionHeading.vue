<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
}>()
</script>

<template>
  <div :class="center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'">
    <p
      v-if="eyebrow"
      class="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300"
    >
      {{ eyebrow }}
    </p>
    <h2 class="title-lg">
      {{ title }}
    </h2>
    <p v-if="description" class="text-muted mt-4">
      {{ description }}
    </p>
  </div>
</template>


