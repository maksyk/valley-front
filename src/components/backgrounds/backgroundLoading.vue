<script setup lang="ts">
import {getUrlPath} from "../../core/utils.ts";
</script>
<template>
    <div
        :style="`background-image: url('${getUrlPath()}/assets/15.png');`"
        class="absolute bg-cover bg-center h-[100dvh]">
    </div>
</template>
<style scoped>
</style>