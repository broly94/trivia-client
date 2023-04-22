export interface ILogin {
    email: string,
    password: string
}

export const INITIAL_VALUE_FORM_LOGIN: ILogin = { email: "", password: '' }