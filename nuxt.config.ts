export default defineNuxtConfig({
  compatibilityDate: '2026-06-29',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    },
    head: {
      title: '元构场智能科技',
      titleTemplate: '%s | 元构场智能科技',
      meta: [
        {
          name: 'description',
          content: '深圳市元构场智能科技有限公司，提供 GEO 生成式引擎优化、私有化定制智能体与官网小程序 AI 建站一体化解决方案。'
        },
        {
          name: 'theme-color',
          content: '#0f172a'
        }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
        }
      ]
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  typescript: {
    typeCheck: false
  }
})
