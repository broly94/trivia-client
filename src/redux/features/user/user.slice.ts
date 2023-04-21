import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { UserEmptyState, UserState } from '../../../models/user/user.types'


export const userSlice = createSlice({
    name: 'user',
    initialState: UserEmptyState,
    reducers: {
        getUser(state){
            return state
        },
        setUser(state, action: PayloadAction<UserState>){
            return state = {...action.payload}
        }
    }
})


export const { setUser, getUser } = userSlice.actions

export default userSlice.reducer