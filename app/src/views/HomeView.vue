<template>
    <GameExplanation></GameExplanation>
    <ParamInfo></ParamInfo>
</template>

<script setup lang="ts">
import GameExplanation from '@/components/GameExplanation.vue';
import ParamInfo from '@/components/ParamInfo.vue';
import { getTheme } from '@/store/functions'
import { watch } from 'vue'
import { themeObject } from '@/store/variable_storage'
import { theme } from '@/store/variable_storage';

watch(() => theme.value, () => {
    themeObject.value = getTheme(theme.value)
})

</script>

<style scoped></style>