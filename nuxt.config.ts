import Aura from '@primevue/themes/aura';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  spaLoadingTemplate: './app-loading.html',
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
    "primeicons/primeicons.css",
    '~/assets/styles/scss/main.scss' // custom styles, if any
  ],
  modules: ['@pinia/nuxt', '@nuxt/fonts', '@primevue/nuxt-module', 'nuxt-svgo'],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false || 'none',
        }
      },
    }
  },
  svgo: {
    autoImportPath: '~/assets/images/svgs/',
    // componentPrefix: 'i',
  },
  plugins: ['~/plugins/vue-the-mask.ts'],
  vite: {
    plugins: [
      Components({
        resolvers: [PrimeVueResolver()],
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