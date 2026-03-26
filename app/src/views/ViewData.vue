<template>
    <div>
        {{ hotspotData }}
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onBeforeMount, watch } from 'vue';
import { getHotspotData } from '@/store/functions';
import { hotspotData } from '@/store/variable_storage';

const route = useRoute()

onBeforeMount(() => {
    getHotspotData(route.params.borough.toString())
})

watch(() => route.params.borough, () => {
    getHotspotData(route.params.borough.toString())
})

</script>

<style scoped>

</style>