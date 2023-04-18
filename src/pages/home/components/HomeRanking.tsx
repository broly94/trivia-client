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
        <div className="home-ranking flex flex-col mx-auto my-0 w-full max-w-2xl border-2 border-zinc-600 rounded-md ">
            <h3 className="text-center p-5 text-xl font-semibold uppercase border-b-2 border-zinc-600 rounded-sm bg-yellow-200">Ranking</h3>

            <div className="flex flex-wrap flex-col w-full p-2 h-72 overflow-y-scroll">
                <table className="w-full text-sm text-left">
                    <thead className="text-base text-gray-700 uppercase bg-gray-50 border-b-2 border-zinc-400">
                        <tr className="text-center">
                            <th scope="col" className="px-6 py-3">
                                Posicion
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Usuario
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Puntos
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rank.map((r, index) => (
                                <tr className={`border-b hover:cursor-pointer ${r.id == idUser ? 'bg-yellow-200' : 'bg-slate-100'}`} key={r.id}>
                                    <th scope="row" className="px-6 py-4 text-gray-900 font-bold text-center">
                                        #{index + 1}
                                    </th>
                                    <td className="px-6 py-4 text-center font-bold text-base text-gray-900">
                                        {r.name}
                                    </td>
                                    <td className="px-6 py-4 text-center font-bold text-base text-gray-900">
                                        {r.points}
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

            {/* <div className="flex flex-wrap flex-col w-full p-2 h-72 overflow-y-scroll">
                <ul>
                    {
                        rank.map((r, index) => (
                            <li key={r.id} className="flex flex-row justify-between text-center">
                                <span>#{index + 1}</span>
                                <h3 className="text-center">{r.name}</h3>
                                <span>{r.points}</span>
                            </li>
                        ))
                    }
                </ul>
            </div> */}
        </div>
    )
}