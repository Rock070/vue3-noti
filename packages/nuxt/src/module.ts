import { addPlugin, addTemplate, createResolver, defineNuxtModule } from '@nuxt/kit'
import type { NotiOptions } from '@vue3-noti/core'

export default defineNuxtModule<NotiOptions>({
  meta: {
    name: '@vue3-noti/nuxt',
    configKey: 'vue3-noti',
  },
  setup(notiOptions, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Transpile runtime
    nuxt.options.build.transpile.push(resolver.resolve('./runtime'))

    nuxt.hook('prepare:types', ({ references }) => {
      references.push({ types: '@vue3-noti/nuxt' })
    })

    // Inject options via virtual template
    nuxt.options.alias['#build/vue3-noti-nuxt-config-options'] = addTemplate({
      filename: 'vue3-noti-nuxt-config-options.mjs',
      getContents: () => `export const configOptions = ${JSON.stringify(notiOptions)};`,
    }).dst

    // prepare alias type
    addTemplate({
      src: resolver.resolve('./options.d.ts'),
      filename: 'vue3-noti-nuxt-config-options.d.ts',
    })

    nuxt.options.css.push('@vue3-noti/core/style.css')

    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
