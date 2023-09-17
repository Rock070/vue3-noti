// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  extends: ['@nuxt-themes/docus'],
  imports: {
    transform: {
      // you could also add the path of your built library to prevent this happening
      // for your users, but the issue is probably only replicable in your monorepo
      // https://github.com/nuxt/nuxt/issues/18823#issuecomment-1419704343
      exclude: [/\bcore\b/],
    },
  },
  content: {
    documentDriven: true,
  },
})
