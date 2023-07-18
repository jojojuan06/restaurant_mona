<template>
  <div class="bg-[#eeb685]">
    <div class="w-full relative flex justify-center items-center">
      <div class="w-[60%]">
        <img
          class="w-full"
          src="../assets/images/photo-9.png"
          alt="mise en avant de produit"
        />
      </div>
      <div class="flex w-full justify-center absolute bottom-1 md:bottom-12">
        <div class="flex md:w-1/2 flex-col">
          <p class="text-[2vw]">15014 Spring Cypress Rd 77429 Cypress</p>
          <p class="text-[2vw]">
            <strong class="text-red-500"> Reservation prefered </strong>
          </p>
          <p class="text-[2vw]">
            phone <strong class="text-[#304681]">281.213.4715</strong> or Facebook
          </p>
          <p class="underline text-[2vw] whitespace-nowrap">
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
