<template>
  <div id="app">
    <Header :cartlist="cartlist" />
    <main class="px-5">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { reactive } from "vue";
export default {
  components: {
    Header,
  },
  setup() {
    let cartlist = reactive([]);

    const handcartlist = (item) => {
      cartlist[0] = item;
      // console.log(cartlist);
    };
    return {
      handcartlist,
      cartlist,
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.router-link-active {
  color: blue;
}
</style>
