<script setup lang="ts">
import {getUrlPath} from "../../../core/utils.ts";
</script>
<template>
    <div
        :style="`background-image: url('${getUrlPath()}/assets/7.png');`"
        class="bg-cover bg-center w-full rounded-[10px] h-full">
    </div>
</template>
<style scoped>
</style>