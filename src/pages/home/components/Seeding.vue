<script setup lang="ts">
import {getUrlPath} from "../../../core/utils.ts";
</script>
<template>
  <div class="relative border-[3px] border-solid border-[#262626] rounded-[5px] shadow-md w-full h-full">
    <div :style="`background-image: url('${getUrlPath()}/assets/5.png');`" class="bg-contain bg-center w-full h-full rounded-[2px]"></div>
    <div class="absolute top-0 w-full flex flex-col">
      <div class="flex justify-center w-full">
        <div class="text-seeding p-[5px]">
          Seeding
        </div>
      </div>
      <div class="flex justify-between w-full py-[20px] px-[10px]">
        <div class="flex flex-col w-[50%]">
          <div class="text-main flex justify-start">
            Grow:
          </div>
          <div class="text-second flex justify-start py-[5px]">
            Profit: +2.60
          </div>
        </div>
        <div class="flex flex-col w-[50%]">
          <div class="text-main flex justify-end">
            0
          </div>
          <div class="text-second flex justify-end py-[5px]">
            Max: 1000
          </div>
        </div>
      </div>

<!--      TODO ClaimButton-->
    </div>
  </div>
</template>
<style scoped>
.text-seeding {
  font: 400 12px / 1 "Press Start 2P", sans-serif;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
}
.text-main {
  font: 400 14px "Press Start 2P", sans-serif;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
}
.text-second {
  font: 400 8px "Press Start 2P", sans-serif;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>