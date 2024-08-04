<script setup lang="ts">
import {getUrlPath} from "../../../core/utils.ts";
</script>
<template>
    <div
        :style="`background-image: url('${getUrlPath()}/assets/7.png');`"
        class="bg-cover bg-center w-full border-[3px] border-solid border-[#262626] rounded-[12px] h-full">
    </div>
</template>
<style scoped>
</style>