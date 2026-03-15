import {ref} from 'vue'

export const hotspotData = ref<Object[]>([])

export interface ApiResponse {
    results: any[]
}

export interface responseItem {
    borocode: string,
}

export const themes: 
Record<string, { bg: string[]; bg_2: string[]; color_1: string[]; color_2: string[]; color_3: string[]; color_4: string[]; color_5: string[]; color_6: string[]; color_7: string[]; button_1: string[]; button_2: string[]; outline_1: string[] }> = {
    dark: {
      bg: ['bg-linear-to-tr', 'from-black', 'to-purple-950'],
      bg_2: ['bg-purple-100'],
      color_1: ['text-white'],
      color_2: ['text-purple-100'],
      color_3: ['text-pink-100'],
      color_4: ['text-purple-300'],
      color_5: ['text-purple-900'],
      color_6: ['text-indigo-800'],
      color_7: ['text-indigo-900'],
      button_1: ['bg-purple-100', 'hover:bg-purple-300', 'btn'],
      button_2: ['bg-purple-800', 'hover:bg-purple-600', 'btn'],
      outline_1: ['border-purple-100', 'border-4']
    },
    light: {
      bg: ['bg-linear-to-tr', 'from-cyan-300', 'to-blue-100'],
      bg_2: ['bg-blue-950'],
      color_1: ['text-black'],
      color_2: ['text-blue-950'],
      color_3: ['text-blue-900'],
      color_4: ['text-cyan-900'],
      color_5: ['text-cyan-100'],
      color_6: ['text-sky-200'],
      color_7: ['text-sky-300'],
      button_1: ['bg-indigo-950', 'hover:bg-blue-800', 'btn'],
      button_2: ['bg-cyan-700', 'hover:bg-cyan-500', 'btn'],
      outline_1: ['border-blue-950', 'border-4']
    },
    sunset: {
      bg: ['bg-linear-to-tr', 'from-pink-600', 'to-yellow-400'],
      bg_2: ['bg-rose-950'],
      color_1: ['text-black'],
      color_2: ['text-rose-950'],
      color_3: ['text-rose-900'],
      color_4: ['text-rose-800'],
      color_5: ['text-white'],
      color_6: ['text-orange-400'],
      color_7: ['text-yellow-300'],
      button_1: ['bg-rose-950', 'hover:bg-rose-800', 'btn'],
      button_2: ['bg-orange-700', 'hover:bg-orange-500', 'btn'],
      outline_1: ['border-rose-950', 'border-4']
    },
  }

export interface themeTemplate {
    bg: string[],
    bg_2: string[],
    color_1: string[],
    color_2: string[],
    color_3: string[],
    color_4: string[],
    color_5: string[],
    color_6: string[],
    color_7: string[],
    button_1: string[],
    button_2: string[],
    outline_1: string[],
}

export const theme = ref<string>("light")

export const themeObject = ref<themeTemplate>({
    bg: [],
    bg_2: [],
    color_1: [],
    color_2: [],
    color_3: [],
    color_4: [],
    color_5: [],
    color_6: [],
    color_7: [],
    button_1: [],
    button_2: [],
    outline_1: []
})

export interface SingleParamTemplate {
    title: string,
    desc: string
}

export const APIParams:SingleParamTemplate[] = [
    {
        title: 'boroname',
        desc: "The hotspot's borough."
    },
    {
        title: 'borocode',
        desc: "The hotspot's borough represented as a number."
    },
    {
        title: 'type',
        desc: "Which kind of hotspot it is (free, limited free, etc.)"
    },
    {
        title: 'latitude',
        desc: "Latitude."
    },
    {
        title: 'longitude',
        desc: "Longitude."
    },
    {
        title: 'location_t',
        desc: "The type of location it's in (outdoor, subway station, library, etc.)."
    }
]