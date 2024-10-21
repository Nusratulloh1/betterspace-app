import { defineNuxtPlugin } from '#app'
import { createDiscreteApi, create } from 'naive-ui'

export default defineNuxtPlugin((nuxtApp) => {
    const naive = create({
    })

    nuxtApp.vueApp.use(naive)
})
