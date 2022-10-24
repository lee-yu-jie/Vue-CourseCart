<template>
  <div id="app">
    <Header :cartlist="cartlist" />
    <main >
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { reactive } from "vue";
import 'animate.css';
import WOW from 'wow.js';
export default {
  components: {
    Header,
  },
  setup() {
    let cartlist = reactive([]);

    new WOW({ live: false }).init();
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
@import url('https://fonts.googleapis.com/css2?family=Bungee&family=Gloria+Hallelujah&display=swap');
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(../public/img/backgolden.png);
  min-height: 100vh;
}
.router-link-active {
  background: #876fa1;
  color: white;
  border: 2px solid gold;
  padding: .5em;
  border-radius: 1em;
}

.groove-border{
  border-style: groove;
}

.brand-name, a{
  font-family: 'Gloria Hallelujah', cursive;
}
.font-shadow {
  letter-spacing: 10px;
  font-weight: 700;
  color: #e7bc7b;
  text-shadow: 4px 4px 0 #4f22b1;
        }
</style>
