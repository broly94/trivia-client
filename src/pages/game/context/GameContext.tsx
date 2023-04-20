import { createContext, useContext, useState } from "react";


interface IContextProps {
    index: number
    setIndex: (updateIndex: (prevIndex: number) => number) => void
    answerChecked: number | null
    setAnswerChecked: (answerChecked: number | null) => void
    isValid: boolean
    setIsValid: ( isValid: boolean ) => void
    isNextAvailable: boolean
    setIsNextAvailable: ( isNextAvailable: boolean ) => void
}

const GameContext = createContext<IContextProps>({} as IContextProps)

export const useGameContext = (): IContextProps => {
    const context = useContext(GameContext)

    if(!context){
        throw new Error("El context debe ser usado dentro de un provider")
    }

    return context
}

interface IProviderProps {
    children: JSX.Element | JSX.Element[]
}
export default function GameProvider({children}: IProviderProps) {

    const [index, setIndex] = useState(0)

    const [answerChecked, setAnswerChecked] = useState<number | null>(null)

    const [isValid, setIsValid] = useState<boolean>(false)

    const [isNextAvailable, setIsNextAvailable] = useState<boolean>(true)

    const contextValue = { index, setIndex, answerChecked, setAnswerChecked, isValid, setIsValid, isNextAvailable, setIsNextAvailable }

    return(
        <GameContext.Provider value={contextValue}>
            {children}
        </GameContext.Provider>
    )
}