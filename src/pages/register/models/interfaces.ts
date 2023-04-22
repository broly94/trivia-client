export interface IRegister {
    name: string
    email: string
    password: string
}

export const INITIAL_VALUE_FORM_REGISTER: IRegister = { name: "", email: "", password: '' }