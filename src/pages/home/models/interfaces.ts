export interface ICategory {
    id: number
    name: string
}

export interface IRank {
    id: number
    name: string
    points: number
}

export interface ICategoryInstance {
    categories: ICategory[]
}

export const  InitialState: ICategoryInstance = {
    categories: []
}