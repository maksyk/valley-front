<script setup lang="ts">
import Timer from "../Timer.vue";
import {PropType} from "vue";

defineProps({
  time: {
    type: Number as PropType<number>,
    default: 10000
  }
})

</script>
<template>
  <button class="flex justify-center w-full">
    <Timer :time="time"/>
  </button>
</template>
<style scoped>
</style>