<script setup lang="ts">
import home from "../components/icons/home.vue";
import collect from "../components/icons/collect.vue";
import leaders from "../components/icons/leaders.vue";
import invite from "../components/icons/invite.vue";
import shop from "../components/icons/shop.vue";

const buttons = [
  {
    to: "/",
    name: "Home",
    icon: home,
  },
  {
    to: "/collect",
    name: "Collect",
    icon: collect,
  },
  {
    to: "/leaders",
    name: "Leaders",
    icon: leaders,
  },
  {
    to: "/invite",
    name: "Invite",
    icon: invite,
  },
  {
    to: "/shop",
    name: "Shop",
    icon: shop,
  },
]

</script>
<template>
  <nav class="z-20 flex items-center justify-center wrapper border-y-[3px] border-l-[3px] border-solid border-[#262626]">
    <div
        style="background-image: url('src/assets/1.png');"
        class="z-50 bg-cover bg-center relative button-box items-center flex justify-center cursor-pointer"
        v-for="btn in buttons">
      <router-link class="w-full h-full" :to="btn.to">
        <div class="h-full w-full flex items-center justify-center">
          <component :is="btn.icon"/>
        </div>
        <div class="text-style t h-[5%] items-center flex justify-center">
          {{ btn.name }}
        </div>
      </router-link>
    </div>
  </nav>
</template>
<style scoped>
.wrapper {
  border-radius: 5px 5px 0 0;
}
.button-box {
  border-right: 3px solid #262626;
  padding: 4px 3px 16px 3px;
  width: 375px;
  height: 82px;
}
.text-style {
  font: 400 8px "Press Start 2P", sans-serif;
  letter-spacing: -0.01em;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 1px #000, 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 3px rgba(0, 0, 0, 0.8);
}
</style>