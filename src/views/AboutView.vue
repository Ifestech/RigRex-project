<template>
    <div>
        <TwoinOne :name="'Welcome to About Page'" :imgsrc="home" :visit="'/services'" :btnName="'Services'"/>
    </div>
</template>

<script setup>
import TwoinOne from '../components/TwoinOne.vue'
import home from '../assets/image/home.jpg'
</script>

<style scoped>

</style>