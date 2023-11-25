<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: @vue3-noti/nuxt
- Description: My new Nuxt module
-->

# @vue3-noti/nuxt

<!-- [![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href] -->

Nuxt3 Toast with Composition API

<!-- - [✨ &nbsp;Release Notes](/CHANGELOG.md) -->
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@vue3-noti/nuxt?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Quick Setup

1. Add `@vue3-noti/nuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D @vue3-noti/nuxt

# Using yarn
yarn add --dev @vue3-noti/nuxt

# Using npm
npm install --save-dev @vue3-noti/nuxt
```

2. Add `@vue3-noti/nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  'modules': [
    '@vue3-noti/nuxt'
  ],
  'vue3-noti': {
    message: 'Nuxt Module Demo',
    type: 'warning',
    // ...Other vue3-noti options
  }
})
```

3. Add `<Noti />` component to your app

```vue [app.vue]
<template>
  <div>
    <NuxtPage />
    <Noti />
  </div>
</template>
```

That's it! You can now use My Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run dev:build
```
