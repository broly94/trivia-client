import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AxiosError, AxiosResponse } from "axios"

import { getCategories } from "../../../api/services/home/home.service"
import { cleanState, setCategory } from "../../../redux/features/category/category.slice"
import { PublicRoutes } from "../../../router"
import { useNavigate } from "react-router-dom"

export default function DataIndex() {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const getAllCategories = async () => {

        try {
            const response = await getCategories() as AxiosResponse<any, any>
            dispatch(setCategory(response.data.category))

        } catch (error: any | unknown | AxiosError) {
            console.log(error)
            const { response } = error

            if (response.request?.response.includes('TokenExpiredError')) {
                localStorage.removeItem('user')
                navigate(`/${PublicRoutes.LOGIN}`)
            }

        }
    }

    const getAllRank = async () => {

    }

    useEffect(() => {

        getAllCategories()


        return () => {
            dispatch(cleanState())
        }
    }, [])

}


