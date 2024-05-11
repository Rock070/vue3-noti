## 1.0.0

[compare changes](https://github.com/Rock070/vue3-noti/compare/1.0.0-beta.5...main)

### 🔥 Performance

- **noti:** Avoid unnecessary loop execution ([#45](https://github.com/Rock070/vue3-noti/pull/45))

### 🩹 Fixes

- Nuxt module dependency ([9b8774b](https://github.com/Rock070/vue3-noti/commit/9b8774b))

### 💅 Refactors

- **noti:** Use Date.now() instead of new Date().getTime() ([#44](https://github.com/Rock070/vue3-noti/pull/44))
- **noti:** Use simple implementation instead ([#46](https://github.com/Rock070/vue3-noti/pull/46))

### 🏡 Chore

- Update ci deps ([#49](https://github.com/Rock070/vue3-noti/pull/49))
- Update node 20 and pnpm 9 ([#48](https://github.com/Rock070/vue3-noti/pull/48))

### ❤️ Contributors

- Alex Liu ([@Mini-ghost](http://github.com/Mini-ghost))
- Rock070 ([@Rock070](http://github.com/Rock070))

## 1.0.0-beta.5

[compare changes](https://github.com/Rock070/vue3-noti/compare/1.0.0-beta.4...main)

### 🚀 Enhancements

- Nuxt module autoImport, moduleKey: noti ([#43](https://github.com/Rock070/vue3-noti/pull/43))

### 🏡 Chore

- Release nuxt module 1.0.0-beta.4 ([4f23683](https://github.com/Rock070/vue3-noti/commit/4f23683))

### ❤️ Contributors

- Rock070 ([@Rock070](http://github.com/Rock070))

## 1.0.0-beta.4

[compare changes](https://github.com/Rock070/vue3-noti/compare/1.0.0-beta.3...main)

### 🩹 Fixes

- Nuxt module type import ([#42](https://github.com/Rock070/vue3-noti/pull/42))

### 🏡 Chore

- Update lockfile ([ff0138e](https://github.com/Rock070/vue3-noti/commit/ff0138e))

### ❤️ Contributors

- Rock070 ([@Rock070](http://github.com/Rock070))

## 1.0.0-beta.3

[compare changes](https://github.com/Rock070/vue3-noti/compare/1.0.0-beta.2...main)

### 🩹 Fixes

- Nuxt module ([#41](https://github.com/Rock070/vue3-noti/pull/41))

### 🏡 Chore

- Nuxt version ([c9fcc81](https://github.com/Rock070/vue3-noti/commit/c9fcc81))

### ❤️ Contributors

- Rock070 ([@Rock070](http://github.com/Rock070))

## 1.0.0-beta.2

[compare changes](https://github.com/Rock070/vue3-noti/compare/1.0.0-beta.1...main)

### 🚀 Enhancements

- Change middle-top to top-middle, middle-bottom to bottom-middle ([#27](https://github.com/Rock070/vue3-noti/pull/27))
- Remove progress text ([#31](https://github.com/Rock070/vue3-noti/pull/31))
- **noti:** Add hook onClose ([#33](https://github.com/Rock070/vue3-noti/pull/33))
- **noti:** Change progress color to hsla ([#35](https://github.com/Rock070/vue3-noti/pull/35))
- **noti:** Transition fade in, fade out ([#37](https://github.com/Rock070/vue3-noti/pull/37))
- **noti:** Adjust style: transition, width, border-radius, RWD ([#38](https://github.com/Rock070/vue3-noti/pull/38))
- **nuxt:** Add nuxt module ([#39](https://github.com/Rock070/vue3-noti/pull/39))

### 🩹 Fixes

- **noti:** Fix mobile size toast offset, style ([#25](https://github.com/Rock070/vue3-noti/pull/25))

### 💅 Refactors

- **noti:** Migrate eventBus to inject & provider ([#34](https://github.com/Rock070/vue3-noti/pull/34))

### 📖 Documentation

- Getting started stackblitz link ([#24](https://github.com/Rock070/vue3-noti/pull/24))
- Update favicon, cover image and api interface ([#40](https://github.com/Rock070/vue3-noti/pull/40))

### 📦 Build

- Vitest/ui deps ([#30](https://github.com/Rock070/vue3-noti/pull/30))

### 🏡 Chore

- Publish script ([91c5cf0](https://github.com/Rock070/vue3-noti/commit/91c5cf0))

### ✅ Tests

- **noti:** Vitest, @vue/test-utils, one test case trigger noti, test ci ([#28](https://github.com/Rock070/vue3-noti/pull/28))
- **noti:** Initial options, type ([#36](https://github.com/Rock070/vue3-noti/pull/36))

### 🎨 Styles

- Modify class style to bem ([#32](https://github.com/Rock070/vue3-noti/pull/32))

### ❤️ Contributors

- Rock070 ([@Rock070](http://github.com/Rock070))

## 1.0.0-beta.1

### 🚀 Enhancements

- **core:** Composables add useNoti ([ac8584d](https://github.com/Rock070/vue3-noti/commit/ac8584d))
- **core:** Composables split useNoti & useNotiProvide ([db0e453](https://github.com/Rock070/vue3-noti/commit/db0e453))
- Add app use plugin ([9b7ac32](https://github.com/Rock070/vue3-noti/commit/9b7ac32))
- Delete useNotiProvide ([d9d281e](https://github.com/Rock070/vue3-noti/commit/d9d281e))
- Add dev script ([66b0bbe](https://github.com/Rock070/vue3-noti/commit/66b0bbe))
- **emit:** Establish subscription/publish center ([#7](https://github.com/Rock070/vue3-noti/pull/7))
- **Noti:** Make multi notification ([#9](https://github.com/Rock070/vue3-noti/pull/9))
- **plugin:** Set initial options by plugin, and override by useNoti() ([#10](https://github.com/Rock070/vue3-noti/pull/10))
- **noti:** Progress and pauseHover ([#11](https://github.com/Rock070/vue3-noti/pull/11))
- **noti:** Close on click ([#12](https://github.com/Rock070/vue3-noti/pull/12))
- **noti:** Distribute group ([#14](https://github.com/Rock070/vue3-noti/pull/14))
- **noti:** Type ([#15](https://github.com/Rock070/vue3-noti/pull/15))
- Adjust noti color variable ([#17](https://github.com/Rock070/vue3-noti/pull/17))

### 🩹 Fixes

- Script ([8b52750](https://github.com/Rock070/vue3-noti/commit/8b52750))
- **docs:** Duplicate nuxt content ([e98abc9](https://github.com/Rock070/vue3-noti/commit/e98abc9))
- **noti:** CloseOnClick fail ([6f78d7e](https://github.com/Rock070/vue3-noti/commit/6f78d7e))

### 💅 Refactors

- **noti:** Decoupling makeNoti function ([#13](https://github.com/Rock070/vue3-noti/pull/13))
- Css variables, types ([#20](https://github.com/Rock070/vue3-noti/pull/20))

### 📖 Documentation

- Update README.md ([6a061d9](https://github.com/Rock070/vue3-noti/commit/6a061d9))
- Get started, api, playground ([#19](https://github.com/Rock070/vue3-noti/pull/19))
- Prevent playground btn zoom in ([7db49c2](https://github.com/Rock070/vue3-noti/commit/7db49c2))
- Playground btn bg color ([b79ca80](https://github.com/Rock070/vue3-noti/commit/b79ca80))

### 📦 Build

- **rollup, workspace:** Build type, esm, umd, cjs, ([9634caf](https://github.com/Rock070/vue3-noti/commit/9634caf))
- **vue:** Add rollup vue plugin ([36df109](https://github.com/Rock070/vue3-noti/commit/36df109))
- Migrate rollup to vite ([#6](https://github.com/Rock070/vue3-noti/pull/6))
- Vite add dts plugin ([#8](https://github.com/Rock070/vue3-noti/pull/8))

### 🏡 Chore

- Format on save ([d795717](https://github.com/Rock070/vue3-noti/commit/d795717))
- **vscode:** CSpell add noti, composables ([304be9c](https://github.com/Rock070/vue3-noti/commit/304be9c))
- **eslint:** Turn off eqeqe rule ([17b06e9](https://github.com/Rock070/vue3-noti/commit/17b06e9))
- Add "play" script ([808ed62](https://github.com/Rock070/vue3-noti/commit/808ed62))
- **core:** Add dev script ([#4](https://github.com/Rock070/vue3-noti/pull/4))
- Release it setting ([#22](https://github.com/Rock070/vue3-noti/pull/22))
- Release setting ([a8834cd](https://github.com/Rock070/vue3-noti/commit/a8834cd))

### 🎨 Styles

- **eslint:** Turn off no-const-enum, no-unused-imports ([#3](https://github.com/Rock070/vue3-noti/pull/3))

### 🤖 CI

- Add github action (lint & typecheck) ([3675bf3](https://github.com/Rock070/vue3-noti/commit/3675bf3))
- Build fail ([5c121d4](https://github.com/Rock070/vue3-noti/commit/5c121d4))
- Build fail ([a674b97](https://github.com/Rock070/vue3-noti/commit/a674b97))
- Build fail ([9b252ed](https://github.com/Rock070/vue3-noti/commit/9b252ed))
- Build fail ([d9344e2](https://github.com/Rock070/vue3-noti/commit/d9344e2))

### ❤️ Contributors

- Rock070 ([@Rock070](http://github.com/Rock070))
- Abe Chen <abe1272001@gmail.com>
