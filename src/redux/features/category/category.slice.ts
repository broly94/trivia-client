import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { ICategory, InitialState, ICategoryInstance } from "../../../pages/home/models/interfaces"

const categorySlice = createSlice({
    name: 'category',
    initialState: InitialState,
    reducers: {
        getCategory(state, action: PayloadAction<ICategory>) {
            return state
        },
        setCategory(state, action: PayloadAction<ICategory[]>){
            state.categories.push(...action.payload)
        },
        cleanStateCategory(state){
            state.categories = []
        }
    }
})

export const { getCategory, setCategory, cleanStateCategory } = categorySlice.actions

export default categorySlice.reducer