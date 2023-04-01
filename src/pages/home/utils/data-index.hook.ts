import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AxiosResponse } from "axios"

import { getCategories } from "../../../api/services/home/home.service"
import { cleanState, setCategory } from "../../../redux/features/category/category.slice"

export default function DataIndex() {

    const dispatch = useDispatch();

    const getAllCategories = async () => {
        const { data } = await getCategories() as AxiosResponse<any, any>
        dispatch(setCategory(data.category))
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


