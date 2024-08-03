<script setup lang="ts">
import {getUrlPath} from "../../../core/utils.ts";
</script>
<template>
  <div class="flex pt-[5px]">
    <div
        :style="`background-image: url('${getUrlPath()}/assets/1.png');`"
        class="
      rounded-r-[5px]
      text-style
      z-10
      bg-cover
      bg-center
      relative
      items-center
      flex
      flex-col
      justify-center
      cursor-pointer
      py-[9px]
      px-[15px]
      border-t-[3px]
      border-b-[3px]
      border-r-[3px]
      border-solid
      border-[#262626]">
      <div class="text-boost">
        BOOST
      </div>
    </div>
  </div>
</template>
<style scoped>
.text-boost {
  font: 400 12px / 1.16667 "Press Start 2P", sans-serif;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>