<script setup lang="ts">
import { gsap } from 'gsap'
import { useIntersectionObserver } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    delay?: number
    y?: number
  }>(),
  {
    delay: 0,
    y: 28
  }
)

const target = ref<HTMLElement | null>(null)
const revealed = ref(false)

onMounted(() => {
  if (!target.value) {
    return
  }

  gsap.set(target.value, {
    opacity: 0,
    y: props.y
  })

  const { stop } = useIntersectionObserver(
    target,
    ([entry]) => {
      if (!entry?.isIntersecting || revealed.value || !target.value) {
        return
      }

      revealed.value = true
      gsap.to(target.value, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: props.delay,
        ease: 'power3.out'
      })
      stop()
    },
    {
      threshold: 0.2
    }
  )
})
</script>

<template>
  <div ref="target">
    <slot />
  </div>
</template>


