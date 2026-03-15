const appToken = import.meta.env.VITE_appToken

import { ApiResponse, hotspotData, responseItem } from "./variable_storage"
import { themes } from './variable_storage'

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