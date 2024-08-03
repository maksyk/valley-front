<script setup lang="ts">
import Leaf from "../../../components/svg/leaf.vue";
import Pineapple from "../../../components/svg/pineapple.vue";
</script>
<template>
  <div class="relative w-full pt-[5px]">
    <div class="absolute z-20 header-balance top-0">
      Total balance
    </div>
    <div style="background-image: url('src/assets/1.png');"
         class="
      rounded-[5px]
      text-style
      z-10
      bg-cover
      bg-center
      relative
      items-center
      flex
      flex-row
      justify-start
      cursor-pointer
      w-full
      py-[7px]
      px-[6px]
      border-[3px]
      border-solid
      border-[#262626]">
      <div class="flex flex-col pl-[10px]">
        <leaf/>
        <pineapple/>
      </div>
      <div class="flex flex-col">
        <div class="text-balance p-[3px]">
          622.32
        </div>
        <div class="under-balance p-[3px]">
          1424.0123
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header-balance {
  font: 400 8px / 1.66667 "Press Start 2P", sans-serif;
  letter-spacing: -0.02em;
  text-align: center;
  color: #c6c6c6;
  text-shadow: 0 2px #000, 0 0 2px rgba(80, 80, 80, 0.4), 0 2px 3px rgba(80, 80, 80, 0.8);
}
.text-balance {
  font: 400 14px "Press Start 2P", sans-serif;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
}
.under-balance {
  font: 400 8px "Press Start 2P", sans-serif;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>