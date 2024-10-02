<template>
  <div class="w-full flex justify-center">
    <ul class="md:w-[60%] bg-gray-400 p-2">
      <div
        class="font-bold text-black text-center w-full font-sans flex-wrap flex justify-center"
      >
        <span class="justify-center w-1/2">{{ foodData.title }}</span>
      </div>
      <div class="text-black text-center w-full">
        {{ foodData.titleDescription }}
      </div>
      <div class="w-full justify-center flex">
        <img
          class="w-[6rem]"
          v-if="foodData.image != null"
          :src="foodData.image"
          alt="french flag"
        />
      </div>
      <li>
        <div class="w-full flex justify-between font-bold text-black">
          {{ foodData.name }}
          <span>{{ foodData.price }}</span>
        </div>
      </li>
      <div class="flex text-black">{{ foodData.description }}</div>
      <li>
        <div class="w-full flex justify-between font-bold text-black">
          {{ foodData.name02 }}
          <span>{{ foodData.price02 }}</span>
        </div>
      </li>
      <div class="flex text-black text-start">{{ foodData.description02 }}</div>
      <li>
        <div class="w-full flex justify-between font-bold text-black">
          {{ foodData.name03 }}
          <span>
            {{ foodData.price03 }}
          </span>
        </div>
      </li>
      <div class="flex text-black text-start">{{ foodData.description03 }}</div>
      <li>
        <div class="w-full flex justify-between font-bold text-black">
          {{ foodData.name04 }}
          <span>{{ foodData.price04 }}</span>
        </div>
      </li>
      <div class="flex text-black text-start">{{ foodData.description04 }}</div>
      <li>
        <div class="w-full flex justify-between font-bold text-black">
          {{ foodData.name05 }}
          <span>{{ foodData.price05 }}</span>
        </div>
      </li>
      <li class="w-full">
        <div class="flex justify-center text-black flex-wrap">
          {{ foodData.suggestion05 }}
          <span class="font-thin ml-1">{{ foodData.suggestionPrice05 }}</span>
        </div>
      </li>
      <div class="flex text-black text-start">{{ foodData.description05 }}</div>
      <li>
        <div class="w-full flex justify-between font-bold text-black">
          {{ foodData.name06 }}
          <span>{{ foodData.price06 }}</span>
        </div>
        <div class="flex text-black text-start">{{ foodData.description06 }}</div>
      </li>
      <li>
        <div class="w-full flex justify-between font-bold text-black">
          {{ foodData.name07 }}
          <span>{{ foodData.price07 }}</span>
        </div>
      </li>
      <div class="flex text-black text-start">{{ foodData.description07 }}</div>
      <li>
        <div class="w-full flex justify-between text-black font-bold">
          {{ foodData.name08 }}
          <span>{{ foodData.price08 }}</span>
        </div>
        <div class="flex text-black text-start">{{ foodData.description08 }}</div>
      </li>
      <li>
        <div class="w-full flex justify-between text-black font-bold">
          {{ foodData.name09 }}
          <span>{{ foodData.price09 }}</span>
        </div>
        <div class="flex text-black text-start">{{ foodData.description09 }}</div>
      </li>
      <li>
        <div class="w-full flex justify-between text-black font-bold">
          {{ foodData.name10 }}
          <span>{{ foodData.price10 }}</span>
        </div>
        <div class="flex text-black text-start">{{ foodData.description10 }}</div>
      </li>
      <div class="w-full justify-center flex">
        <img
          class="w-[3rem]"
          v-if="foodData.image02 != null"
          :src="foodData.image02"
          alt="french flag"
        />
      </div>
      <hr class="bg-black h-[2px]" />
    </ul>
  </div>
</template>

<script>
export default {
  name: "FoodCard",
  props: ["foodData"],
};
</script>

<style>
span {
  font-weight: bold;
  color: black;
}
</style>
