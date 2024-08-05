<script setup lang="ts">
import {PropType} from "vue";
import {getUrlPath} from "../../core/utils.ts";
import Timer from "../Timer.vue";

defineProps({
  time: {
    type: Number as PropType<number>,
    default: 10000
  },
})

const BG_TIMER = `background-image: url('${getUrlPath()}/assets/8.png');`
const BG_CLAIM = `background-image: url('${getUrlPath()}/assets/9.png');`

</script>
<template>
  <div
      :style="time ? BG_TIMER : BG_CLAIM"
      class="
      relative
      h-full
      w-full
      bg-cover
      bg-center
      items-center
      flex
      border-[3px]
      border-solid
      border-[#262626]
      rounded-[5px]">
    <div class="z-20 h-full w-full p-[10px]">
      <Timer :time="time" v-if="time"/>
      <div class="text-claim" v-else>
        Claim
      </div>
    </div>
  </div>
</template>
<style scoped>
.text-claim {
  font: 400 14px "Press Start 2P", sans-serif;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  text-shadow: 0 3px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 1px #000, 0 1px #000, 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>