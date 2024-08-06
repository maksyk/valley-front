<script setup lang="ts">
import {getUrlPath} from "../../../core/utils.ts";
import ProgressPar from "../../../components/ProgressPar.vue";
import {onMounted, ref} from "vue";
let TIMER_LIMIT = ref<number>(70)
let TIMER_VALUE = ref<number>(0)

function setLoading() {
  const intervalId = setInterval(() => {
    TIMER_LIMIT.value -= 1
    TIMER_VALUE.value += 1
    if (!TIMER_LIMIT.value) clearInterval(intervalId)
  }, 20)
}
onMounted(setLoading)

</script>
<template>
  <div class="h-full w-full pt-[5px]">
    <div class="absolute top-0 header-minting px-[10px] z-20">
      Minting
    </div>
    <div :style="`background-image: url('${getUrlPath()}/assets/7.png');`"
        class="bg-cover bg-center w-full border-[3px] border-solid border-[#262626] rounded-[12px] shadow-md h-full">
    </div>
    <div class="absolute top-0 w-full p-[20px] flex justify-between z-30">
      <div class="lemon z-20">
        Lemon haze
      </div>
      <div class="w-[30%] flex flex-col z-20 gap-2">
        <div class="header-progressbar z-20">
          40 lvl
        </div>
        <div class="w-full">
          <ProgressPar :borderSize="0" :rounded="0" :padding="0" :value="TIMER_VALUE"/>
        </div>
        <div class="z-20 flex justify-center">
          <span class="under-progress-span-first">
            1250
          </span>
          <span class="under-progress-span-second">
            /2000
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style >
.header-minting {
  font: 400 8px / 1.66667 "Press Start 2P", sans-serif;
  letter-spacing: -0.02em;
  text-align: center;
  color: #c6c6c6;
  text-shadow: 0 2px #000, 0 0 2px rgba(80, 80, 80, 0.4), 0 2px 3px rgba(80, 80, 80, 0.8);
}

.header-progressbar {
  font: 400 12px "Press Start 2P", sans-serif;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
}

.under-progress-span-first {
  font: 400 5px "Press Start 2P", sans-serif;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
  opacity: 0.9;
}

.under-progress-span-second {
  font: 400 5px "Press Start 2P", sans-serif;
  color: #8e8e8e;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
  opacity: 0.9;
}

.lemon {
  font: 400 12px "Press Start 2P", sans-serif;
  text-align: center;
  color: #ffe326;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 1px #000, 0 1px #000, 0 2px 3px rgba(0, 0, 0, 0.8);
}
.lv-progressbar {
  height: 0.3rem !important;;
}
</style>