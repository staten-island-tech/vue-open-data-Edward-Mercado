<template>
    <div :class="themeObject.bg_2" class="w-full flex flex-row flex-wrap my-5 p-5 rounded-3xl items-center justify-around">
        <h2 class="min-w-full saira-stencil-one-subtitle text-center text-3xl" :class="themeObject.color_6">
            GAME SELECTION SCREEN
        </h2>
        <router-link to="/play/1" :class="themeObject.button_2" class="lexend-deca min-w-50 m-3 text-xl rounded-3xl"> Manhattan </router-link>
        <router-link to="/play/2" :class="themeObject.button_2" class="lexend-deca min-w-50 m-3 text-xl rounded-3xl"> The Bronx </router-link>
        <router-link to="/play/3" :class="themeObject.button_2" class="lexend-deca min-w-50 m-3 text-xl rounded-3xl"> Brooklyn </router-link>
        <router-link to="/play/4" :class="themeObject.button_2" class="lexend-deca min-w-50 m-3 text-xl rounded-3xl"> Queens </router-link>
        <router-link to="/play/5" :class="themeObject.button_2" class="lexend-deca min-w-50 m-3 text-xl rounded-3xl"> Staten Island </router-link>
    </div>
</template>

<script setup lang="ts">
import { themeObject } from '@/store/variable_storage';



</script>

<style scoped>

</style>