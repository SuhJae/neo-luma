// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],

  ui: {
    global: true,
  },

  i18n: { vueI18n: "./i18n.config.ts" },
});
