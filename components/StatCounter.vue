<script setup lang="ts">
import { gsap } from 'gsap'
import { useIntersectionObserver } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    value: number
    suffix?: string
    prefix?: string
    label: string
    decimals?: number
  }>(),
  {
    suffix: '',
    prefix: '',
    decimals: 0
  }
)

const target = ref<HTMLElement | null>(null)
const displayValue = ref(0)
const hasStarted = ref(false)

const formattedValue = computed(() => {
  return `${props.prefix}${displayValue.value.toFixed(props.decimals)}${props.suffix}`
})

onMounted(() => {
  const { stop } = useIntersectionObserver(
    target,
    ([entry]) => {
      if (!entry?.isIntersecting || hasStarted.value) {
        return
      }

      hasStarted.value = true
      const state = { value: 0 }
      gsap.to(state, {
        value: props.value,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          displayValue.value = state.value
        }
      })
      stop()
    },
    { threshold: 0.4 }
  )
})
</script>

<template>
  <div ref="target" class="glass-panel p-6">
    <div class="text-3xl font-bold text-slate-900 sm:text-4xl">
      {{ formattedValue }}
    </div>
    <p class="mt-3 text-sm text-slate-600">
      {{ label }}
    </p>
  </div>
</template>


