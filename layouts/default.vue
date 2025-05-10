<script setup lang="ts">
import ThemeToggler from '../components/ThemeToggler.vue';
</script>

<template>
  <div>
    <main
      class="flex items-center justify-center flex-col sm:h-screen py-10 sm:p-y0 dark:bg-primary-dark bg-complementary-light transition-all"
    >
      <div
        class="w-full max-w-[90%] md:max-w-[80%] pb-10 flex items-center justify-end"
      >
        <ThemeToggler />
      </div>
      <slot />
    </main>
  </div>
</template>
