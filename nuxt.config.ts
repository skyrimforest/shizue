// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  experimental: {
    payloadExtraction: false,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    baseURL: "/shizue.github.io/",
    buildAssetsDir: "nuxt_assets",
  },
  css: ["@/assets/css/Global.css"],
});
