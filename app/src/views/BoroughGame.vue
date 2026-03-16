<template>
    <BottomBar></BottomBar>
    <div>
        {{ route.params.borough }}
        {{ getRandomParam() }}
    </div>
</template>

<script setup lang="ts">
import BottomBar from '@/components/BottomBar.vue'
import { useRoute } from 'vue-router'
import { watch, onMounted } from 'vue'
import { getHotspotData } from '@/store/functions'
import { getRandomParam } from '@/store/functions'
// import { hotspotData } from '@/store/variable_storage'

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