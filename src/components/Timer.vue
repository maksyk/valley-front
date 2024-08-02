<script setup lang="ts">

defineProps({
  time: {
    type: Number,
    required: true,
  },
});

const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);
const emit = defineEmits(["end"]);
const handler = () => emit("end");

</script>
<template>
  <vue-countdown :time="time" v-slot="{ hours, minutes, seconds }" @end="handler">
    <div class="text-style">
      {{ `${formatNumber(hours)}` }}:{{ formatNumber(minutes) }}:{{ formatNumber(seconds) }}
    </div>
  </vue-countdown>
</template>
<style>
.text-style {
  font: 400 14px "Press Start 2P", sans-serif;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px #000, 0 2px rgba(0, 0, 0, 0.4), 0 1px #000, 0 1px #000, 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>