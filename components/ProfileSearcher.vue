<script setup>
import SearchBox from '../components/SearchBox.vue';
import GitHubUserCard from '../components/GitHubUserCard.vue';
import { useGithub } from '../composables/useGithub';
import { useHistory } from '../composables/useHistory';
import { buildHistoryEntry } from '../builders/build-history-entry';

const { fetchUser, user, loading, error } = useGithub();
const { save: saveToHistory } = useHistory('github-users');

const nickname = ref('');

function handleInput(text) {
  nickname.value = text;
}

function handleSearchUser() {
  if (!nickname.value) {
    alert('Please enter a username');
    return;
  }

  fetchUser(nickname.value).then(() => {
    if (user.value && !error.value) {
      saveToHistory(buildHistoryEntry(user.value));
    }
  });
}
</script>

<template>
  <div class="md:w-[70vw] w-[80%] lg:w-[60vw] sm:w-[90vw] flex flex-col gap-4">
    <header class="flex justify-between items-center dark:text-primary-light">
      <h1 class="text-xl">GitHub Profile Visualizer</h1>
      <span
        >Made by
        <a
          href="https://github.com/pedrobraghin"
          target="_blank"
          class="text-blue-400 transition-colors hover:text-blue-500 cursor-pointer"
        >
          @pedrobraghin</a
        ></span
      >
    </header>
    <main class="flex flex-col gap-4">
      <SearchBox :on-input="handleInput" :on-search="handleSearchUser" />
      <div
        v-if="loading"
        class="flex-1 flex items-center justify-center min-h-20"
      >
        <Icon
          name="svg-spinners:blocks-shuffle-3"
          class="text-secondary-dark dark:text-primary-light"
        />
      </div>
      <div v-if="!loading && !error && user">
        <GitHubUserCard :user="user" />
      </div>
      <div v-if="!loading && error">
        <span
          class="flex w-full items-center justify-center dark:text-text-secondary-dark"
          >Error trying search user {{ nickname }}</span
        >
      </div>
    </main>
  </div>
</template>
