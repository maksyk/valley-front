<script setup lang="ts">
import {getUrlPath} from "../../../core/utils.ts";
</script>
<template>
  <div :style="`background-image: url('${getUrlPath()}/assets/6.png');`"
       class="bg-cover bg-center h-full border-[3px] border-solid border-[#262626] rounded-[5px] shadow-md w-[25%]">
    <div class="text-pool flex w-full justify-center py-[5px]">POOL</div>
  </div>
</template>
<style scoped>
.text-pool {
  font: 400 12px / 1 "Press Start 2P", sans-serif;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  text-shadow: 0 3px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 1px #000, 0 1px #000, 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>