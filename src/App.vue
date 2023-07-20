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
  <header class="w-full h-32 flex bg-cover">
    <div class="flex items-center justify-end w-full flex-wrap md:flex-nowrap">
      <div class="flex justify-center w-full md:w-[62%] md:flex-no-wrap">
        <img
          src="../src/assets/images/Logo_1.png"
          alt="logo"
          class="mx-4 md:mx-0 max-w-[18rem] md:max-w-sm"
        />
      </div>
      <div class="flex md:w-[20%] w-full md:justify-evenly justify-center">
        <div class="flex flex-col self-center mr-2 font-bold text-[#0d146f]">
          <a target="_blank" href="https://www.facebook.com/MonaFrenchCafe"
            ><font-awesome-icon :icon="['fab', 'square-facebook']" /> Facebook</a
          >
          <a target="_blank" href="https://www.instagram.com/monas_french_cafe_/"
            ><font-awesome-icon :icon="['fab', 'square-instagram']" /> Instagram</a
          >
        </div>
        <img
          src="../src/assets/images/Logo_3.png"
          alt="logo"
          class="hover:cursor-pointer md:max-w-[18rem] max-w-[3rem]"
        />
      </div>
    </div>
  </header>
  <main class="flex flex-col h-full grow">
    <RouterView />
  </main>
  <FooterVue />
</template>

<script>
import FooterVue from "@/components/FooterVue.vue";

export default {
  name: "App",
  components: {
    FooterVue,
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
}
body {
  min-height: 100vh;
}
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
h2 {
  white-space: nowrap;
}

@media screen and (min-width: 768px) {
  h2 {
    font-size: 8rem !important;
    top: -25px !important;
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
  background-image: url("../src/assets/images/Bandeau_1.png");
  background-repeat: no-repeat;
}

img:first-child {
  margin-left: 0;
}

@import url("../src/assets/css/loader.css");
</style>
