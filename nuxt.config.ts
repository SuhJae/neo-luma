// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxtjs/fontaine",
    "@nuxtjs/google-fonts",
  ],

  // Fonts
  fontMetrics: {
    fonts: ["DM Sans"],
  },
  googleFonts: {
    display: "swap",
    download: true,
    families: {
      "DM+Sans": [400, 500, 600, 700],
    },
  },

  i18n: { vueI18n: "./i18n.config.ts" },
});
