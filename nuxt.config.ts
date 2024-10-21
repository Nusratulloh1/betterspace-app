import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  // Apply middleware to a specific route
  routeRules: {
    '/protected-route/**': { middleware: 'auth' },
  },
  app: {
    head: {
      title: 'Betterspace',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
      script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],

    },
  },

  css: [
    // 'naive-ui/dist/naive-ui.css',
    '~/assets/styles/scss/main.scss' // custom styles, if any
  ],
  modules: [
    '@pinia/nuxt'
  ],
  typescript: {
    strict: true,
    shim: false,
  },
  vite: {
    plugins: [
      AutoImport({
        resolvers: [NaiveUiResolver()],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },


  compatibilityDate: '2024-10-21',
});