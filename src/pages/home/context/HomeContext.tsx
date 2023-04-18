import { useContext, createContext, useState } from "react"
import { ICategory, IRank } from "../models/interfaces"

interface IContextProps {
    rank: IRank[]
    setRank: (rank: IRank[]) => void,
    categories: ICategory[],
    setCategories: (categories: ICategory[]) => void
}

const HomeContext = createContext<IContextProps>({
    rank: {} as IRank[],
    setRank: () => {},
    categories: {} as ICategory[],
    setCategories: () => {}
})

export const useHomeContext = (): IContextProps => {
    const context = useContext(HomeContext)

    if (!context) {
        throw new Error("El provider is not available")
    }

    return context
}

interface IProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const HomeProvider = ({ children }: IProviderProps) => {

    const [rank, setRank] = useState<IRank[]>([])

    const [categories, setCategories] = useState<ICategory[]>([])

    const contextValue = {rank, setRank, categories, setCategories}

    return (
        <HomeContext.Provider value={contextValue}>
            {children}
        </HomeContext.Provider>
    )
}