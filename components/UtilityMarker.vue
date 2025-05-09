<script setup lang="ts">
defineProps<{
  title: string;
  content: number;
}>();
</script>

<template>
  <div class="flex flex-col">
    <span class="dark:text-text-secondary-dark text-sm">{{ title }}</span>
    <span class="text-xl dark:text-primary-light">
      {{ content }}
    </span>
  </div>
</template>
