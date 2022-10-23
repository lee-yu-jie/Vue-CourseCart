<template>
  <section class="flex pr-3 mb-3 text-sm bg-blue-100 sm:text-lg">
    <input
      type="checkbox"
      class="mx-2"
      v-model="deletedList"
      :value="props.item.id"
    />
    <img
      class="object-cover w-32 h-32"
      :src="props.item.picture"
      :alt="props.item.title"
    />
    <div class="flex-1 py-1 ml-4">
      <p class="mb-2">{{ props.item.title }}</p>
      <div class="flex items-end justify-between">
        <div>
          <p class="mb-2">${{ props.item.price }}</p>
          <p>數量：{{ props.item.amount }}</p>
        </div>
        <div>
          <button
            class="p-2 rounded-md hover:bg-red-400 sm:p-3"
            @click="deleted(props.item)"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
    <div class="remove"></div>
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