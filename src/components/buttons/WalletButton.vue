<script setup lang="ts">
import Wallet from "../svg/wallet.vue";
import {getUrlPath} from "../../core/utils.ts";
</script>
<template>
  <button
      :style="`background-image: url('${getUrlPath()}/assets/1.png');`"
      class="
      shadow-md
      text-style
      rounded-[5px]
      z-10
      bg-cover
      bg-center
      relative
      button-box
      items-center
      flex
      justify-center
      cursor-pointer
      px-[10px]
      py-[10px]
      border-[3px]
      border-solid
      border-[#262626]"
  >
    <Wallet></Wallet>
  </button>
</template>
<style scoped>
</style>