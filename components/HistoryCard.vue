<script setup lang="ts">
import type { ISearchHistory } from '../types/search-history';
import SocialLink from './SocialLink.vue';

const props = defineProps<ISearchHistory>();

const blogLink =
  props.social_links?.blog?.startsWith('http') ||
  props.social_links?.blog?.startsWith('www')
    ? props.social_links?.blog
    : 'https://' + props.social_links?.blog;

const formatter = new Intl.DateTimeFormat('pt-BR', {
  timeZone: 'America/Sao_Paulo',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const formattedDate = formatter.format(new Date(props.consultedAt));
</script>
<template>
  <div class="flex flex-col lg:flex-row gap-4 items-center w-full">
    <div class="flex-[1] lg:col-span-1">
      <img
        :src="avatar_url"
        alt="User Avatar"
        class="rounded-full w-32 h-auto object-cover"
      />
    </div>
    <div class="flex-[8] flex flex-col gap-8 w-full">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between">
        <div class="flex gap-2">
          <span class="dark:text-primary-light">
            {{ name ?? 'Name not available' }}
          </span>

          <a
            :href="html_url"
            target="_blank"
            class="text-blue-400 transition-colors hover:text-blue-500 cursor-pointer"
          >
            @{{ login }}</a
          >
        </div>
        <span class="dark:text-primary-light"
          >Searched at: {{ formattedDate }}</span
        >
      </div>
      <div class="grid grid-cols-2 grid-rows-2 lg:flex justify-between">
        <SocialLink
          icon="material-symbols-light:location-on-rounded"
          :name="social_links.location"
          :active="!!social_links.location"
        />
        <SocialLink
          icon="mdi:twitter"
          :name="social_links.twitter_username"
          :active="!!social_links.twitter_username"
        />
        <SocialLink
          icon="mdi:link-variant"
          :name="social_links.blog"
          :active="!!social_links.blog"
          :link="blogLink"
        />
        <SocialLink
          icon="heroicons:building-office-2-solid"
          :name="social_links.company"
          :active="!!social_links.company"
        />
      </div>
    </div>
  </div>
</template>
