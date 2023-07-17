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
    </div>  -->
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
      <div class="w-full   justify-center sm:gap-2 mb-2 xl:overflow-x-visible overflow-x-scroll z-[20] flex">
        <img src="../public/images/photo-6.png" class="w-full max-h-[210px] max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[20]  hover:cursor-pointer  active:scale-[1.3] sm:hover:scale-[1.3] origin-firstScale" alt="photo">
        <img src="../public/images/photo-5.png" class="w-full max-h-[210px] max-w-[300px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[20]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top" alt="photo">
        <img src="../public/images/photo-7.png" class="w-full max-h-[210px] max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[20]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top" alt="photo">
        <img src="../public/images/photo-8.png" class="w-full max-h-[210px] max-w-[300px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[20]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top" alt="photo">
        <img src="../public/images/photo-3.png" class="w-full max-h-[210px] max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[20]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top" alt="photo">
        <img src="../public/images/photo-2.png" class="w-full max-h-[210px] max-w-[300px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[20]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top" alt="photo">
        <img src="../public/images/photo-1.png" class="w-full max-h-[210px] max-w-[222px]  border-black border-2 ml-2 transform duration-500 relative hover:z-[20]  hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top-right" alt="photo">
      </div>
      <hr class="h-[3px] bg-[#202c55]">
      <div class="flex flex-row justify-center z-10 flex-wrap">
        <span class="whitespace-nowrap ml-2 font-bold font-body text-[24px] text-black">Nos articles de presse :</span>
        <div class="ml-2 font-body text-black   text-[24px]">
          <a class="font-bold" href="https://communityimpact.com/houston/cy-fair-cypress/dining/2023/06/28/monas-french-cafe-now-open-in-cypress/">
          Communityimpact
          </a>
        </div>
        <div class="ml-2 font-body text-black fond-bold  text-[24px]">
          <a  class="font-bold" href="https://www.houstondine.com/100925386095232/Mona%E2%80%99s-French-Caf%C3%A9">
               / Houstondine
          </a>
        </div>
      </div>
      <div class="relative grow flex h-full flex-col items-center">  
        <img src="../public/images/Bandeau_2.png" class="grow object-cover h-full" alt="bandeau carte de france">
        <h2 class="flex top-2 xs:text-[3.5rem] md:top-[-25px]  shadow-title font-body absolute text-[#0D146F] text-[2.6rem]">We are open !</h2>
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

@media screen and (min-width: 768px) {
  h2 {
    font-size: 10rem!important;
    top: -25px!important;
  }
}
#app {
  overflow: hidden;
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

img:first-child {
  margin-left: 0;
}


@import url('../src/assets/css/loader.css');
</style>
