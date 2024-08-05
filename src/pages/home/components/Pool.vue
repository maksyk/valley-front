<script setup lang="ts">
import {getUrlPath} from "../../../core/utils.ts";
</script>
<template>
  <div class="relative pt-[5px] w-[35%]">
    <div class="absolute top-0 header-buds pl-[7px]">
      ZAZA Pool
    </div>
    <div class="border-[3px] border-solid border-[#262626] rounded-[5px] shadow-md w-full h-full">
      <div :style="`background-image: url('${getUrlPath()}/assets/6.png');`"
         class="bg-cover bg-center h-full">
      <div class="text-pool flex w-full h-full justify-center py-[7px]">
        POOL
      </div>
    </div>
    </div>
  </div>
</template>
<style scoped>
.header-buds {
  font: 400 8px / 1.66667 "Press Start 2P", sans-serif;
  letter-spacing: -0.02em;
  text-align: center;
  color: #c6c6c6;
  text-shadow: 0 2px #000, 0 0 2px rgba(80, 80, 80, 0.4), 0 2px 3px rgba(80, 80, 80, 0.8);
}
.text-pool {
  font: 400 12px / 1 "Press Start 2P", sans-serif;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  text-shadow: 0 3px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 1px #000, 0 1px #000, 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>