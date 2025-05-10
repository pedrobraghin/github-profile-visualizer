<script setup lang="ts">
import { useRecaptchaProvider } from 'vue-recaptcha';

useRecaptchaProvider();
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
