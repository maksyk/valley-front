<script setup lang="ts">
import {getUrlPath} from "../../../core/utils.ts";
</script>
<template>
  <div class="flex pt-[5px]">
    <div :style="`background-image: url('${getUrlPath()}/assets/1.png');`"
         class="
      text-style
      rounded-l-[5px]
      z-10
      bg-cover
      bg-center
      relative
      items-center
      flex
      flex-col
      justify-center
      cursor-pointer
      py-[7px]
      px-[10px]
      border-t-[3px]
      border-b-[3px]
      border-l-[3px]
      border-solid
      border-[#262626]">
      <div class="text-event-center">
        EVENT CENTER
      </div>
    </div>
  </div>
</template>
<style scoped>
.text-event-center {
  font: 400 12px / 1.16667 "Press Start 2P", sans-serif;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>