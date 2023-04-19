import { Link } from "react-router-dom"
import { PublicRoutes } from "../../router";

import FormGameCategory from "./components/FormGameCategory";

export default function GameCategory() {

    return (
        <div className="flex flex-col mx-5 my-auto gap-5">

            <h3 className="font-mono font-semibold text-4xl text-center text-zinc-700">Trivia <span className="text-yellow-300">Game</span></h3>

            <div className="back-button flex flex-row gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
                </svg>
                <p className="font-sans text-sm text-center">


                    <Link to={`/${PublicRoutes.LOGIN}`} className="font-mono text-sm text-blue-400 font-semibold">Volver</Link>
                </p>
            </div>


            <div className="flex flex-col gap-8 justify-center w-full mx-0 my-auto p-8 border-2 border-gray-700 hover:shadow-xl transition-all">

                <h4 className="font-sans font-medium text-lg lg:text-xl text-gray-900 text-center">Selecciona en el nivel que quieres jugar</h4>

                <FormGameCategory />

            </div>
        </div>
    )
}