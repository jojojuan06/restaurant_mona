<template>
  <div  class="carousel">
    <slot></slot>
    <button @click="next" class="md:right-[15%] w-24 text-center duration-300 next text-white font-bold p-[4px] rounded">Suivant</button>
    <button @click="prev" class="md:left-[15%] w-24  text-center duration-300  prev text-white font-bold p-[4px]  rounded">Précédent</button>
  </div>
</template>

<script>
export default {


data() {
  return {
    
  }
},
methods: {
  next(){
    this.$emit('next')
  },
  prev(){
    this.$emit('prev')
  }
},
}
</script>

<style>
.carousel {
  position: relative;
}
button {
  margin-left: 0.5rem!important;
  margin-right: 0.5rem!important;
  position:absolute;
  height: 40px;
  width: 50px;
  top: calc(50% - 20px);
}
button:active, button:hover {
  outline: none;
  cursor: pointer;
}
.next {
  z-index: 50;
  right: 0;
  background-color: rgba(0,0,0,0.6);
}
.prev {
  z-index: 45;
  left: 0;
  background-color: rgba(0,0,0,0.4);
}
</style>