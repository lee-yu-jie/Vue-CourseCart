<template>
  <header
    class="h-12 border bg-blue-200 flex justify-center items-center shadow-md mb-6"
  >
    <router-link to="/" class="mr-4 hover:text-red-500">課程列表</router-link>
    |
    <router-link to="Cart" class="ml-4 hover:text-red-500"
      >購物車({{ amount }})</router-link
    >
  </header>
</template>

<script>
import { ref, watch, reactive, computed } from "vue";
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