<script setup lang="ts">
defineProps<{
  name?: string;
  icon: string;
  link?: string;
  active: boolean;
}>();
</script>

<template>
  <div class="flex gap-3 items-center">
    <Icon v-if="active" :name="icon" class="dark:text-primary-light" />
    <Icon v-else :name="icon" class="dark:text-text-secondary-dark" />
    <a
      v-if="link"
      :href="link"
      target="_blank"
      class="text-text-secondary-dark dark:text-text-secondary-light hover:text-blue-500 transition-colors text-sm cursor-pointer"
      >{{ name ?? 'Not available' }}</a
    >
    <span
      v-else
      class="text-text-secondary-dark dark:text-text-secondary-light text-sm"
      >{{ name ?? 'Not available' }}</span
    >
  </div>
</template>
