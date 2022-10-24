<template>
  <section class="flex pr-3 mb-3 text-sm border-4 border-yellow-500 bg-[#ffffff90] rounded-md groove-border sm:text-lg">
    <input
      type="checkbox"
      class="mx-5" 
      v-model="deletedList"
      :value="props.item.id"
    />
    <img
      class="object-cover w-32 h-32"
      :src="props.item.picture"
      :alt="props.item.title"
    />
    <div class="flex-1 py-1 ml-4 font-bold text-purple-800">
      <p class="mb-2 ">{{ props.item.title }}</p>
      <div class="flex items-end justify-between">
        <div>
          <p class="mb-2">${{ props.item.price }}</p>
          <p>數量：{{ props.item.amount }}</p>
        </div>
        <div>
        </div>
      </div>
    </div>
    <div class="flex items-center remove">
      <button
        class="p-2 rounded-md hover:bg-red-400 sm:p-3 "
        @click="deleted(props.item)"
      >
        <font-awesome-icon icon="fa-solid fa-trash-can" />
      </button>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: ["item"],
  setup(props) {
    const store = useStore();

    const cartList = computed(() => store.getters.cartList);
    const deleted = (item) => {
      store.dispatch("handdelted", item);
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
      deleted,
      deletedList,
      props,
    };
  },
};
</script>

<style scoped>
</style>