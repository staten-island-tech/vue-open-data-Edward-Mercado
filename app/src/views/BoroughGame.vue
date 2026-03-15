<template>
    <StreakBar></StreakBar>
    <div>
        {{ route.params.borough }}
        {{  hotspotData }}
    </div>
</template>

<script setup lang="ts">
import StreakBar from '@/components/StreakBar.vue'
import { useRoute } from 'vue-router'
import { watch, onMounted } from 'vue'
import { getHotspotData } from '@/store/functions'
import { hotspotData } from '@/store/variable_storage'

const route = useRoute()

onMounted(() => {
    getHotspotData(route.params.borough.toString())
})

watch(() => route.params.borough, () => {
    getHotspotData(route.params.borough.toString())
})

</script>

<style scoped>

</style>