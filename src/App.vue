<script setup lang="ts">
import AppLayout from "./layout/AppLayout.vue";
import {webApp} from "./core/telegram/initWebApp.ts";
import {DEBUG} from "./config.ts";
if (!DEBUG)  webApp.expand()
</script>
<template>
  <AppLayout>
    <router-view/>
  </AppLayout>
</template>
<style scoped>
</style>
