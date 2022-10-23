<template>
  <div class="cart">
    <div v-if="cartList.length !== 0">
      <section
        v-for="item in cartList"
        :key="item.id"
        class="bg-blue-100 flex mb-3 pr-3 text-sm sm:text-lg"
      >
        <input
          type="checkbox"
          class="mx-2"
          v-model="deletedArr.data"
          :value="item.id"
        />
        <img
          class="w-32 h-32 object-cover"
          :src="item.picture"
          :alt="item.title"
        />
        <div class="ml-4 py-1 flex-1">
          <p class="mb-2">{{ item.title }}</p>
          <div class="flex justify-between items-end">
            <div>
              <p class="mb-2">${{ item.price }}</p>
              <p>數量：{{ item.amount }}</p>
            </div>
            <div>
              <button
                class="hover:bg-red-400 p-2 sm:p-3 rounded-md"
                @click="deleted(item)"
              >
                🗑️
              </button>
            </div>
          </div>
        </div>
        <div class="remove"></div>
      </section>
      <div class="mb-2">
        <button
          class="bg-red-200 text-xs p-1 rounded-xl text-white hover:text-red-500"
          @click="deletedChecked"
        >
          刪除已選
        </button>
      </div>
      <div class="flex justify-between">
        <p>總金額：＄{{ sum }}</p>
        <button class="bg-green-400 text-white px-4 py-2 rounded-md">
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
import { computed, reactive } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const deletedArr = reactive({
      data: [],
    });
    const cartList = computed(() => store.getters.cartList);
    const deleted = (item) => {
      store.dispatch("handdelted", item);
    };
    const sum = computed(() => store.getters.cartSum);
    const deletedChecked = () => {
      console.log(deletedArr.data);
      store.dispatch("handdeltedChecked", deletedArr.data);
    };
    return {
      cartList,
      sum,
      deleted,
      deletedArr,
      deletedChecked,
    };
  },
};
</script>

<style scoped>
</style>