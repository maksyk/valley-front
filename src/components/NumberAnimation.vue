<script setup lang="ts">
//@ts-ignore
import NumberAnimation from "vue-number-animation";
import {PropType} from "vue";

defineProps({
  from: {
    type: Number as PropType<number>,
    default: 0
  },
  to: {
    type: Number as PropType<number>,
    default: 1000
  },
  duration: {
    type: Number as PropType<number>,
    default: 1
  },
  fractionDigits: {
    type: Number as PropType<number>,
    default: 1
  },
  style: {
    type: String as PropType<string>,
    default: ''
  }
})
</script>
<template>
  <div :class="style ? style : 'text-style'">
    <NumberAnimation
        tag="div"
        ref="number"
        :from="from"
        :to="to"
        :format="(number: number) => number.toFixed(fractionDigits)"
        :duration="duration"
        autoplay
        easing="linear"
    />
  </div>
</template>
<style scoped>
.text-style {
  font: 400 14px "Press Start 2P", sans-serif;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px #000, 0 2px rgba(0, 0, 0, 0.4), 0 1px #000, 0 0 0 1px #000, 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>
