<script setup lang="ts">
import AppMenuNav from "./AppMenuNav.vue";
import Background from "../components/icons/background.vue";
</script>
<template>
  <div class="absolute left-0 top-0 right-0 bottom-0 overflow-hidden" @click="() => null">
    <div class="relative max-w-[480px] mx-auto min-h-[100dvh]  overflow-hidden">
      <background class="absolute z-[-1] flex h-dvh w-full"/>
      <div class="h-[calc(100vh-93px)] z-10 relative overflow-y-auto">
        <slot></slot>
      </div>
      <AppMenuNav/>
    </div>
  </div>
</template>
<style>
</style>