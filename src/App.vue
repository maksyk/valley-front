<script setup lang="ts">
import AppLayout from "./layout/AppLayout.vue";
import {webApp} from "./core/telegram/initWebApp.ts";
webApp.expand()
</script>
<template>
  <AppLayout>
    <router-view/>
  </AppLayout>
</template>
<style scoped>
</style>
