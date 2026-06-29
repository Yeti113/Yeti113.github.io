<script setup lang="ts" generic="T">
import { useIntervalFn } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    items: T[]
    autoplay?: boolean
    interval?: number
  }>(),
  {
    autoplay: true,
    interval: 4500
  }
)

const index = ref(0)

const next = () => {
  index.value = (index.value + 1) % props.items.length
}

const prev = () => {
  index.value = (index.value - 1 + props.items.length) % props.items.length
}

const goTo = (value: number) => {
  index.value = value
}

const { pause, resume } = useIntervalFn(() => {
  if (props.autoplay && props.items.length > 1) {
    next()
  }
}, props.interval)

onMounted(() => {
  if (props.autoplay) {
    resume()
  } else {
    pause()
  }
})

onBeforeUnmount(() => pause())
</script>

<template>
  <div
    class="relative"
    @mouseenter="pause"
    @mouseleave="resume"
  >
    <div class="overflow-hidden">
      <div
        class="flex transition-transform duration-500 ease-out"
        :style="{ transform: `translateX(-${index * 100}%)` }"
      >
        <div v-for="(item, itemIndex) in items" :key="itemIndex" class="min-w-full">
          <slot :item="item" :index="itemIndex" />
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-between">
      <div class="flex gap-2">
        <button
          type="button"
          class="btn-secondary h-11 w-11 p-0"
          aria-label="上一项"
          @click="prev"
        >
          &larr;
        </button>
        <button
          type="button"
          class="btn-secondary h-11 w-11 p-0"
          aria-label="下一项"
          @click="next"
        >
          &rarr;
        </button>
      </div>

      <div class="flex items-center gap-2">
        <button
          v-for="(_, dotIndex) in items"
          :key="dotIndex"
          type="button"
          class="h-2.5 rounded-full transition-all duration-300"
          :class="dotIndex === index ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-300'"
          :aria-label="`切换到第 ${dotIndex + 1} 项`"
          @click="goTo(dotIndex)"
        />
      </div>
    </div>
  </div>
</template>


