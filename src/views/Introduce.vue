<template lang="">
  <div class="flex w-11/12 sm:w-2/3 mx-auto aspect-[4/2] pt-8 mb-10">
    <div class="w-1/2 h-full">
      <img src="../../public/img/aboutus1.png" alt="" class="object-cover w-full h-3/5">
      <div class="flex w-full h-2/5">
        <img src="../../public/img/aboutus4.png" alt="" class="object-cover w-1/2 h-full">
        <div class="brand-slogan wow fadeInRight bg-[#544E70] text-[#FEC37D] ">
          <p>Nature</p>
          <P>Innocuous</P>
          <p>Funny</p>
        </div>
      </div>
    </div>
    <div class="w-1/2 h-full">
      <div class="flex w-full h-2/5">
        <div class="brand-slogan bg-[#FEC37D] text-[#544E70]">
          <p>Family</p>
          <p>Friends</p>
          <p>Couple</p>
        </div>
        <img src="../../public/img/aboutus3.png" alt="" class="object-cover w-1/2 h-fill">
      </div>
      <img src="../../public/img/aboutus2.png" alt="" class="object-cover w-full h-3/5">
    </div>
  </div>
  <div class=" w-3/4 text-sm lg:text-base lg:w-1/2 mx-auto aspect-[2/1] bg-[#00000090] py-8 groove-border border-4 px-6 border-yellow-500 text-white">
    <p class="mb-3">↠ AboutUs： <br> We are the home-made shop. In here, we provide several course, you can choose the one that you interesting</p>
    <p class="mb-3">↠ Business Hours：<br> 10:00 ~ 20:00</p>
    <p class="mb-3">↠ Address：<br> 31 23rd Avenue NE, Niagara,nd, 58266 </p>
    <p class="">↠ Contact：<br> +1-8446658794</p>
  </div>
</template>

<script>
import WOW from 'wow.js';
export default {
  setup(){
    new WOW({ live: false }).init();
  }
}
</script>

<style scoped>
  p{
    font-family: 'Bungee', cursive;
  }
</style>
