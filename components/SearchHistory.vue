<script setup lang="ts">
import { useHistory } from '../composables/useHistory';
import HistoryCard from './HistoryCard.vue';
const { load } = useHistory('github-users');
const history = load();
</script>
<template>
  <div
    class="w-full h-max self-start max-w-[80%] md:max-w-[100%] overflow-auto"
  >
    <div v-if="history.length > 0" class="flex flex-col gap-10 w-full">
      <HistoryCard
        v-for="user in history"
        :key="user.name"
        :name="user.name"
        :avatar_url="user.avatar_url"
        :social_links="user.social_links"
        :consulted-at="user.consultedAt"
        :login="user.login"
        :html_url="user.html_url"
      />
    </div>
    <div
      v-else
      class="flex dark:text-text-secondary-dark items-center justify-center w-full"
    >
      <h2>No recently searches</h2>
    </div>
  </div>
</template>
