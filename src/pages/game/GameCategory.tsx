import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"
import { getAllQuestions } from "../../api/services/game/game.service";
import { PublicRoutes } from "../../router";
import { setQuestions, cleanState } from "../../redux/features/question/question.slice";
import { useDispatch } from "react-redux";

export default function GameCategory() {

    const [level, setLevel] = useState({ level: 'BASIC' })

    const { category } = useParams()
    
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {

        return () => {
            dispatch(cleanState())
        }
    })


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const term = level.level
        try {

            const { data } = await getAllQuestions(category!, term) as AxiosResponse<any, any>
            dispatch(cleanState())
            dispatch(setQuestions(data.questions))
        } catch (error: any | unknown | AxiosError) {
            const { response } = error
            console.log(response.request)
            if (response.request.response.includes('TokenExpiredError')) {
                localStorage.removeItem('user')
                navigate('/login')
            } 
        }
    }

    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        setLevel({ level: e.target.value })
    }

    return (
        <div className="flex flex-col mx-0 my-auto gap-5">

            <h3 className="font-mono font-semibold text-4xl text-center text-zinc-700">Trivia <span className="text-yellow-300">Game</span></h3>

            <div className="back-button flex flex-row gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
                </svg>
                <p className="font-sans text-sm text-center">


                    <Link to={`/${PublicRoutes.LOGIN}`} className="font-mono text-sm text-blue-400 font-semibold">Volver</Link>
                </p>
            </div>


            <div className="flex flex-col gap-5 justify-centerw-full mx-0 my-auto p-5 border-2 rounded-md border-zinc-700">
                <h4 className="font-sans font-medium text-lg">Selecciona en el nivel que quieres jugar </h4>

                <div className="title flex flex-row gap-3 justify-center">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>


                    <form onSubmit={handleSubmit}>
                        <select className="w-24 border-2 border-zinc-500 rounded-md " name="level" id="" onChange={handleChange}>
                            <option value="BASIC">Facil</option>
                            <option value="MEDIUM">Medio</option>
                            <option value="ADVANCED">Dificil</option>
                        </select>
                        <button type="submit"> Iniciar juego</button>
                    </form>
                </div>
            </div>
        </div>
    )
}