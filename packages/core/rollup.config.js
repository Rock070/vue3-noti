const { resolve } = require('node:path')
const typescript = require('rollup-plugin-typescript2')

const { readJSONSync } = require('fs-extra')

const { source } = readJSONSync(
  resolve(__dirname, './package.json'),
  'utf-8',
)

module.exports = {
  input: [source],
  external: ['vue', '@vueuse/core'], // 不打包進去的外部依賴
  plugins: [
    typescript(/* { plugin options } */),
  ],
  output: [
    /**
     * 打包一個 index.esm 給全局引入
     */
    {
      format: 'esm',
      dir: 'dist',
      entryFileNames: 'index.mjs',
    },
  ],
}
