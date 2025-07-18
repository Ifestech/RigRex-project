<template>
    <div>
        <TwoinOne :name="'Grow Your Business With'" :imgsrc="home" :visit="'/about'" :btnName="'Get Started'"/>
    </div>
</template>

<script setup>
import TwoinOne from '../components/TwoinOne.vue'
import home from '../assets/image/home.jpg'
</script>

<style scoped>

</style>