import { Link } from "react-router-dom"
import DivContacinerClassic from "../../components/DivContanerClassic"

import { PublicRoutes } from "../../router"

import Form from "./components/Form"

function Login() {

  return (
    <div className="flex flex-col justify-center w-full mx-0 my-auto">
      <h3 className="font-mono font-semibold text-4xl text-center text-zinc-700">Trivia <span className="text-yellow-300">Game</span></h3>
      <p className="font-sans text-sm pt-5 text-center">¿No tenes cuenta? <Link to={`/${PublicRoutes.REGISTER}`} className="font-mono text-sm text-blue-400 font-semibold">Registrate</Link></p>
      
      <DivContacinerClassic>
        <h4 className="text-center font-sans uppercase text-2xl">Iniciar Sesión</h4>
        <Form />
      </DivContacinerClassic>
      
      <p className="font-sans text-sm pt-5 text-center">¿Perdiste tu contraseña? <Link to={`/${PublicRoutes.SEND_EMAIL}`} className="font-mono text-sm text-blue-400 font-semibold">Recuperarla</Link></p>
    </div>


  )

}

export default Login