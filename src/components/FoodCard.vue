<template>
  <div class="w-full flex justify-center pb-2 pt-2">
    <ul class="w-[60%]">
      <div class="font-bold text-black text-start w-full">{{ foodData.title }}</div>
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
      <li>
        <div class="w-full flex justify-between font-bold text-black">
          {{ foodData.name02 }}
          <span>{{ foodData.price02 }}</span>
        </div>
      </li>
      <div class="flex">{{ foodData.description02 }}</div>
      <li>
        <div class="w-full flex justify-between font-bold text-black">
          {{ foodData.name03 }}
          <span>
            {{ foodData.price03 }}
          </span>
        </div>
      </li>
      <div class="flex">{{ foodData.description03 }}</div>
      <li>
        <div class="w-full flex justify-between font-bold text-black">
          {{ foodData.name04 }}
          <span>{{ foodData.price04 }}</span>
        </div>
      </li>
      <div class="flex">{{ foodData.description04 }}</div>
      <li>
        <div class="w-full flex justify-between font-bold text-black">
          {{ foodData.name05 }}
          <span>{{ foodData.price05 }}</span>
        </div>
      </li>
      <div class="flex">{{ foodData.description05 }}</div>
      <li>
        <div class="w-full flex justify-between font-bold text-black">
          {{ foodData.name06 }}
          <span>{{ foodData.price06 }}</span>
        </div>
      </li>
      <li>
        <div class="w-full flex justify-between font-bold text-black">
          {{ foodData.name07 }}
          <span>{{ foodData.price07 }}</span>
        </div>
      </li>
      <div class="flex">{{ foodData.description07 }}</div>
      <li>
        <div class="w-full flex justify-between">
          {{ foodData.name08 }}
          <span>{{ foodData.price08 }}</span>
        </div>
      </li>
    </ul>
  </div>
  <hr class="bg-black h-[2px]" />
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
