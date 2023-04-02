export interface IAnser {
    id: string
    name: string
    is_true: boolean
}

export interface ICategory {
    name: string
}

export interface IQuestion {
    id: string
    question: string
    level: string
    points: string
    answer: IAnser[],
    category: ICategory
}

export interface IquestionInstace {
    questions: IQuestion[]
}


export const InitialState: IquestionInstace = {
    questions: [],
}



