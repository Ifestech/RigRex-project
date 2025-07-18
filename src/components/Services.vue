<template>
    <div class="container mx-auto px-5 xl:px-24 my-10">
        <div class="text">
            <h1 class="text-blue-700 text-4xl font-bold text-center">Our Services</h1>
        </div>
        <div class="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="data in SerData" :key="data">
                <card :imgsrc="data.imgsrc" :title="data.title" :texts="data.texts" />
            </div>
        </div>    
    </div>
</template> 

<script setup>
import SerData from './serData'
import Card from './Card.vue';
</script>

<style  scoped>

</style>