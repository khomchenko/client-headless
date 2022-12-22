export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    API_BASE_URL: process.env.NUXT_API_BASE_URL,
    API_SITE_NAME: process.env.NUXT_API_SITE_NAME,
    SITE_URL: process.env.NUXT_SITE_URL,
    SERVER_PROJECT_ROOT: process.env.NUXT_SERVER_PROJECT_ROOT,
  },
});
