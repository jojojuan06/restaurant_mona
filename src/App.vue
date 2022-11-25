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
      <div class="flex items-center justify-end  w-full">
        <div class="flex justify-center md:justify-between w-full  flex-wrap md:flex-no-wrap">
          <div></div>
          <img src="../src/assets/images/Logo_1.png" alt="logo" class="max-w-[18rem] md:max-w-sm">
          <img src="../src/assets/images/Logo_3.png" alt="logo" class="hover:cursor-pointer transition duration-500 transform hover:rotate-180 md:max-w-[18rem] max-w-[3rem]">
        </div>
     </div>
    </header>
  <main class="flex-grow h-full"> 
      <div class="w-full justify-center pb-2  flex overflow-scroll md:overflow-visible">
        <img src="../public/images/photo-1.png" class="w-1/4 md:w-[12%] border-black border-2 ml-2 transform duration-300 relative hover:z-20  hover:cursor-pointer hover:scale-150 origin-firstScale" alt="photo">
        <img src="../public/images/photo-2.png" class="w-1/4 md:w-[12%] border-black border-2 ml-2 transform duration-300 relative hover:z-20  hover:cursor-pointer hover:scale-150" alt="photo">
        <img src="../public/images/photo-3.png" class="w-1/4 md:w-[12%] border-black border-2 ml-2 transform duration-300 relative hover:z-20  hover:cursor-pointer hover:scale-150" alt="photo">
        <img src="../public/images/photo-4.png" class="w-1/4 md:w-[12%] border-black border-2 ml-2 transform duration-300 relative hover:z-20  hover:cursor-pointer hover:scale-150" alt="photo">
        <img src="../public/images/photo-5.png" class="w-1/4 md:w-[12%] border-black border-2 ml-2 transform duration-300 relative hover:z-20  hover:cursor-pointer hover:scale-150" alt="photo">
        <img src="../public/images/photo-6.png" class="w-1/4 md:w-[12%] border-black border-2 ml-2 transform duration-300 relative hover:z-20  hover:cursor-pointer hover:scale-150" alt="photo">
        <img src="../public/images/photo-7.png" class="w-1/4 md:w-[12%] border-black border-2 ml-2 transform duration-300 relative hover:z-20  hover:cursor-pointer hover:scale-150" alt="photo">
        <img src="../public/images/photo-8.png" class="w-1/4 md:w-[12%] border-black border-2 ml-2 transform duration-300 relative hover:z-20  hover:cursor-pointer hover:scale-150 origin-lastScale" alt="photo">
      </div>
      <div class="relative bg-banniere2 h-screen bg-no-repeat bg-cover  bg-center w-full bg-bannierecover">
          <h2 class="shadow-title font-body  text-[#0D146F] text-[2.5rem] md:text-[10rem]">We are open soon !</h2>
      </div>
  </main>
  <FooterVue/>
</template>

<script>
import FooterVue from '@/components/FooterVue.vue';



export default {
  name: 'App',
  components: {
    FooterVue,
  },
}
</script>
<style >
* { 
  box-sizing: border-box;
  padding: 0;
}
body {
  background-color: #d9d9d9;
  padding: 0px; 
}
html, body {
  height: 100%;
  margin: 0
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



@import url('../src/assets/css/loader.css');
</style>
