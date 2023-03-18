import { configureStore } from '@reduxjs/toolkit'

import userLoginSlice from '../features/user/userLoginSlice'
import userSlice from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    users: userSlice,
    userLogin: userLoginSlice
  },
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch