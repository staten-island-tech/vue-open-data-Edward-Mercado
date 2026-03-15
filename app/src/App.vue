<template>
  <div :class="themeObject.bg" class="w-full h-screen p-10">
    <menu-buttons @changeTheme="(themeArg) => theme = themeArg"></menu-buttons>
    <h1 :class="themeObject.color_1" class='saira-stencil-one-title unica-one-regular text-7xl text-center'>GOTTA SPOT A HOTSPOT (uh)</h1>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { getTheme } from '@/store/functions'
import { watch } from 'vue'
import { theme, themeObject } from '@/store/variable_storage'
import MenuButtons from './components/MenuButtons.vue'

themeObject.value = getTheme(theme.value)

watch(() => theme.value, () => {
    themeObject.value = getTheme(theme.value)
    console.log(themeObject.value)
})

</script>

<style scoped></style>