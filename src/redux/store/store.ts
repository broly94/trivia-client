import { configureStore } from '@reduxjs/toolkit'

import categorySlice from '../features/category/category.slice'
import gameSlice from '../features/game/game.slice'
import loaderButtonSlice from '../features/loaderButton/loaderButton.slice'

export const store = configureStore({
  reducer: {
    category: categorySlice,
    game: gameSlice,
    loaderButton: loaderButtonSlice
  },
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch