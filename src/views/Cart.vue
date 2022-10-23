<template>
  <div class="cart">
    <div v-if="cartList.length !== 0">
      <section
        v-for="item in cartList"
        :key="item.id"
        class="flex pr-3 mb-3 text-sm bg-blue-100 sm:text-lg"
      >
        <input
          type="checkbox"
          class="mx-2"
          v-model="deletedList"
          :value="item.id"
        />
        <img
          class="object-cover w-32 h-32"
          :src="item.picture"
          :alt="item.title"
        />
        <div class="flex-1 py-1 ml-4">
          <p class="mb-2">{{ item.title }}</p>
          <div class="flex items-end justify-between">
            <div>
              <p class="mb-2">${{ item.price }}</p>
              <p>數量：{{ item.amount }}</p>
            </div>
            <div>
              <button
                class="p-2 rounded-md hover:bg-red-400 sm:p-3"
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
// import { get } from "http";
import { computed, reactive } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    // const deletedArr = reactive({
    //   data: [],
    // });
    const cartList = computed(() => store.getters.cartList);
    const deleted = (item) => {
      store.dispatch("handdelted", item);
    };
    const sum = computed(() => store.getters.cartSum);
    const deletedChecked = () => {
      // console.log(deletedArr.data);
      store.dispatch("handdeltedChecked");
    };
    const deletedList = computed({
      get(){
        return store.getters.deletedList
      },
      set(value){
        store.dispatch('handaddtodeletedArr', value)
      }
    })
    return {
      cartList,
      sum,
      deleted,
      // deletedArr,
      deletedChecked,
      deletedList,
    };
  },
};
</script>

<style scoped>
</style>