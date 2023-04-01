export interface initialValueForm {
    name: string
    email: string,
    password: string
}

export const INITIAL_VALUE_FORM: initialValueForm = { name: "", email: "", password: '' }

export interface User {
    name: string
    email: string
    password: string
}