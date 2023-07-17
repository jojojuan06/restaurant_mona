<template>
  <div>
    <div class="w-full relative">
      <img
        class="w-full"
        src="../assets/images/photo-9.png"
        alt="mise en avant de produit"
      />
      <div class="flex w-full justify-center absolute bottom-1 md:bottom-12">
        <div class="flex md:w-1/2 flex-col">
          <p class="text-[2.5vw]">15014 Spring Cypress Rd 77429 Cypress</p>
          <p class="text-[2.5vw]">
            <strong class="text-red-500"> Reservation prefered </strong>
          </p>
          <p class="text-[2vw]">
            phone <strong class="text-[#304681]">281.213.4715</strong> or Facebook
          </p>
          <p class="underline text-[2.5vw] whitespace-nowrap">
            Mona's french Café | Cypress TX | Facebook
          </p>
        </div>
      </div>
    </div>
    <food-menus-vue></food-menus-vue>
  </div>
</template>

<script>
import FoodMenusVue from "../components/FoodMenusList.vue";
export default {
  components: { FoodMenusVue },
};
</script>

<style></style>
