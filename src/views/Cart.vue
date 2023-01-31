<template>
  <div class="px-3 cart">
    <div v-if="cartList.length !== 0" class="w-full mx-auto sm:w-2/3 ">
      <CartCard v-for="item in cartList" :key="item.id" :item="item"/>
      <div class="flex justify-between mb-2">
        <button
          class="p-2 text-xs text-white bg-red-200 rounded-xl hover:text-red-500"
          @click="deletedChecked"
        >
          刪除已選
        </button>
        <p class="py-3 text-xl font-bold text-purple-700 ">總金額：＄{{ sum }}</p>
      </div>
      <div class="flex justify-end">
        <button class="px-4 py-2 text-white bg-green-400 rounded-md">
          結帳
        </button>
      </div>
    </div>
    <div class="sm:text-3xl mx-auto font-shadow border-4 border-yellow-500 bg-[#ffffff90] rounded-md groove-border h-8 sm:h-12 w-fit text-sm  "  v-if="cartList.length == 0" ref="notCart">
      
    </div>
  </div>
</template>

<script>
import { computed, ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import CartCard from '@/components/CartCard.vue'
export default {
  components:{
    CartCard,
  },
  setup() {
    const store = useStore();
    const notCart = ref(null)
    let timer = null
    const data = '目前還沒有商品在購物車喔！'.split('')
    
    const cartList = computed(() => store.getters.cartList);
    const sum = computed(() => store.getters.cartSum);
    const deletedChecked = () => {
      store.dispatch("handdeltedChecked");
    };
    const handnotCart = () => {
      let index = 0
      if( cartList.value.length === 0){
        function writing() {
          if (index < data.length) {
            notCart.value.innerHTML += data[index ++]
          } else {
            clearInterval(timer)
          }
        }
      timer = setInterval(writing, 200)
      }
    }
    watch(cartList.value, () =>{
        handnotCart()
    })
    onMounted(() => {
      handnotCart()
    })
    return {
      cartList,
      sum,
      deletedChecked,
      notCart,
    };
  },
};
</script>

<style scoped>

</style>