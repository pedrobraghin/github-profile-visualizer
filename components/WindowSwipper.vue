<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

defineProps<{
  left: object;
  right: object;
  labelLeft: string;
  labelRight: string;
}>();

const position = ref('left');
const screenWidth = ref(window.innerWidth);
const SMALL_SCREEN = 768;
const showContent = ref(true);

function toggleLeft() {
  if (position.value === 'left') return;
  position.value = 'left';
  showContent.value = false;
  setTimeout(() => {
    showContent.value = true;
  }, 150);
}

function toggleRight() {
  if (position.value === 'right') return;
  position.value = 'right';
  showContent.value = false;
  setTimeout(() => {
    showContent.value = true;
  }, 150);
}

function updateWidth() {
  screenWidth.value = window.innerWidth;
}

const coverStyle = computed(() => ({
  left: position.value === 'left' ? '-100%' : '100%',
}));

const leftStyle = computed(() => ({
  left: position.value === 'left' ? '0%' : '-100%',
}));

const leftButtonStyle = computed(() => ({
  backgroundColor: position.value === 'left' ? '#3b82f6 ' : '#C8C8C8',
}));

const rightButtonStyle = computed(() => ({
  backgroundColor: position.value === 'right' ? '#3b82f6 ' : '#C8C8C8',
}));

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
</script>

<template>
  <div class="w-screen md:max-w-[80%] h-screen flex flex-col items-center justify-center">
    <div class="mb-4 w-full flex gap-2 flex-col px-8 md:flex-row md:px-0">
      <button class="bg-blue-500 text-white p-2 rounded-lg w-full transition-all hover:opacity-75 h-full"
        :style="leftButtonStyle" @click="toggleLeft">
        {{ labelLeft }}
      </button>
      <button class="bg-text-secondary-dark text-white p-2 rounded-lg w-full transition-all hover:opacity-75 h-full"
        :style="rightButtonStyle" @click="toggleRight">
        {{ labelRight }}
      </button>
    </div>

    <div class="relative w-full h-full overflow-x-hidden">
      <div v-if="showContent && position === 'left'"
        class="w-full h-full flex items-center justify-center absolute transition-all duration-500" :style="leftStyle">
        <component :is="left" />
      </div>
      <div v-if="showContent && position === 'right'"
        class="w-full h-full flex items-center justify-center absolute transition-all duration-500">
        <component :is="right" />
      </div>

      <div v-if="screenWidth >= SMALL_SCREEN"
        class="dark:bg-primary-dark bg-slate-100 w-full h-full z-10 absolute top-0 transition-all duration-500"
        :style="coverStyle" />
    </div>
  </div>
</template>
