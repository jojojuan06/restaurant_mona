<template>
    <div v-show="visibleSlide === index" class="carousel-slide">
        <slot></slot>
    </div>
</template>

<script>
export default {
 props:['visibleSlide','index'],
 data() {
    return {
        
    }
 },
}
</script>

<style>
.carousel-slide {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>