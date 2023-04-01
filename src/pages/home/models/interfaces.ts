export interface ICategory {
    id: number
    name: string

}

export interface ICategoryInstance {
    categories: ICategory[]
}

export const  InitialState: ICategoryInstance = {
    categories: []
}