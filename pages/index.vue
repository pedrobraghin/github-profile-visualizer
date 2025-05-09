<script setup>
import SearchBox from '../components/SearchBox.vue';
import GitHubUserCard from '../components/GitHubUserCard.vue';
import ThemeToggler from '../components/ThemeToggler.vue';
import { useGithub } from '../composables/useGithub';

const { fetchUser, user, loading, error } = useGithub();
const nickname = ref('');

function handleInput(text) {
  nickname.value = text;
}

function handleSearchUser() {
  if (nickname.value) {
    fetchUser(nickname.value);
  } else {
    alert('Please enter a username');
  }
}
</script>

<template>
  <div class="md:w-[70vw] lg:w-[60vw] sm:w-[90vw] flex flex-col gap-4">
    <header class="flex justify-between items-center dark:text-primary-light">
      <h1 class="text-xl">GitHub Profile Visualizer</h1>
      <ThemeToggler />
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
      <div v-if="!loading && user">
        <GitHubUserCard :user="user" />
      </div>
      <div v-if="!loading && error">
        <span>Error trying search user {{ nickname.value }}</span>
      </div>
    </main>
  </div>
</template>
