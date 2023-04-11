import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { IQuestion, InitialState } from "../../../pages/game/models/interfaces"

const gameSlice = createSlice({
    name: 'game',
    initialState: InitialState,
    reducers: {
        getQuestions(state, action: PayloadAction<IQuestion>) {
            return state
        },
        setQuestions(state, action: PayloadAction<IQuestion[]>){
            state.questions.push(...action.payload)
            state.start_game = true
        },
        finishGame(state){
            state.start_game = false
        },
        setPoints(state, action: PayloadAction<number>){
            
        },
        cleanStateQuestions(state){
            state.questions = []
        }
    }
})

export const { getQuestions, setQuestions, finishGame, cleanStateQuestions } = gameSlice.actions

export default gameSlice.reducer