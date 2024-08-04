<script setup lang="ts">
</script>
<template>
  <Transition name="PopUp">
    <slot></slot>
  </Transition>
</template>
<style>
.PopUp-enter-active,
.PopUp-leave-active {
  transition: all 0.5s ease-out;
}
.PopUp-enter-from,
.PopUp-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>