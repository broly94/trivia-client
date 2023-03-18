import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    id: number | null
    name: string,
    email: string,
    token: string
}

const initialState: UserState = {
    id: null,
    name: '',
    email: '',
    token: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})


export default userSlice.reducer