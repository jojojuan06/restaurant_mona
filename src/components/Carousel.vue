<template>
  <div  class="carousel">
    <slot></slot>
    <button @click="next" class="next text-white font-bold p-[4px] rounded">Next</button>
    <button @click="prev" class="prev text-white font-bold p-[4px]  rounded">Prev</button>
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
  right: 0;
  background-color: rgba(0,0,0,0.4);
}
.prev {
  left: 0;
  background-color: rgba(0,0,0,0.4);
}
</style>