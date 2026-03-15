<template>
    <div>
        {{ route.params.borough }}

        {{  hotspotData }}
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { getHotspotData } from '@/store/functions'
import { hotspotData } from '@/store/variable_storage'

const route = useRoute()

watch(() => route.params.borough, () => {
    getHotspotData(route.params.borough.toString())
})

</script>

<style scoped>

</style>