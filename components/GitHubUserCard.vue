<script setup lang="ts">
import type { IGitHubUser } from '../types/user';
import UtilityMarker from './UtilityMarker.vue';
import SocialLink from './SocialLink.vue';

const { user } = defineProps<{
  user: IGitHubUser;
}>();

console.log(user);
</script>
<template>
  <section
    class="flex sm:flex-row gap-6 sm:gap-0 flex-col w-full dark:bg-light-blue rounded-lg shadow-xl px-6 py-8"
  >
    <div class="sm:w-1/4 flex justify-center">
      <img
        :src="user.avatar_url"
        alt="User Avatar"
        class="rounded-full w-28 h-28 object-cover"
      />
    </div>
    <div class="sm:w-3/4 flex flex-col gap-6">
      <header class="flex flex-col w-full">
        <div class="flex items-start justify-between w-full">
          <h2 class="text-xl dark:text-primary-light">
            {{ user.name }}
          </h2>
          <span class="text-sm text-text-secondary-dark">
            Joined on
            {{
              new Date(user.created_at).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
                day: 'numeric',
              })
            }}
          </span>
        </div>
        <span>
          <a
            :href="user.html_url"
            target="_blank"
            class="text-blue-700 transition-colors hover:text-blue-500"
          >
            @{{ user.login }}</a
          >
        </span>
      </header>
      <div>
        <div class="text-sm">
          <span v-if="user.bio" class="dark:text-text-secondary-dark">
            {{ user.bio }}
          </span>
          <span v-else class="dark:text-text-secondary-dark">
            This profile has no bio
          </span>
        </div>
      </div>

      <div class="grid grid-cols-3 dark:bg-primary-dark py-4 px-6 rounded-lg">
        <UtilityMarker title="Repos" :content="user.public_repos" />
        <UtilityMarker title="Followers" :content="user.followers" />
        <UtilityMarker title="Following" :content="user.following" />
      </div>

      <div class="grid grid-cols-2 grid-rows-2 gap-2">
        <SocialLink
          icon="material-symbols-light:location-on-rounded"
          :name="user.location"
          :active="!!user.location"
        />
        <SocialLink
          icon="mdi:twitter"
          :name="user.twitter_username"
          :active="!!user.twitter_username"
        />
        <SocialLink
          icon="mdi:link-variant"
          :name="user.blog"
          :active="!!user.blog"
          :link="user.blog"
        />
        <SocialLink
          icon="heroicons:building-office-2-solid"
          :name="user.company"
          :active="!!user.company"
        />
      </div>
    </div>
  </section>
</template>
