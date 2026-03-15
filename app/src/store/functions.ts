const appToken = import.meta.env.VITE_appToken

import { ApiResponse, hotspotData } from "./variable_storage"

export function makePieChart() {

}

export function makeBarChart() {

}

export async function get(dev:boolean) {
    if(!dev) {
        let isLoading:boolean = true
        let errorMessage:string = ""

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
        hotspotData.value = Array.isArray(data) ? data : []

    } catch (error) {
        errorMessage = error instanceof Error ? error.message : "Failed to load API"
        hotspotData.value = []
        
    } finally {
        isLoading = false
    }
    }
    
}

export function getTheme(theme:string) {
    const themes: Record<string, { bg: string[]; color_1: string[]; color_2: string[]; color_3: string[]; color_4: string[]; color_5: string[]; button_1: string[] }> = {
        dark: {
            bg: ['bg-linear-to-tr', 'from-black', 'to-purple-950'],
            color_1: ['text-white'],
            color_2: ['text-purple-100'],
            color_3: ['text-pink-100'],
            color_4: ['text-purple-300'],
            color_5: ['text-purple-900'],
            button_1: ['bg-purple-100', 'hover:bg-purple-300', 'btn'],
        },
        light: {
            bg: ['bg-linear-to-tr', 'from-cyan-300', 'to-blue-100'],
            color_1: ['text-black'],
            color_2: ['text-blue-950'],
            color_3: ['text-blue-900'],
            color_4: ['text-cyan-900'],
            color_5: ['text-cyan-100'],
            button_1: ['bg-indigo-950', 'hover:bg-blue-800', 'btn'],
        },
        sunset: {
            bg: ['bg-linear-to-tr', 'from-rose-500', 'to-yellow-400'],
            color_1: ['text-black'],
            color_2: ['text-rose-950'],
            color_3: ['text-rose-900'],
            color_4: ['text-rose-800'],
            color_5: ['text-white'],
            button_1: ['bg-rose-950', 'hover:bg-rose-800', 'btn'],
        },
    }

    if(themes[theme]) {
        return themes[theme]
    } return themes['light']
}