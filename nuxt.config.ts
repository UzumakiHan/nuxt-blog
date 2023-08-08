// https://nuxt.com/docs/api/configuration/nuxt-config
import { siteConfig } from './site.config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/content'],
  css: [
    'element-plus/dist/index.css',
    '@unocss/reset/tailwind.css',
    '@/assets/styles/global.scss',
    '@/assets/styles/theme.css',
    '@/assets/styles/transition.css',
    '@/assets/styles/markdown.scss',
  ],
  app:{
    head:{
      title: siteConfig.author,
      meta:[
        { name: 'description', content: siteConfig.description },
        { name: 'author', content: siteConfig.author },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { charset: 'UTF-8' },
        { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
      ]
    }
  }
})
