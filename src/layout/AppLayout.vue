<script setup lang="ts">
import {useRoute} from "vue-router";
import {backgrounds} from "./config.ts";
const route = useRoute()
</script>
<template>
  <div class="absolute left-0 top-0 right-0 bottom-0 overflow-hidden" @click="() => null">
    <div class="relative max-w-[480px] mx-auto min-h-[100dvh] overflow-hidden">
      <component :is="backgrounds[route.name as any]" class="absolute z-[-1] flex h-dvh w-full"/>
      <slot name="background"></slot>
      <div class="h-[calc(100vh-93px)] z-10 relative overflow-y-auto p-[10px]">
        <slot/>
      </div>
    </div>
  </div>
</template>
<style>
</style>