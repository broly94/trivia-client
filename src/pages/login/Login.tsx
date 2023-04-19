import { Link } from "react-router-dom"
import DivContacinerClassic from "../../components/DivContanerClassic"

import { PublicRoutes } from "../../router"

import Form from "./components/Form"

function Login() {

  return (
    
    <div className="flex flex-col justify-center w-full mx-0 my-auto">

      <h3 className="font-mono font-semibold text-4xl text-center text-gray-800">Trivia <span className="text-yellow-300">Game</span></h3>

      <p className="font-sans text-sm pt-5 text-center mb-3">¿No tenes cuenta? <Link to={`/${PublicRoutes.REGISTER}`} className="font-sans text-md text-gray-700 font-bold">Registrate</Link></p>
      
      <DivContacinerClassic>
        <h4 className="text-center font-sans font-bold uppercase text-2xl">Iniciar Sesión</h4>
        <Form />
      </DivContacinerClassic>
      
      <p className="font-sans text-sm pt-5 text-center">¿Perdiste tu contraseña? <Link to={`/${PublicRoutes.SEND_EMAIL}`} className="font-sans text-md text-gray-700 font-bold">Recuperarla</Link></p>
    </div>

  )

}

export default Login