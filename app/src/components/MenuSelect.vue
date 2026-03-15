<template>
    <div :class="themeObject.bg_2" class="w-full flex flex-row flex-wrap my-10 p-5 rounded-3xl items-center justify-around">
        <h2 class="min-w-full lexend-deca text-center text-2xl" :class="themeObject.color_5">
            GAME SELECTION SCREEN
        </h2>
        <router-link to="/play/1" :class="themeObject.button_2" class="lexend-deca min-w-50 m-3 text-xl rounded-3xl"> Manhattan </router-link>
        <router-link to="/play/2" :class="themeObject.button_2" class="lexend-deca min-w-50 m-3 text-xl rounded-3xl"> The Bronx </router-link>
        <router-link to="/play/3" :class="themeObject.button_2" class="lexend-deca min-w-50 m-3 text-xl rounded-3xl"> Brooklyn </router-link>
        <router-link to="/play/4" :class="themeObject.button_2" class="lexend-deca min-w-50 m-3 text-xl rounded-3xl"> Queens </router-link>
        <router-link to="/play/5" :class="themeObject.button_2" class="lexend-deca min-w-50 m-3 text-xl rounded-3xl"> Staten Island </router-link>
        <router-link to="/" :class="themeObject.button_2" class="lexend-deca min-w-50 m-3 text-xl rounded-3xl"> Back to Home </router-link>
    </div>
</template>

<script setup lang="ts">
import { themeObject } from '@/store/variable_storage';



</script>

<style scoped>

</style>