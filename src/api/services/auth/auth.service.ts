import { UserAuth } from '../../../models/user/user.types'
import axios from '../../base.axios'

export const userAuth = async (user: UserAuth) => {
    
    try {
        const response = await axios.post('/api/auth', user)
        console.log(response.headers['set-cookie'])
        return response
    } catch (error) {
        
    }
}