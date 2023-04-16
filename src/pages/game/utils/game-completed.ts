import { setPointsUser } from "../../../api/services/game/game.service"
import { IQuestion } from "../models/interfaces"
import { NavigateFunction } from "react-router-dom"
import { PrivateRoutes } from "../../../router"
import { cleanStateQuestions, finishGame } from "../../../redux/features/game/game.slice"
import { Dispatch } from "@reduxjs/toolkit"


interface IGameComplete {
    questions: IQuestion[]
    index: number
    collected_points: number
    lastPoints: number
    dispatch: Dispatch
    navigate: NavigateFunction
}

export default async function GameCompleted({questions, index, collected_points, lastPoints, dispatch, navigate}: IGameComplete ) {
    
    // Agrega los puntos de la última pregunta al total de puntos recopilados
    const updatedPoints = collected_points + lastPoints
        
    if (questions.length == index + 1) {
        await setPointsUser(updatedPoints)
        setTimeout(() => {
            // dispatch(cleanStateQuestions())
            // dispatch(finishGame())
            navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.GAME}/${PrivateRoutes.STATUS}`)
        }, 2500)
    }
}