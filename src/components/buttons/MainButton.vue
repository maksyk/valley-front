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
      rounded-[5px]">
    <div class="z-20 h-full w-full p-[10px]">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
</style>