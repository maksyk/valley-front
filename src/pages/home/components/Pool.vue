<script setup lang="ts">
import {getUrlPath} from "../../../core/utils.ts";

</script>
<template>
  <div class="flex border-[3px] border-solid border-[#262626] rounded-[5px] w-[30%]">
    <div
        :style="`background-image: url('${getUrlPath()}/assets/6.png');`"
        class="bg-cover bg-center rounded-[10px] w-full h-full">
    </div>
  </div>
</template>
<style scoped>
</style>