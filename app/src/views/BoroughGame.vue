<template>
    <div class="w-full h-screen">
        <div :class="themeObject.color_1" class="saira-stencil-one-subtitle text-5xl text-center my-5">
        IN <span :class="themeObject.color_3"> {{ boroughName }} </span>,
    </div>

    <div class="w-full h-[60%] flex flex-col justify-around relative">
        <h2 :class="themeObject.color_1" class="absolute top-0 right-1 saira-stencil-one-subtitle text-5xl w-[40%] text-center"> ARE THERE MORE HOTSPOTS OF... </h2>
        <QuestionOption :inputQuestion="currentQuestion.option_one"
        @chooseOption="(number) => chooseOption(number)"
        ></QuestionOption>
        <QuestionOption :inputQuestion="currentQuestion.option_two"
        @chooseOption="(number) => chooseOption(number)"
        ></QuestionOption>
        <div :class="[themeObject.bg_2, themeObject.outline_2, themeObject.choice[0]]" class="absolute top-[45%] left-[47%] w-[6%] h-[10%] flex items-center justify-center rounded-full hover:scale-130 hover:-rotate-180 transition-all duration-1000">
            <h2 :class="themeObject.color_6" class="text-center w-full text-3xl lexend-deca font-black">
                OR
            </h2>
        </div>
        <h2 :class="[themeObject.color_1, 'absolute', 'bottom-0', 'left-1', 'saira-stencil-one-subtitle', 'text-8xl', 'w-[50%]', 'text-center']" class="absolute bottom-0 left-1 saira-stencil-one-subtitle text-8xl w-[50%] text-center"> ? </h2>
    </div>
    </div>

    <BottomBar
    @rerollQuestion="getHotspotData(route.params.borough.toString())"
    ></BottomBar>

</template>

<script setup lang="ts">
import BottomBar from '@/components/BottomBar.vue'
import QuestionOption from '@/components/QuestionOption.vue'
import { useRoute } from 'vue-router'
import { watch, onBeforeMount, ref } from 'vue'
import { getHotspotData } from '@/store/functions'
import { getRandomParam } from '@/store/functions'
import { hotspotData, questionData } from '@/store/variable_storage'
import { createQuestion } from '@/store/functions'
import { getRandomTargetVal } from '@/store/functions'
import { questionChoice } from '@/store/variable_storage'
import { themeObject } from '@/store/variable_storage'
import { convertNumToBorough } from '@/store/functions'

const route = useRoute()

let boroughName = ref<string>(convertNumToBorough(parseInt(route.params.borough as string)))

const currentQuestion = ref<questionData>({
    option_one: {} as questionChoice,
    option_two: {} as questionChoice,
    borough: parseInt(route.params.borough.toString()),
    correct_answer: 0
} as questionData)

onBeforeMount(() => {
    getHotspotData(route.params.borough.toString())

    let filter_1 = getRandomParam()
    let targetValue_1 = getRandomTargetVal(filter_1)
    let filter_2 = getRandomParam()
    let targetValue_2 = getRandomTargetVal(filter_2)
    currentQuestion.value = createQuestion(hotspotData.value, filter_1, targetValue_1, 
    filter_2, targetValue_2, parseInt((route.params.borough).toString()))
})

watch(() => route.params.borough, () => {
    getHotspotData(route.params.borough.toString())
    boroughName.value = convertNumToBorough(parseInt(route.params.borough as string))
})

watch(() => hotspotData.value, () => {
    let filter_1 = getRandomParam()
    let targetValue_1 = getRandomTargetVal(filter_1)
    let filter_2 = getRandomParam()
    let targetValue_2 = getRandomTargetVal(filter_2)
    currentQuestion.value = createQuestion(hotspotData.value, filter_1, targetValue_1, 
    filter_2, targetValue_2, parseInt((route.params.borough).toString()))
})

function chooseOption(optionNumber:number) {
    console.log(optionNumber)
}

</script>

<style scoped>

</style>