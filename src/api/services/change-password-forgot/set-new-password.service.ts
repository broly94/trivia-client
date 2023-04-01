import axios from "../../base.axios"

export const setNewPassword = async (newPassword: string, token: string) => {
    try {
        await axios.put('/api/reset-new-password', { password: newPassword }, {
            headers:{
                "token": token
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const getTokenResetPassword = async (token: string) => {
    try {
        return axios.get('/api/token-reset-password/', { params: { token }})
    } catch (error) {
        console.log(error)
    }
}

export const deleteTokenResetPassword = async (token: string) => {
    try {
        axios.put('/api/delete-token-reset-password', { token })
    } catch (error) {
        console.log(error)
    }
}