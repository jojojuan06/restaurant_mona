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
        <div class="flex justify-center md:justify-between w-full  flex-wrap md:flex-no-wrap px-2">
          <div></div>
          <img src="../src/assets/images/Logo_1.png" alt="logo" class="mx-4 md:mx-0 max-w-[18rem] md:max-w-sm">
          <img src="../src/assets/images/Logo_3.png" alt="logo" class="hover:cursor-pointer   md:max-w-[18rem] max-w-[3rem]">
        </div>
     </div>
    </header>
  <main class="flex flex-col h-full grow"> 
      <div class="w-full   justify-center sm:gap-2 mb-2 sm:overflow-x-visible overflow-x-scroll z-[20] flex">
        <img src="../public/images/photo-6.png" class="w-full max-h-[220px] max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[20]  hover:cursor-pointer  active:scale-[1.3] sm:hover:scale-[1.3] origin-firstScale" alt="photo">
        <img src="../public/images/photo-5.png" class="w-full max-h-[220px] max-w-[300px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[20]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top" alt="photo">
        <img src="../public/images/photo-7.png" class="w-full max-h-[220px] max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[20]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top" alt="photo">
        <img src="../public/images/photo-8.png" class="w-full max-h-[220px] max-w-[300px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[20]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top" alt="photo">
        <img src="../public/images/photo-3.png" class="w-full max-h-[220px] max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[20]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top" alt="photo">
        <img src="../public/images/photo-2.png" class="w-full max-h-[220px] max-w-[300px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[20]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top" alt="photo">
        <img src="../public/images/photo-1.png" class="w-full max-h-[220px] max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[20]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top" alt="photo">
      </div>
      <div class="relative grow flex h-full flex-col items-center">  
        <img src="../public/images/Bandeau_2.png" class="grow object-cover h-full" alt="bandeau carte de france">
        <h2 class="flex top-2 xs:text-[3.5rem] md:top-[-30px]  shadow-title font-body absolute text-[#0D146F] text-[2.6rem] md:text-[10rem]">We are open soon !</h2>
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
