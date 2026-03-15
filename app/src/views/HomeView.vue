<template>
    <div class="w-full h-screen p-10 flex flex-col justify-around">
        test
    </div>
</template>

<script setup lang="ts">
import { getTheme } from '@/store/functions'
import { watch } from 'vue'
import { themeObject } from '@/store/variable_storage'
import { theme } from '@/store/variable_storage';

watch(() => theme.value, () => {
    themeObject.value = getTheme(theme.value)
})

</script>

<style scoped>

</style>