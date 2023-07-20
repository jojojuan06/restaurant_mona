<template>
  <div class="bg-[#eeb685]">
    <div class="w-full relative flex justify-center items-center flex-col">
      <div class="flex text-black hover:cursor-pointer p-1 justify-center">
        <button
          class="text-white rounded-full bg-[#0d146f] px-2 border-red-500 border-2 hover:shadow-lg hover:shadow-[black]"
        >
          <router-link :to="{ path: '/' }">&#129056; Home Page</router-link>
        </button>
      </div>
      <hr class="bg-[#0d146f] h-[4px] w-full" />
      <div class="md:w-[60%] pt-2">
        <img
          class="w-full"
          src="../assets/images/photo-9.png"
          alt="mise en avant de produit"
        />
      </div>
      <div class="flex w-full justify-center absolute bottom-1 md:bottom-8">
        <div class="flex md:w-1/2 flex-col">
          <p class="text-[4vw] md:text-[1.8vw]">15014 Spring Cypress Rd 77429 Cypress</p>
          <p class="text-[4vw] md:text-[1.8vw]">
            <strong class="text-red-500"> Reservation prefered </strong>
          </p>
          <p class="text-[4vw] md:text-[1.8vw]">
            phone
            <strong
              >281.213.4715 or
              <a
                target="_blank"
                href="https://www.facebook.com/MonaFrenchCafe"
                class="text-[4vw] md:text-[1.8vw] text-[#304681] underline"
              >
                Facebook</a
              >
              |
              <a
                target="_blank"
                href="https://www.instagram.com/monas_french_cafe_/"
                class="underline text-[4vw ] md:text-[1.8vw] whitespace-nowrap text-[#304681] font-bold"
                >Instagram</a
              >
            </strong>
          </p>
          <p class="underline text-[4vw] md:text-[1.8vw] whitespace-nowrap">
            Mona's french Café | Cypress TX | Facebook
          </p>
        </div>
      </div>
    </div>
    <food-menus-vue></food-menus-vue>
    <div class="flex justify-end bottom-10 pb-4 mt-2 mr-16 relative" @click="scrollUp">
      <div
        class="absolute bg-[#343434] hover:cursor-pointer rounded-full px-[10px] py-0 hover:scale-[1.1] duration-500 text-white pb-[4px] pt-[1px] text-xl"
      >
        &#x2191;
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import FoodMenusVue from "../components/FoodMenusList.vue";
export default {
  components: { FoodMenusVue },
  methods: {
    scrollUp() {
      window.scrollTo({
        top: 0,
        //remonter doux
        behavior: "smooth",
      });
    },
  },
};
</script>

<style></style>
