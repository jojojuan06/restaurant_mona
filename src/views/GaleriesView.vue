<template>
  <div class="w-full relative flex justify-center items-center flex-col">
    <div class="grid text-black hover:cursor-pointer p-1 justify-center">
      <button
        class="text-white rounded-full bg-[#0d146f] px-2 border-red-500 border-2 hover:shadow-lg hover:shadow-[black]"
      >
        <router-link :to="{ path: '/' }">&#129056; Home Page</router-link>
      </button>
    </div>
    <hr class="bg-[#0d146f] h-[4px] w-full" />
  </div>
  <div class="grid grid-cols-1 xs:grid-cols-2 midScreen:!grid-cols-4 gap-2 m-auto p-1">
    <div v-for="(image, i) in images" :key="i">
      <img class="h-full max-w-full rounded-lg" :src="image.img_url" alt="" />
    </div>
  </div>
  <div class="flex justify-end bottom-10 pb-4 mt-2 mr-16 relative" @click="scrollUp">
    <div
      class="absolute bg-[#343434] hover:cursor-pointer rounded-full px-[10px] py-0 hover:scale-[1.1] duration-500 text-white pb-[4px] pt-[1px] text-xl"
    >
      &#x2191;
    </div>
  </div>
</template>

<script>
const image_1 = require("../assets/images/image00001.png");
const image_2 = require("../assets/images/image00002.png");
const image_3 = require("../assets/images/image00003.png");
const image_4 = require("../assets/images/image00004.png");
const image_5 = require("../assets/images/image00005.png");
const image_6 = require("../assets/images/image00006.png");
const image_7 = require("../assets/images/image00007.png");
const image_8 = require("../assets/images/image00008.png");
const image_9 = require("../assets/images/image00009.png");
const image_10 = require("../assets/images/image00010.png");
const image_11 = require("../assets/images/image00011.png");
const image_12 = require("../assets/images/image00012.png");
const image_13 = require("../assets/images/image00013.png");
const image_14 = require("../assets/images/image00014.png");
const image_15 = require("../assets/images/image00015.png");
const image_16 = require("../assets/images/image00016.png");
const image_17 = require("../assets/images/image00017.png");
const image_18 = require("../assets/images/image00018.png");
const image_19 = require("../assets/images/image00019.png");
const image_20 = require("../assets/images/image00020.png");
const image_21 = require("../assets/images/image00021.png");
const image_22 = require("../assets/images/image00022.png");
const image_23 = require("../assets/images/image00023.png");
export default {
  name: "Galeries",
  data() {
    return {
      images: [
        { img_url: image_1 },
        { img_url: image_2 },
        { img_url: image_3 },
        { img_url: image_4 },
        { img_url: image_5 },
        { img_url: image_6 },
        { img_url: image_7 },
        { img_url: image_8 },
        { img_url: image_9 },
        { img_url: image_10 },
        { img_url: image_11 },
        { img_url: image_12 },
        { img_url: image_13 },
        { img_url: image_14 },
        { img_url: image_15 },
        { img_url: image_16 },
        { img_url: image_17 },
        { img_url: image_18 },
        { img_url: image_19 },
        { img_url: image_20 },
        { img_url: image_21 },
        { img_url: image_22 },
        { img_url: image_23 },
      ],
    };
  },
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
