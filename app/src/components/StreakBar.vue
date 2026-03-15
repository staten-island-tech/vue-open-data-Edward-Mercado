<template>
    <div :class="[themeObject.bg_2, themeObject.outline_1]" class="fixed right-3 w-[13%] bottom-[1%] h-12 z-80 flex items-center justify-center rounded-2xl min-w-35">
        <h2 :class="themeObject.color_7" class="saira-stencil-one-subtitle text-xl text-center"> STREAK: {{ streak }}</h2>
    </div>
</template>

<script setup lang="ts">
import { themeObject } from '@/store/variable_storage';
import { streak } from '@/store/variable_storage';

console.log(themeObject.value)

</script>

<style scoped>

</style>