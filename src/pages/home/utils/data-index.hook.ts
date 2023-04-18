import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AxiosError, AxiosResponse } from "axios"

import { getCategories, getRank } from "../../../api/services/home/home.service"
import { cleanStateCategory, setCategory } from "../../../redux/features/category/category.slice"
import { PublicRoutes } from "../../../router"
import { useNavigate } from "react-router-dom"
import { useHomeContext } from "../context/HomeContext"

export default function DataIndex() {

    const dispatch = useDispatch()
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

    useEffect(() => {

        getAllCategories()
        
        return () => {
            dispatch(cleanStateCategory())
        }
    }, [])

}


