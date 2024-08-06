<script setup lang="ts">
import {PropType} from "vue";

defineProps({
  quantityPixel: {
    type: Number as PropType<number>,
    default: 0
  },
  next: {
    type: Number as PropType<number>,
    default: 0
  }
})

</script>
<template>
  <div class="flex w-full justify-center flex-row absolute bottom-0 gap-2">
    <div
        v-for="n in quantityPixel"
        class="pixel pixel-shadow border-[1px] border-solid border-[#262626]"
        :class="n === next + 1 ? 'bg-[#71c82d] w-[19px] h-[10px]' : 'w-[10px] h-[10px] bg-[#4c4c4c]'">
    </div>
  </div>
</template>
<style scoped>
.pixel-shadow {
  box-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>