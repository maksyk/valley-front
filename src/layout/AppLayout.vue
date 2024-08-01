<script setup lang="ts">
import AppMenuNav from "./AppMenuNav.vue";
</script>
<template>
  <div class="absolute left-0 top-0 right-0 bottom-0 overflow-hidden " @click="() => null">
    <div class="max-w-[480px] mx-auto relative min-h-[100dvh] border-2 overflow-hidden">
      <div class="h-[calc(100vh-93px)] z-10 relative overflow-y-auto">
        <slot></slot>
      </div>
      <AppMenuNav/>
    </div>
  </div>
</template>
<style>
</style>