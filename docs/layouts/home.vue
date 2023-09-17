<script setup lang="ts">
import { useContent } from '#imports'

const { page } = useContent()
</script>

<template>
  <div>
    <AppHeader />
    <main
      class="
        px-5 pt-5 pb-16 lg:px-8 lg:pt-5 lg:pb-20
        flex flex-col items-center
        min-h-[calc(100vh-var(--header-height)-var(--footer-height))]
      "
    >
      <div class="text-center mb-10">
        <img :width="345 * 0.5" :height="331 * 0.5" src="/favicon.png" alt="Rock070 Avatar" class="mb-2">
        <h1>{{ page.title }}</h1>
      </div>
      <article>
        <slot />
      </article>
    </main>
    <AppFooter />
  </div>
</template>
