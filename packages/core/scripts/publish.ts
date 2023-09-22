import { execSync as exec } from 'node:child_process'
import path, { resolve } from 'node:path'
import consola from 'consola'
import { copyFileSync, readJSONSync, removeSync } from 'fs-extra'

exec('pnpm build', { stdio: 'inherit' })

const command = 'npm publish --access public'

const { name, version } = readJSONSync(
  path.resolve(__dirname, '../package.json'),
  'utf-8',
)

const readmePath = path.join(resolve(__dirname, '..'), 'README.md')

copyFileSync(
  path.join(resolve(__dirname, '../../..'), 'README.md'),
  readmePath,
)

const tag = version.includes('beta')
  ? 'beta'
  : version.includes('rc')
    ? 'rc'
    : null

exec(`${command}${tag ? ` --tag ${tag}` : ''}`, { stdio: 'inherit' })

removeSync(readmePath)
consola.success(`Published ${name} v${version}`)
