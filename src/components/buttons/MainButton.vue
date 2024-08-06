<script setup lang="ts">
import {PropType} from "vue";
import {getUrlPath} from "../../core/utils.ts";

defineProps({
  background: {
    type: String as PropType<'green' | 'grey'>,
    default: 'grey'
  },
})

const backgrounds = {
  grey: `background-image: url('${getUrlPath()}/assets/8.png');`,
  green: `background-image: url('${getUrlPath()}/assets/9.png');`,
}
</script>
<template>
  <div :style="backgrounds[background]"
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
      rounded-[5px]
      cursor-pointer">
    <div class="z-20 h-full w-full p-[10px]">
      <div class="text-style">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.text-style {
  font: 400 18px "Press Start 2P", sans-serif;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  text-shadow: 0 3px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 1px #000, 0 1px #000, 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>