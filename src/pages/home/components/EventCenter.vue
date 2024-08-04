<script setup lang="ts">
import TransitionBounce from "../../../components/transitions/TransitionBounce.vue";
import {getUrlPath} from "../../../core/utils.ts";
import {ref} from "vue";

const isBounce = ref(false)
setTimeout(() => {
  isBounce.value = true

}, 300)
</script>
<template>
  <div class="flex pt-[5px] w-[25%]">
    <div :style="`background-image: url('${getUrlPath()}/assets/1.png');`"
         class="
         w-full
         shadow-md
      text-style
      rounded-l-[5px]
      z-10
      bg-cover
      bg-center
      relative
      items-center
      flex
      flex-col
      justify-center
      cursor-pointer
      py-[7px]
      px-[10px]
      border-t-[3px]
      border-b-[3px]
      border-l-[3px]
      border-solid
      border-[#262626]">
      <TransitionBounce>
        <div class="text-event-center" v-if="isBounce">
          EVENT CENTER
        </div>
      </TransitionBounce>
    </div>
  </div>
</template>
<style scoped>
.text-event-center {
  font: 400 12px / 1.16667 "Press Start 2P", sans-serif;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>