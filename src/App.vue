<template>
    <!-- <div class="loader">
      <div class="loader__container">
        <span class="loader__quart"></span>
        <div class="loader__title">
          <h1 class="loader__text font-body text-[3rem]">Mona's French Café</h1>
          <div class="loader__point">
            <p class="loader__point--1">.</p>
            <p class="loader__point--2">.</p>
            <p class="loader__point--3">.</p>
          </div>
       </div>
      </div>
    </div> -->
    <header class="w-full h-32 flex">
      <div class="flex items-center justify-end   w-full ">
        <div class="flex justify-center md:justify-between w-full  flex-wrap md:flex-no-wrap">
          <div></div>
          <img src="../src/assets/images/Logo_1.png" alt="logo" class="max-w-[18rem] md:max-w-sm">
          <img src="../src/assets/images/Logo_3.png" alt="logo" class="hover:cursor-pointer transition duration-500 transform hover:rotate-180 md:max-w-[18rem] max-w-[3rem]">
        </div>
     </div>
    </header>
  <main class="flex-grow"> 
      <Carousel @next="next" @prev="prev" class="pb-2 pt-4  flex justify-center">
        <carousel-slide v-for="(slide, index) in Slides" :key="index" :visibleSlide="visibleSlide" :index="index"  class="mb-4 overflow-hidden flex items-center justify-center  w-full  md:min-w-[500px] max-w-[800px]">
            <img :src="require(`../public/images/${slide}.png`)" :alt="slide" class="duration-500 w-full  h-[400px] object-fill relative z-40 object-bottom rounded-md animate-fadeSlide">
        </carousel-slide>
      </Carousel>
      <div class="flex justify-center items-center  bg-banniere2 bg-no-repeat bg-cover max-w-full min-h-[44vh] bg-center">
        <div class="self-start  relative top-[50px] md:top-[-27px] ">
            <h2 class="shadow-title font-body  text-[#0D146F] text-[2.5rem] md:text-[10rem]">We are open soon !</h2>
        </div>
      </div>
  </main>
  <FooterVue/>
</template>

<script>
import FooterVue from '@/components/FooterVue.vue';
import Carousel from '@/components/Carousel.vue';
import CarouselSlide from '@/components/CarouselSlide.vue';


export default {
  name: 'App',
  components: {
    FooterVue,
    Carousel,
    CarouselSlide
  },
  mounted() {
    setInterval(this.next, 6000);
  },
  data() {
    return {
      visibleSlide:0,
      Slides: ["photo-1","photo-2", "photo-3", "photo-4", "photo-5", "photo-6" , "photo-7","photo-8"]
    }
  },
  computed:{
    sliedesLength(){
      return this.Slides.length;
    }
  },
  methods: {
    next(){
      if (this.visibleSlide >= this.sliedesLength - 1) {
        this.visibleSlide = 0;
      }else {
        this.visibleSlide++;
      }
    },
    prev(){
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.sliedesLength -1;
      }else {
        this.visibleSlide--;
      }
    }
  },
}
</script>
<style >
* { 
  margin: 0px; 
  padding: 0px; 
  box-sizing: border-box;
}
h2 {
  white-space: nowrap;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height:100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-image: url('../src/assets/images/Bandeau_1.png');
  background-repeat: no-repeat;
}

body {
  background-color: #d9d9d9;
}
html, body {
  height: 100%;
}
.carousel {
        position:relative;
        overflow: hidden;
        z-index:10;
        background-image: url('../public/images/photo-8.png');
        background-size: cover;
}
.carousel svg {
  position: absolute;
  bottom:0;
  z-index: 30;
}
.shadow-title {
  text-shadow: 2px 1px 2px white;
}
@import url('../src/assets/css/loader.css');
</style>
