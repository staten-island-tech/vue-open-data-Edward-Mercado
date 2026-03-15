const appToken = import.meta.env.VITE_appToken

import { ApiResponse, hotspotData, responseItem } from "./variable_storage"

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
    const themes: Record<string, { bg: string[]; bg_2: string[]; color_1: string[]; color_2: string[]; color_3: string[]; color_4: string[]; color_5: string[]; color_6: string[]; color_7: string[]; button_1: string[]; button_2: string[] }> = {
        dark: {
          bg: ['bg-linear-to-tr', 'from-black', 'to-purple-950'],
          bg_2: ['bg-purple-100'],
          color_1: ['text-white'],
          color_2: ['text-purple-100'],
          color_3: ['text-pink-100'],
          color_4: ['text-purple-300'],
          color_5: ['text-purple-900'],
          color_6: ['text-pink-300'],
          color_7: ['text-indigo-300'],
          button_1: ['bg-purple-100', 'hover:bg-purple-300', 'btn'],
          button_2: ['bg-purple-800', 'hover:bg-purple-600', 'btn'],
        },
        light: {
          bg: ['bg-linear-to-tr', 'from-cyan-300', 'to-blue-100'],
          bg_2: ['bg-blue-950'],
          color_1: ['text-black'],
          color_2: ['text-blue-950'],
          color_3: ['text-blue-900'],
          color_4: ['text-cyan-900'],
          color_5: ['text-cyan-100'],
          color_6: ['text-sky-600'],
          color_7: ['text-indigo-400'],
          button_1: ['bg-indigo-950', 'hover:bg-blue-800', 'btn'],
          button_2: ['bg-cyan-700', 'hover:bg-cyan-500', 'btn'],
        },
        sunset: {
          bg: ['bg-linear-to-tr', 'from-rose-500', 'to-yellow-400'],
          bg_2: ['bg-rose-950'],
          color_1: ['text-black'],
          color_2: ['text-rose-950'],
          color_3: ['text-rose-900'],
          color_4: ['text-rose-800'],
          color_5: ['text-white'],
          color_6: ['text-orange-900'],
          color_7: ['text-yellow-900'],
          button_1: ['bg-rose-950', 'hover:bg-rose-800', 'btn'],
          button_2: ['bg-orange-700', 'hover:bg-orange-500', 'btn'],
        },
      }

    if(themes[theme]) {
        return themes[theme]
    } return themes['light']
}