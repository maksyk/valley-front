<script setup lang="ts">
import MainButton from "../../components/buttons/MainButton.vue";
import {useRouter} from "vue-router";
import {webApp} from "../../core/telegram/initWebApp.ts";
webApp.setHeaderColor('#2A4C3B');
const router = useRouter()
</script>
<template>
  <div class="flex justify-center w-full h-full relative">
    <div class="flex flex-col w-full">
      <div class="text-main pt-[20px]">
        Valley of ZAZA
      </div>
      <div class="text-second p-[5px]">
        Grow, Conquer, Win!
      </div>
    </div>
    <div class="absolute bottom-0 w-full px-[20px]">
      <MainButton background="green" @click="router.push({name: 'approve'})">
        <div>
          START GROW
        </div>
      </MainButton>
    </div>
  </div>
</template>
<style scoped>
.text-main {
  font: 400 42px / 1.2 "Press Start 2P", sans-serif;
  text-align: center;
  color: #fff;
  text-shadow: 0 5px #000, 0 0 10px rgba(0, 0, 0, 0.4), 0 2px #000, 0 2px #000, 0 3px 4px rgba(0, 0, 0, 0.8);
}

.text-second {
  font: 400 10px / 1.3 "Press Start 2P", sans-serif;
  text-align: center;
  color: #71c82d;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 1px #000, 0 1px #000, 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>