<template>
  <header
    class="py-6 "
  >
    <div class="py-3 mx-auto border shadow-md w-[350px] rounded-3xl">
      <h1 class="mb-2 text-center"><span class="text-5xl brand-name">Medusa</span>手工坊</h1>
      <div  class="flex items-center justify-center">
        <router-link to="/" class="mr-4 hover:text-[#B95756]">About Us</router-link>
        |
        <router-link to="/Course" class="mx-4 hover:text-[#B95756]">Course List</router-link>
        |
        <router-link to="Cart" class="ml-4 hover:text-[#B95756]">Cart ({{ amount }})</router-link>
      </div>
    </div>

  </header>
</template>

<script>
import { ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  setup(props) {
    const store = useStore();
    const amount = ref(0);

    watch(store.getters.cartList, (newlist) => {
      amount.value = newlist.length;
    });

    return {
      amount,
    };
  },
};
</script>

<style scoped>
</style>