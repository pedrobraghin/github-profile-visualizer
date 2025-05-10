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
    <Icon
      v-else
      :name="icon"
      class="dark:text-text-secondary-dark opacity-65"
    />
    <a
      v-if="link"
      :href="link"
      target="_blank"
      class="text-text-primary-dark dark:text-text-secondary-dark hover:text-blue-500 transition-colors text-sm cursor-pointer"
      >{{ name && name.trim().length > 0 ? name : 'Not available' }}</a
    >
    <span
      v-else
      class="text-text-primary-dark dark:text-text-secondary-dark text-sm"
      >{{ name && name.trim().length > 0 ? name : 'Not available' }}</span
    >
  </div>
</template>
