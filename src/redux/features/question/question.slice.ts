import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { IQuestion, InitialState } from "../../../pages/game/models/interfaces"

const questionSlice = createSlice({
    name: 'question',
    initialState: InitialState,
    reducers: {
        getQuestions(state, action: PayloadAction<IQuestion>) {
            return state
        },
        setQuestions(state, action: PayloadAction<IQuestion[]>){
            state.questions.push(...action.payload)
        },
        cleanState(state){
            state.questions = []
        }
    }
})

export const { getQuestions, setQuestions, cleanState } = questionSlice.actions

export default questionSlice.reducer