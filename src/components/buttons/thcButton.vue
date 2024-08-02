<script setup lang="ts">
import {DefineComponent, PropType} from "vue";

defineProps({
  icon: {
    type: Object as PropType<DefineComponent | object>,
    default: null
  },
  content: {
    type: String,
    default: ''
  },
  style: {
    type: String,
    default: ''
  }
})
</script>
<template>
<div class="
      button
      text-style
      z-10
      bg-cover
      bg-center
      relative
      items-center
      flex
      flex-col
      justify-center
      cursor-pointer
      w-full
      py-[7px]
      px-[6px]
      border-solid
      border-[#262626]"
    :style="`background-image: url('src/assets/1.png');` + style">
  <component :is="icon"/>
  <div class="text-style">
    {{content}}
  </div>
</div>
</template>
<style scoped>

.text-style {
  font: 400 5px / 2 "Press Start 2P", sans-serif;
  letter-spacing: -0.02em;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>