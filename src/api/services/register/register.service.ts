import axios from "../../base.axios"
import { getToken } from "../../../utils/tokens.utils"
import { User } from "../../../pages/register/models/interfaces"

export const registerUser = async (user: User) => {
    await axios.post('/api/user', user, {
        headers: {
            Authorization: getToken()
        }
    })
}