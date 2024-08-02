<script setup lang="ts">
import ProgressBar from 'lightvue/progress-bar';
import {PropType} from "vue";

defineProps({
  value: {
    type: Number as PropType<number>,
    default: 10
  }
})
</script>
<template>
  <div class="border-[3px] border-black p-[5px] bg-white rounded-[5px]">
    <ProgressBar color="#36b546" :value="value" :showValue="false"/>
  </div>
</template>
<style scoped>
.lv-progressbar {
  background: white;
}
</style>