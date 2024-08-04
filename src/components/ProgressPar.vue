<script setup lang="ts">
import ProgressBar from 'lightvue/progress-bar';
import {PropType} from "vue";

defineProps({
  value: {
    type: Number as PropType<number>,
    default: 10
  },
  borderSize: {
    type: Number as PropType<number>,
    default: 3
  },
  rounded: {
    type: Number as PropType<number>,
    default: 5
  },
  padding: {
    type: Number as PropType<number>,
    default: 5
  }
})
</script>
<template>
  <div :class="`border-[${borderSize}px] border-black p-[${padding}px] bg-white rounded-[${rounded}px]`">
    <ProgressBar color="#36b546" :value="value" :showValue="false"/>
  </div>
</template>
<style scoped>
.lv-progressbar {
  background: white;
}
</style>