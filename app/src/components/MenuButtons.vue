<template>
    <div class="w-full h-[5%] flex flex-row mb-10">
        <button :class="themeObject.button_1" class="w-[15%] rounded-full p-5 mx-3 h-full" @click="$emit('changeTheme', 'light')">
            <h2 :class="themeObject.color_5" class="lexend-deca">
                Light
            </h2> 
        </button>
        <button :class="themeObject.button_1" class="w-[15%] rounded-full p-5 h-full mx-3" @click="$emit('changeTheme', 'dark')">
            <h2 :class="themeObject.color_5" class="lexend-deca">
                Dark
            </h2> 
        </button>
        <button :class="themeObject.button_1" class="w-[15%] rounded-full p-5 h-full mx-3" @click="$emit('changeTheme', 'sunset')">
            <h2 :class="themeObject.color_5" class="lexend-deca">
                Sunset
            </h2> 
        </button>
    </div>
</template>

<script setup lang="ts">
import { themeObject } from '@/store/variable_storage';

const emits = defineEmits(['changeTheme'])

</script>

<style scoped>

</style>