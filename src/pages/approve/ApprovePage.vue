<script setup lang="ts">
import RectangleLeft from "../../components/svg/RectangleLeft.vue";
import RectangleRight from "../../components/svg/RectangleRight.vue";
import TransitionBounce from "../../components/transitions/TransitionBounce.vue";
import {ref} from "vue";
import {sliders} from "./configs.ts";
import PixelCarousel from "./components/PixelCarousel.vue";
import MainButton from "../../components/buttons/MainButton.vue";
import {useRouter} from "vue-router";
import {webApp} from "../../core/telegram/initWebApp.ts";
webApp.setHeaderColor('#2A4C3B');
let next = ref<number>(0);
const isBounce = ref(false);
const router = useRouter();
setTimeout(() => isBounce.value = true, 300);

function getCarouselItems(): NodeListOf<any> {
  return document.querySelectorAll('.item');
}

function slideCarouselNext(): void {
  let items: NodeListOf<any> = getCarouselItems();
  if (next.value >= items.length - 1) return;
  addOrRemoveHidden(items, 'right');
}

function slideCarouselBack(): void {
  let items: NodeListOf<any> = getCarouselItems();
  if (next.value <= 0) return;
  addOrRemoveHidden(items, 'left');
}

function addOrRemoveHidden(
    items: NodeListOf<any>,
    side: 'left' | 'right'
): void {
  items[next.value].classList.add('hidden');
  if (side === 'left') next.value -= 1;
  if (side === 'right') next.value += 1;
  items[next.value].classList.remove('hidden');
}

</script>
<template>
  <div class="flex relative w-full h-full">
    <div class="absolute top-0 flex flex-col w-full pt-[10px]">
      <div class="flex justify-center text-main">
        Choose your side
      </div>
      <div class="flex justify-center text-second p-[5px]">
        a lot depends on your choice
      </div>
    </div>
    <div class="flex justify-between items-center w-full h-full z-100 px-[10px] mt-[20px]">
      <div class="cursor-pointer" @click="slideCarouselBack()">
        <RectangleLeft/>
      </div>
      <div class="cursor-pointer" @click="slideCarouselNext()">
        <RectangleRight/>
      </div>
    </div>
    <div class="w-full absolute z-[-1] flex items-center justify-center h-full mt-[20px] mb-[20x]" id="carousel">
      <div :class="`pb-[20px] relative item ${slider.class}`" v-for="slider in sliders">
        <img :src="slider.src" alt="" class="rounded-[10px] border-[3px] border-solid border-[#262626]">
        <TransitionBounce>
          <div v-show="isBounce" class="absolute bottom-0 left-0 right-0 description pb-[45px] px-[20px]">
            {{ slider.text }}
          </div>
        </TransitionBounce>
        <PixelCarousel :quantityPixel="sliders.length" :next="next"/>
      </div>
    </div>
    <div class="absolute bottom-0 w-full px-[20px]">
      <MainButton background="green" @click="router.push({name: 'home'})">
        approve
      </MainButton>
    </div>
  </div>
</template>
<style scoped>
.text-main {
  font: 400 24px / 1.2 "Press Start 2P", sans-serif;
  text-align: center;
  color: #fff;
  text-shadow: 0 5px #000, 0 0 10px rgba(0, 0, 0, 0.4), 0 2px #000, 0 2px #000, 0 3px 4px rgba(0, 0, 0, 0.8);
}

.text-second {
  font: 400 10px / 1.3 "Press Start 2P", sans-serif;
  text-align: center;
  color: #71c82d;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 1px #000, 0 1px #000, 0 2px 3px rgba(0, 0, 0, 0.8);
}
.description {
  font: 400 10px / 1.5 "Press Start 2P", sans-serif;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>