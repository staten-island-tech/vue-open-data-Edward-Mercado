import {ref} from 'vue'

export const hotspotData = ref<Object[]>([])

export interface ApiResponse {
    results: any[]
}

export interface responseItem {
    borocode: string,
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
    button_2: string[]
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
    button_2: []
})