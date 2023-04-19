import { useEffect } from "react"
import { useHomeContext } from "../context/HomeContext"
import { getRank } from "../../../api/services/home/home.service"
import { AxiosError, AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../../router"

export default function HomeRankig() {

    const { rank, setRank } = useHomeContext()

    const navigate = useNavigate()

    const user = localStorage.getItem("user")
    const idUser: number = JSON.parse(user!).id

    useEffect(() => {
        const getAllRank = async () => {
            try {
                const response = await getRank() as AxiosResponse<any, any>
                setRank(response.data.users)
            } catch (error: any | unknown | AxiosError) {
                console.log(error)
                const { response } = error

                if (response.request?.response.includes('TokenExpiredError')) {
                    localStorage.removeItem('user')
                    navigate(`/${PublicRoutes.LOGIN}`)
                }
            }
        }
        getAllRank()
    }, [])

    return (
        <div className="home-ranking flex flex-col mx-auto my-0 w-full max-w-3xl border-2 border-zinc-600 hover:shadow-2xl transition-all shadow-slate-900">
            <h3 className="text-center p-5 text-xl font-semibold uppercase border-zinc-600 bg-gray-800 text-white mb-3">Ranking</h3>

            <div className="flex flex-wrap flex-col w-full p-2 h-72 overflow-y-scroll">
                <table className="w-full text-sm text-left border-2 border-gray-800">

                    <thead className="text-base text-gray-200 uppercase bg-gray-500 border-b-2 border-zinc-400">
                        <tr className="text-center mb-3">
                            <th scope="col" className="font-extrabold px-6 py-3">
                                Posicion
                            </th>
                            <th scope="col" className="font-extrabold px-6 py-3">
                                Usuario
                            </th>
                            <th scope="col" className="font-extrabold px-6 py-3">
                                Puntos
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            rank.map((r, index) => (
                                <tr className={`hover:cursor-pointer border-2 border-gray-800 ${r.id == idUser ? 'bg-red-200' : 'bg-slate-100'}`} key={r.id}>
                                    <th scope="row" className="px-6 py-4 text-gray-900 font-bold text-center">
                                        <span className="text-gray-700">#{index + 1}</span>
                                    </th>
                                    <td className="px-6 py-4 text-center font-bold text-base text-gray-900">
                                        <span className="text-gray-700">{r.name}</span>
                                    </td>
                                    <td className="px-6 py-4 text-center font-bold text-base text-gray-900">
                                        <span className="text-gray-800">{r.points}</span>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>
        </div>
    )
}