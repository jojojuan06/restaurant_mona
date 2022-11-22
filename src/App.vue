<template>
    <div class="loader">
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
    </div>
    <header class="w-full h-32 flex">
      <div class="flex items-center justify-end   w-full ">
        <div class="flex justify-center md:justify-between w-full  flex-wrap md:flex-no-wrap">
          <div></div>
          <img src="../src/assets/images/Logo_1.png" alt="logo" class="max-w-[18rem] md:max-w-sm">
          <img src="../src/assets/images/Logo_3.png" alt="logo" class="md:max-w-[18rem] max-w-[3rem]">
        </div>
     </div>
    </header>
  <main class="flex-grow"> 
      <Carousel @next="next" @prev="prev" class="pb-2 pt-2 bg-[#343434]">
        <carousel-slide v-for="(slide, index) in Slides" :key="index" :visibleSlide="visibleSlide" :index="index" :direction="direction" class="flex items-center justify-center  w-full  min-w-[300px]">
            <img :src="require(`../public/images/${slide}.png`)" :alt="slide" class="w-full max-w-[800px] h-[200px] object-fill rounded-md">
        </carousel-slide>
      </Carousel>
      <div class="flex justify-center items-center min-h-screen bg-center bg-banniere2 bg-no-repeat bg-cover">
        <div class="self-start pt-8">
            <h2 class="shadow-title font-body text-[#0D146F] text-[5rem] md:text-[10rem]">We are open soon !</h2>
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
  data() {
    return {
      visibleSlide:0,
      direction:'left',
      Slides: ["photo-1","photo-2", "photo-3", "photo-4", "photo-5", "photo-6" , "photo-1"]
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
      this.direction="left"
    },
    prev(){
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.sliedesLength -1;
      }else {
        this.visibleSlide--;
      }
      this.direction="right"
    }
  },
  mounted() {
    setInterval(this.next, 6000);
  },
}
</script>
<style >
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
  background-image: url('../src/assets/images/Bandeau_1.jpg');
  background-repeat: no-repeat;
}

body {
  background-color: #d9d9d9;
  
}
html, body {
  height: 100%;
  min-height: 100%;
}
.carousel {
        position:relative;
        overflow: hidden;
        z-index:10;
}
.shadow-title {
  text-shadow: 2px 1px 2px white;
}
@import url('../src/assets/css/loader.css');
</style>
