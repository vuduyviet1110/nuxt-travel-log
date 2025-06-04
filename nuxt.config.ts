// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  devServer: {
    port: 3154,
    host: "0.0.0.0",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxt/icon",
  ],
  css: [
    "~/assets/css/main.css",
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
});
