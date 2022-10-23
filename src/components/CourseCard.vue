<template>
  <section class="border rounded-xl">
    <img
      class="w-full h-32 object-cover rounded-xl"
      :src="props.item.picture"
      :alt="props.item.title"
    />
    <div class="p-3 flex flex-col justify-between h-40">
      <div>
        <h2 class="mb-2">{{ props.item.title }}</h2>
        <p class="mb-2">${{ props.item.price }}</p>
      </div>
      <div class="flex justify-between items-end">
        <p>{{ props.item.status }}</p>
        <button
          v-if="props.item.status !== '尚未開始'"
          class="bg-blue-200 text-gray-500 px-2 sm:py-2 sm:px-3 hover:bg-blue-300 rounded-sm"
          @click="addToCart(item)"
        >
          🛒
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["item"],
  setup(props) {
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