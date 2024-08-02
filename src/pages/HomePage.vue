<script setup lang="ts">
import AppHeader from "../layout/AppHeader.vue";
import Minting from "../components/svg/minting.vue";
import ThcButton from "../components/buttons/thcButton.vue";
import AppMenuNav from "../layout/AppMenuNav.vue";
import {buttons} from "./configs.ts";

</script>
<template>
  <AppHeader/>
  <div class="flex justify-between gap-[6px]">
    <div class="wrapper-buttons flex items-center rounded-[10px] border-[3px] border-solid border-[#262626]">
      <ThcButton :icon="btn.icon" :content="btn.content" :style="btn.style" v-for="btn in buttons"/>
    </div>
    <div class="">
      <Minting></Minting>
    </div>
  </div>
  <AppMenuNav/>
</template>
<style scoped>
.wrapper-buttons {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
</style>