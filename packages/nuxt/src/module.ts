import { addImports, addPlugin, addTemplate, createResolver, defineNuxtModule } from '@nuxt/kit'
import type { NotiOptions } from '@vue3-noti/core'

export default defineNuxtModule<NotiOptions>({
  meta: {
    name: '@vue3-noti/nuxt',
    configKey: 'noti',
  },
  setup(notiOptions, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Transpile runtime
    nuxt.options.build.transpile.push(resolver.resolve('./runtime'))

    // Inject options via virtual template
    nuxt.options.alias['#build/vue3-noti-nuxt-config-options'] = addTemplate({
      filename: 'vue3-noti-nuxt-config-options.mjs',
      getContents: () => `export const configOptions = ${JSON.stringify(notiOptions)};`,
    }).dst
    nuxt.hook('prepare:types', ({ references }) => {
      references.push({ types: '@vue3-noti/nuxt' })
    })

    nuxt.options.css.push('@vue3-noti/core/style.css')

    // Add runtime plugin before the router plugin
    // https://github.com/nuxt/framework/issues/9130
    nuxt.hook('modules:done', () => {
      addPlugin(resolver.resolve('./runtime/plugin'))
    })

    // Add auto imports
    const composables = resolver.resolve('./runtime/composables')
    addImports([
      // built-in
      { from: composables, name: 'useNoti' },
    ])
  },
})
