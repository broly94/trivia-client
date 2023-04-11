import { configureStore } from '@reduxjs/toolkit'

import categorySlice from '../features/category/category.slice'
import emailForgotPasswordSlice from '../features/change-forgot-password/email-forgot-password.slice'
import userSlice from '../features/user/user.slice'
import gameSlice from '../features/game/game.slice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    email_forgot_password: emailForgotPasswordSlice,
    category: categorySlice,
    game: gameSlice
  },
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch