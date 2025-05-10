<script setup lang="ts">
defineProps<{
  onInput: (text: string) => void;
  onSearch: () => void;
  disabled?: boolean;
}>();
</script>

<template>
  <div
    class="flex items-center justify-between gap-2 p-3 rounded-xl flex-1 dark:bg-light-blue bg-white h-[4.5rem] shadow-xl"
  >
    <Icon
      name="hugeicons:search-01"
      class="text-secondary-dark text-2xl mx-4"
    />
    <input
      placeholder="Search GitHub username..."
      class="flex-1 h-full bg-transparent focus:outline-none focus:ring-0 dark:text-secondary-light"
      type="text"
      @input="e => onInput((e.target as HTMLInputElement).value)"
      @keydown.enter="onSearch"
    />
    <button
      :disabled="disabled"
      class="bg-blue-500 text-white p-2 rounded-lg w-1/2 max-w-24 transition-all hover:opacity-75 h-full"
      @click="onSearch"
    >
      Search
    </button>
  </div>
</template>
