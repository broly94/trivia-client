let token: string

export const getToken = () => {
    const user = localStorage.getItem('user')
    return  JSON.parse(user!)
}
export const setToken = (newToken: string) => {
    token = `Bearer ${newToken}`
    localStorage.setItem('token', token)
}
