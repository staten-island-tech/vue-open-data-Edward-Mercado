import {ref} from 'vue'

export const hotspotData = ref<Object[]>([])

export interface ApiResponse {
    results: any[]
}

export interface themeTemplate {
    bg: string[],
    color_1: string[],
    color_2: string[],
    color_3: string[],
    color_4: string[],
    color_5: string[],
    button_1: string[]
}

export const theme = ref<string>("light")

export const themeObject = ref<themeTemplate>({
    bg: [],
    color_1: [],
    color_2: [],
    color_3: [],
    color_4: [],
    color_5: [],
    button_1: []
})