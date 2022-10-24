<template>
  <section class="flex items-center ml-3">
    <div class="w-1/2 aspect-[8/11] wow fadeInLeft">    
      <img
      class="object-cover w-full h-full rounded-xl"
      :src="props.item.picture"
      :alt="props.item.title"
      />
    </div>
    <div class="flex flex-col justify-center w-1/2 p-3 pl-5 -ml-3 border h-44 bg-[#FFFFCC80] rounded-xl wow fadeInRight">
      <div>
        <h2 class="mb-2 font-bold text-purple-600 ">{{ props.item.title }}</h2>
        <p class="mb-2 ">${{ props.item.price }}</p>
      </div>
      <div class="flex items-end justify-between">
        <p :class="{ 'text-red-500': props.item.status !== '尚未開始'}">{{ props.item.status }}</p>
        <button
          v-if="props.item.status !== '尚未開始'"
          class="px-3 py-2 text-gray-500 bg-purple-200 rounded-full hover:bg-purple-300"
          @click="addToCart(item)"
        >
        <font-awesome-icon icon="fa-solid fa-cart-arrow-down" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import WOW from 'wow.js';

export default {
  props: ["item"],
  setup(props) {
    new WOW({ live: false }).init();
    const store = useStore();
    const addToCart = (item) => {
      store.dispatch("handaddtoCart", item);
    };
    return {
      props,
      addToCart,
    };
  },
};
</script>

<style scoped>

</style>