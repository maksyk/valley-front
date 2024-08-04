<script setup lang="ts">
import {getUrlPath} from "../../../core/utils.ts";
</script>
<template>
  <div class="border-[3px] border-solid border-[#262626] rounded-[5px] shadow-md w-full h-full">
    <div :style="`background-image: url('${getUrlPath()}/assets/5.png');`" class="bg-contain bg-center w-full h-full rounded-[2px]"></div>
    <div class="absolute top-0 p-[20px]">
      Seeding
    </div>
  </div>
</template>
<style scoped>
</style>