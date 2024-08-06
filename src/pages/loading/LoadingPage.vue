<script setup lang="ts">
import ProgressPar from "../../components/ProgressPar.vue";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

let TIMER_LIMIT = ref<number>(100)
let TIMER_VALUE = ref<number>(0)
const router = useRouter()

function setLoading() {
  const intervalId = setInterval(() => {
    TIMER_LIMIT.value -= 1
    TIMER_VALUE.value += 1
    if (!TIMER_LIMIT.value) {
      clearInterval(intervalId)
      setTimeout(() => {
        router.push({name: 'start'})
      }, 500)
    }
  }, 70)
}
onMounted(setLoading)
</script>
<template>
  <div class="flex flex-col justify-center">
    <div class="text-valley py-[10px] mt-[45px]">
      Valley of ZAZA
    </div>
    <div class="text-money">
      Your money-making farm
    </div>
    <div class="text-loading mt-[40px] py-[7px]">
      LOADING
    </div>
    <div class="p-[10px]">
      <ProgressPar :value="TIMER_VALUE"/>
    </div>
    <div class="text-percentage py-[5px]">
      {{ TIMER_VALUE }}%
    </div>
  </div>
</template>
<style scoped>
.text-valley {
  font: 400 42px / 1.2 "Press Start 2P", sans-serif;
  text-align: center;
  color: #fff;
  text-shadow: 0 5px #000, 0 0 10px rgba(0, 0, 0, 0.4), 0 2px #000, 0 2px #000, 0 3px 4px rgba(0, 0, 0, 0.8);
}
.text-money {
  font: 400 10px / 1.3 "Press Start 2P", sans-serif;
  text-align: center;
  color: #fff;
  text-shadow: 0 3px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 1px #000, 0 1px #000, 0 2px 3px rgba(0, 0, 0, 0.8);
}
.text-loading {
  font: 400 16px / 0.625 "Press Start 2P", sans-serif;
  letter-spacing: -0.02em;
  text-align: center;
  color: #fff;
  text-shadow: 0 5px #000, 0 0 10px rgba(0, 0, 0, 0.4), 0 2px 5px rgba(0, 0, 0, 0.8);
}

.text-percentage {
  font: 400 18px / 1.3 "Press Start 2P", sans-serif;
  text-align: center;
  color: #fff;
  text-shadow: 0 5px #000, 0 0 10px rgba(0, 0, 0, 0.4), 0 1px #000, 0 1px #000, 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>