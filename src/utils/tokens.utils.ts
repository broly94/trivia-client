let token: string
let resetTokenForgotPassword: string

export const getToken = () => {
    const user = localStorage.getItem('user')
    return  JSON.parse(user!)
}
export const setToken = (newToken: string) => {
    token = `Bearer ${newToken}`
}

export const getTokenForgotPassword = () => {
        resetTokenForgotPassword
}

export const deleteTokenForgotPassword = () => {

}

