import { Link } from "react-router-dom"
import { PublicRoutes } from "../components/router"

import Form from "../components/login/Form"



function Login() {

  

  return (
    <div className="flex flex-col justify-center content-center w-full md:w-3/4 lg:w-2/5">
      <h3 className="font-mono font-semibold text-3xl text-center text-white">Trivia <span className="text-yellow-500">Game</span></h3>
      <div className="mt-10 p-16 rounded-md bg-zinc-800 text-white w-full border-2 border-zinc-700">
        <h4 className="text-center font-mono font-bold text-2xl">Iniciar Sesión</h4>

        <Form />

        <p className="font-mono text-sm">¿No tenes cuenta? <Link to={`/${PublicRoutes.REGISTER}`} className="font-mono text-sm text-blue-400">Registrate</Link></p>
      </div>
    </div>
  )

}

export default Login