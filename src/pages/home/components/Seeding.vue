<script setup lang="ts">
import {getUrlPath} from "../../../core/utils.ts";
</script>
<template>
  <div class="flex border-[3px] border-solid border-[#262626] rounded-[5px] w-full h-full">
    <div :style="`background-image: url('${getUrlPath()}/assets/5.png');`" class="bg-cover bg-center w-full h-full"></div>
  </div>
</template>
<style scoped>
</style>