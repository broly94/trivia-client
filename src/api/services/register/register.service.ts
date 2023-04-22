import axios from "../../base.axios"
import { getToken } from "../../../utils/tokens.utils"
import { IRegister } from "../../../pages/register/models/interfaces"

export const registerUser = async (user: IRegister) => {
    await axios.post('/api/user', user, {
        headers: {
            Authorization: getToken()
        }
    })
}