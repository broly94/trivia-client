import { getToken } from '../../../utils/tokens.utils'
import axios from '../../base.axios'

export const getAllQuestions = async (category: string, level: string) => {
    const { token } = getToken()

    return await axios.get(`/api/questions?level=${level}&category=${category}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}

export const setPointsUser = async (points: number) => {
    
    const { token } = getToken()
    
    const user = localStorage.getItem('user')
    const userId = JSON.parse(user!).id

    await axios.put('/api/set-points', {id: userId, points}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}