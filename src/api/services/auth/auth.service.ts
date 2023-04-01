import { UserAuth } from '../../../models/user/user.types'
import axios from '../../base.axios'

export const userAuth = async (user: UserAuth) => {
    
    try {
        return await axios.post('/api/auth', user)
    } catch (error) {
        
    }
}