<script setup>
import WindowSwipper from '../components/WindowSwipper.vue';
import ProfileSearcher from '../components/ProfileSearcher.vue';
import SearchHistory from '../components/SearchHistory.vue';

</script>

<template>
  <div class="w-screen h-full flex flex-col justify-center items-center">
    <WindowSwipper :left="ProfileSearcher" :right="SearchHistory" label-left="Search" label-right="History" />
  </div>
</template>
