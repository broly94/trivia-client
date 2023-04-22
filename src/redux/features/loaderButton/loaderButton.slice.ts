import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

export const loaderButtonSlice = createSlice({
    name: 'loaderButton',
    initialState: false,
    reducers: {
        setLoaderButton(state, action: PayloadAction<boolean>){
            return state = action.payload
        }
    }
})

export const { setLoaderButton } = loaderButtonSlice.actions

export default loaderButtonSlice.reducer