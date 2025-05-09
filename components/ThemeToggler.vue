<script setup>
import { useTheme } from '../composables/useTheme';

const { theme, toggleTheme } = useTheme();

const themeMap = {
  light: 'DARK',
  dark: 'LIGHT',
};
</script>

<template>
  <button
    class="flex items-center gap-2 tracking-widest font-medium"
    @click="toggleTheme"
  >
    {{ themeMap[theme] }}
    <Icon v-if="theme === 'light'" name="ri:moon-fill" />
    <Icon v-else name="material-symbols:sunny-rounded" />
  </button>
</template>
