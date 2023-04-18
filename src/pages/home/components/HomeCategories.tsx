import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { getCategories } from "../../../api/services/home/home.service"
import { AxiosError, AxiosResponse } from "axios"
import { PublicRoutes } from "../../../router"
import { useHomeContext } from "../context/HomeContext"

export default function HomeCategories() {

    const navigate = useNavigate()

    const { categories, setCategories } = useHomeContext()

    useEffect(() => {
        const getAllCategories = async () => {

            try {
                const response = await getCategories() as AxiosResponse<any, any>
                setCategories(response.data.category)

            } catch (error: any | unknown | AxiosError) {
                console.log(error)
                const { response } = error

                if (response.request?.response.includes('TokenExpiredError')) {
                    localStorage.removeItem('user')
                    navigate(`/${PublicRoutes.LOGIN}`)
                }

            }
        }
        getAllCategories()
    }, [])

    return (
        <div className="home-categories flex flex-col mx-auto my-0 w-full max-w-2xl border-2 border-zinc-600 rounded-md ">

            <h3 className="text-center p-5 text-xl font-semibold uppercase border-b-2 border-zinc-600 rounded-sm bg-yellow-200">Categorias</h3>

            <div className="flex flex-wrap flex-col w-full gap-2 p-2">
                {
                    categories.map(cat => (
                        <Link
                            key={cat.id}
                            to={`/private/game/category/${cat.name}`}
                            className="p-5 transition-colors hover:bg-yellow-300 hover:shadow-md uppercase font-bold text-base text-gray-900 border-2 border-zinc-600 rounded-md">{cat.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}