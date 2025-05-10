<script setup lang="ts">
import ThemeToggler from '../components/ThemeToggler.vue';
import ContactModal from '../components/ContactModal.vue';
</script>

<template>
  <div>
    <main
      class="flex items-center justify-center w-screen flex-col py-10 dark:bg-primary-dark bg-complementary-light transition-all">
      <div class="w-full max-w-[90%] md:max-w-[80%] pb-10 flex items-center justify-between">
        <ContactModal />
        <ThemeToggler />
      </div>
      <slot />
    </main>
  </div>
</template>
