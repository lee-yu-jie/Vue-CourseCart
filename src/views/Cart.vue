<template>
  <div class="cart">
    <div v-if="cartList.length !== 0">
      <CartCard v-for="item in cartList" :key="item.id" :item="item"/>
      <div class="mb-2">
        <button
          class="p-1 text-xs text-white bg-red-200 rounded-xl hover:text-red-500"
          @click="deletedChecked"
        >
          刪除已選
        </button>
      </div>
      <div class="flex justify-between">
        <p>總金額：＄{{ sum }}</p>
        <button class="px-4 py-2 text-white bg-green-400 rounded-md">
          結帳
        </button>
      </div>
    </div>
    <div class="text-center" v-if="cartList.length == 0">
      目前還沒有商品在購物車喔！
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import CartCard from '@/components/CartCard.vue'
export default {
  components:{
    CartCard,
  },
  setup() {
    const store = useStore();

    const cartList = computed(() => store.getters.cartList);
    const sum = computed(() => store.getters.cartSum);
    const deletedChecked = () => {
      store.dispatch("handdeltedChecked");
    };
    return {
      cartList,
      sum,
      deletedChecked,
    };
  },
};
</script>

<style scoped>
</style>