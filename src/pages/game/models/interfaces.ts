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
    answers: IAnser[]
    category: ICategory
}

export interface IGameInstace {
    questions: IQuestion[]
    start_game: boolean
    collected_points: number
    correct_answer: number
}


export const InitialState: IGameInstace = {
    questions: [],
    start_game: false,
    collected_points: 0,
    correct_answer: 0
}



