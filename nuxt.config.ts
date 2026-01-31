// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // SSR is enabled by default in Nuxt 3
  ssr: true,

  // Nitro server configuration
  nitro: {
    // Node.js server preset (default for SSR)
    preset: 'node-server',
  },

  // Runtime config for environment variables
  runtimeConfig: {
    // Private keys (server-only)
    apiSecret: '',
    // Public keys (exposed to client)
    public: {
      apiBase: '/api',
    },
  },

  // App configuration
  app: {
    head: {
      title: 'Nuxt 3 on Quant Cloud',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nuxt 3 SSR application deployed on Quant Cloud' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
})
