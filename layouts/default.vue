<template>
  <div class="relative min-h-screen overflow-x-hidden bg-[#f7f9ff] text-slate-900">
    <div class="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
    <AppHeader />
    <main class="relative pt-20">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>


