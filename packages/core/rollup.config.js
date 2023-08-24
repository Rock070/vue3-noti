const { resolve } = require('node:path')
const { dts } = require('rollup-plugin-dts')

const typescript = require('rollup-plugin-typescript2')

const { readJSONSync } = require('fs-extra')

const { source } = readJSONSync(
  resolve(__dirname, './package.json'),
  'utf-8',
)

const input = resolve(__dirname, source)

/**
 * Rollup configuration for building the Vue3-noti package.
 * @type {import('rollup').RollupOptions[]}
 */
module.exports = [
  // ES module for browsers
  {
    input,
    external: ['vue', '@vueuse/core'], // External dependencies that are not bundled
    plugins: [
      typescript({
        clean: true,
      }),
    ],
    output: [
      /**
       * Bundle an index.esm for global import.
       */
      {
        globals: {
          vue: 'Vue',
        },
        name: '@vue3-noti',
        format: 'esm',
        dir: 'dist',
        entryFileNames: 'index.esm.mjs',
      },

    ],
  },

  // CommonJS for Node and bundlers
  {
    input,
    external: ['vue', '@vueuse/core'], // External dependencies that are not bundled
    plugins: [
      typescript({
        clean: true,
      }),
    ],
    output: [
      {
        globals: {
          vue: 'Vue',
        },
        name: '@vue3-noti',
        format: 'cjs',
        dir: 'dist',
        entryFileNames: 'index.cjs.js',
      },
    ],
  },

  // UMD for browsers
  {
    input,
    external: ['vue', '@vueuse/core'], // External dependencies that are not bundled

    plugins: [
      typescript({
        clean: true,
      }),
    ],
    output: [
      {
        globals: {
          'vue': 'Vue',
          '@vueuse/core': '@vueuse/core',
        },
        name: '@vue3-noti',
        format: 'umd',
        dir: 'dist',
        entryFileNames: 'index.umd.js',
      },
    ],
  },

  // d.ts for types
  {
    input,
    external: ['vue', '@vueuse/core'], // External dependencies that are not bundled
    output: [{
      name: '@vue3-noti',
      format: 'es',
      dir: 'dist',
      globals: {
        vue: 'Vue',
      },
      entryFileNames: 'index.d.ts',
    }],
    plugins: [dts()],
  },
]
