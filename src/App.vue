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
    <header class="w-full h-32 flex bg-cover">
      <div class="flex items-center justify-end  w-full">
        <div class="flex justify-center md:justify-between w-full  flex-wrap md:flex-no-wrap">
          <div></div>
          <img src="../src/assets/images/Logo_1.png" alt="logo" class="max-w-[18rem] md:max-w-sm">
          <img src="../src/assets/images/Logo_3.png" alt="logo" class="hover:cursor-pointer transition duration-500 transform hover:rotate-180 md:max-w-[18rem] max-w-[3rem]">
        </div>
     </div>
    </header>
  <main class="flex flex-col h-full grow"> 
      <div class="w-full max-w-[100%]  justify-center sm:gap-2 mb-2 overflow-y-visible overflow-x-auto z-[999] flex">
        <img src="../public/images/photo-1.png" class="w-full  max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[1000]  hover:cursor-pointer  active:scale-[1.3] sm:hover:scale-[1.3] origin-firstScale" alt="photo">
        <img src="../public/images/photo-2.png" class="w-full  max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[1000]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150" alt="photo">
        <img src="../public/images/photo-3.png" class="w-full  max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[1000]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150" alt="photo">
        <img src="../public/images/photo-4.png" class="w-full  max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[1000]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150" alt="photo">
        <img src="../public/images/photo-5.png" class="w-full  max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[1000]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150" alt="photo">
        <img src="../public/images/photo-6.png" class="w-full  max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[1000]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150" alt="photo">
        <img src="../public/images/photo-7.png" class="w-full  max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[1000]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150" alt="photo">
        <img src="../public/images/photo-8.png" class="w-full  max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[1000]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-[1.3] origin-lastScale" alt="photo">
      </div>
      <div class="grow bg-banniere2  bg-no-repeat  bg-cover bg-center   bg-bannierecover">  
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
  min-height: 100vh;
  background-color: #d9d9d9;
}
html, body {
  height: 100%;
  padding: 0; 
  margin: 0;
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
  min-height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

header {
  background-image: url('../src/assets/images/Bandeau_1.png');
  background-repeat: no-repeat;
}



@import url('../src/assets/css/loader.css');
</style>
