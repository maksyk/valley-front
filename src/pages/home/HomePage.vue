<script setup lang="ts">
import AppHeader from "../../layout/AppHeader.vue";
import Minting from "./components/Minting.vue";
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

if (!DEBUG) webApp.setHeaderColor('#394777');
if (!DEBUG) webApp.BackButton.isVisible = false;

</script>
<template>
  <AppHeader/>
  <div class="flex justify-between gap-[6px] mt-[10px] px-[10px]">
    <div class="relative ">
      <div class="pt-[5px]">
        <div class="absolute z-20 top-0 px-[10px] thc-header">
          THC
        </div>
        <div class="wrapper-buttons flex items-center rounded-[10px] border-[3px] border-solid border-[#262626] shadow-md">
          <ThcButton :icon="btn.icon" :content="btn.content" :style="btn.style" v-for="btn in buttons"/>
        </div>
      </div>
    </div>
    <div class="relative flex-1">
      <Minting/>
    </div>
  </div>
  <div class="flex flex-row gap-[6px] py-[5px]">
    <Boost/>
    <Balance/>
    <EventCenter/>
  </div>
  <div class="flex flex-row gap-[6px] mt-[10px] px-[10px] flex-1 h-[150px] ">
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
.thc-header {
  font: 400 12px "Press Start 2P", sans-serif;
  letter-spacing: -0.01em;
  text-align: center;
  color: #80ff00;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>