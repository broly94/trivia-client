import { getToken } from '../../../utils/tokens.utils'
import axios from '../../base.axios'

export const getAllQuestions = async (category: string, level: string) => {
    const { token } = getToken()
    console.log(token)
    try {
        return await axios.get(`/api/questions?level=${level}&category=${category}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error) {
        console.log(error)
    }
}