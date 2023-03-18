import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    name: string,
    email: string,
    password: string
}

const initialState: UserState = {
    name: '',
    email: '',
    password: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})


export default userSlice.reducer