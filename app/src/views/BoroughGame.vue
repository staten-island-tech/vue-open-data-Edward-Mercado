<template>
    <BottomBar></BottomBar>
    <div>
        {{ route.params.borough }}
        {{ currentQuestion }}
    </div>
</template>

<script setup lang="ts">
import BottomBar from '@/components/BottomBar.vue'
import { useRoute } from 'vue-router'
import { watch, onMounted, ref } from 'vue'
import { getHotspotData } from '@/store/functions'
import { getRandomParam } from '@/store/functions'
import { hotspotData, questionData } from '@/store/variable_storage'
import { createQuestion } from '@/store/functions'
import { getRandomTargetVal } from '@/store/functions'

const route = useRoute()

const currentQuestion = ref<questionData>({} as questionData)

onMounted(() => {
    getHotspotData(route.params.borough.toString())
})

watch(() => route.params.borough, () => {
    getHotspotData(route.params.borough.toString())
})

watch(() => hotspotData.value, () => {
    let filter_1 = getRandomParam()
    let targetValue_1 = getRandomTargetVal(filter_1)
    let filter_2 = getRandomParam()
    let targetValue_2 = getRandomTargetVal(filter_2)
    currentQuestion.value = createQuestion(hotspotData.value, filter_1, targetValue_1, filter_2, targetValue_2, parseInt((route.params.borough).toString()))
})

</script>

<style scoped>

</style>