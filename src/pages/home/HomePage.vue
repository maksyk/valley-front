<script setup lang="ts">
import AppHeader from "../../layout/AppHeader.vue";
import Minting from "./components/minting.vue";
import ThcButton from "../../components/buttons/thcButton.vue";
import AppMenuNav from "../../layout/AppMenuNav.vue";
import Boost from "./components/Boost.vue";
import Balance from "./components/Balance.vue";
import EventCenter from "./components/EventCenter.vue";
import Pool from "./components/Pool.vue";
import Seeding from "./components/Seeding.vue";
import {buttons} from "./configs.ts";
import {webApp} from "../../core/telegram/initWebApp.ts";
import {DEBUG} from "../../config.ts";

if (!DEBUG) webApp.BackButton.isVisible = false;

</script>
<template>
  <AppHeader/>
  <div class="flex justify-between gap-[6px] mt-[10px] p-[10px]">
    <div class="wrapper-buttons flex items-center rounded-[10px] border-[3px] border-solid border-[#262626]">
      <ThcButton :icon="btn.icon" :content="btn.content" :style="btn.style" v-for="btn in buttons"/>
    </div>
    <div class="flex-1">
      <Minting/>
    </div>
  </div>
  <div class="flex flex-row gap-[6px] mt-[5px]">
    <Boost/>
    <Balance/>
    <EventCenter/>
  </div>
  <div class="flex flex-row gap-[6px] mt-[10px] px-[10px] flex-1 h-[50px]">
    <Pool/>
    <Seeding/>
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