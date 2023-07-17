<template>
  <div class="w-full flex justify-center pb-2 pt-2">
    <ul class="w-1/2">
      <span>{{ foodData.title }}</span>
      <li>
        <div class="w-full flex justify-between">
          {{ foodData.name }}
          <span>{{ foodData.price }}</span>
        </div>
      </li>
      <li>
        <div class="w-full flex justify-between">
          {{ foodData.name02 }}
          <span>{{ foodData.price02 }}</span>
        </div>
      </li>
      <div class="flex">{{ foodData.description02 }}</div>
      <li>
        <div class="w-full flex justify-between">
          {{ foodData.name03 }}
          <span>
            {{ foodData.price03 }}
          </span>
        </div>
      </li>
      <div class="flex">{{ foodData.description03 }}</div>
      <li>
        <div class="w-full flex justify-between">
          {{ foodData.name04 }}
          <span>{{ foodData.price04 }}</span>
        </div>
      </li>
      <div class="flex">{{ foodData.description04 }}</div>
      <li>
        <div class="w-full flex justify-between">
          {{ foodData.name05 }}
          <span>{{ foodData.price05 }}</span>
        </div>
      </li>
      <div class="w-full flex justify-between">
        {{ foodData.description05 }}
      </div>
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

<style></style>
