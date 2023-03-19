import { configureStore } from '@reduxjs/toolkit'

import userSlice from '../features/user/user.slice'

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch