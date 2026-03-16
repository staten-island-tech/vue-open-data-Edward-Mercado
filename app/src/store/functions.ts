const appToken = import.meta.env.VITE_appToken

import { ApiResponse, hotspotData, responseItem, themes, testableParams, 
testableParamTemplate, questionChoice, questionData } from "./variable_storage"

export function makePieChart() {

}

export function makeBarChart() {

}

export async function getHotspotData(borocode:string) {
    console.log(borocode)
    try {
        const response:Response = await fetch(`https://data.cityofnewyork.us/api/v3/views/yjub-udmw/query.json`,
            {headers: {
                "X-App-Token": appToken,
                "Accept": "application/json"
            }}
        )

        if(!response.ok) {
            throw new Error(`Request failed with status ${response.status}`)
        }

        const data:ApiResponse = await response.json()
        hotspotData.value = Array.isArray(data) ? data.filter((item:responseItem) => item.borocode === borocode) : []

    } catch (error) {
        console.log(error)
        hotspotData.value = []
    }
}

export function getTheme(theme:string) {
    if(themes[theme]) {
        return themes[theme]
    } return themes['light']
}

export function randomInt(min:number, max:number) {
    return min + Math.floor((max-min)*(Math.random()))
}

export function getRandomParam() {
    return testableParams[randomInt(0, testableParams.length)]
}

export function filteredToNumberValid(data:any[], filter:testableParamTemplate, targetValue:(string | number)) {
    if(!filter.round) {
        return data.filter((hotspot) => hotspot[filter.name] === targetValue).length
    } else {
        return data.filter((hotspot) => Math.round(parseFloat(hotspot[filter.name])*10)/10 === targetValue).length
    }
}

export function getRandomTargetVal(filter:testableParamTemplate) {
    return filter.possible_values[randomInt(0, filter.possible_values.length)]
}

export function createQuestion(data:any[], filter_1:testableParamTemplate, targetValue_1:(string | number), 
filter_2:testableParamTemplate, targetValue_2:(string | number), borough:number) {

    const questionChoice_1:questionChoice = {
        param: filter_1,
        tested_value: targetValue_1,
        amount: filteredToNumberValid(data, filter_1, targetValue_1)
    }

    const questionChoice_2:questionChoice = {
        param: filter_2,
        tested_value: targetValue_2,
        amount: filteredToNumberValid(data, filter_2, targetValue_2)
    }
    console.log(questionChoice_1, questionChoice_2)

    const resultingQuestion:questionData = {
        borough: borough, 
        option_one: questionChoice_1,
        option_two: questionChoice_2
    }

    console.log(resultingQuestion)
    return resultingQuestion
}