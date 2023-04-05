import { getToken } from '../../../utils/tokens.utils'
import axios from '../../base.axios'

export const getCategories = async () => {
    const { token } = getToken()
    return await axios.get('/api/categories', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}