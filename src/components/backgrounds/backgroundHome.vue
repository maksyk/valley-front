<script setup lang="ts">
import {getUrlPath} from "../../core/utils.ts";
</script>
<template>
  <div :style="`background-image: url('${getUrlPath()}/assets/4.png');`" class="bg-cover bg-center h-[100dvh]">
  </div>
</template>
<style scoped>
</style>