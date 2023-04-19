import { Link } from "react-router-dom"
import DivContacinerClassic from "../../components/DivContanerClassic"

import { PublicRoutes } from "../../router"
import Form from "./components/Form"


function Register() {
  return (
    
    <div className="flex flex-col justify-center w-full mx-0 my-auto">
      <h3 className="font-mono font-semibold text-4xl text-center text-gray-800 mb-10">Trivia <span className="text-yellow-300">Game</span></h3>

      <DivContacinerClassic>
        <h4 className="text-center font-sans font-bold uppercase text-2xl">Registrate</h4>
        <Form />
      </DivContacinerClassic>

      <p className="font-sans text-sm pt-5 text-center">¿Ya tenes cuenta?. <Link to={`/${PublicRoutes.LOGIN}`} className="font-sans text-md text-gray-700 font-bold">Iniciar sesión</Link></p>

    </div>
  )
}

export default Register