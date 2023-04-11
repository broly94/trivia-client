import { Link } from "react-router-dom"
import DivContacinerClassic from "../../components/DivContanerClassic"
import { PublicRoutes } from "../../router"
import Form from "./components/FormSendEmail"

function SendEmail() {

    return (
        <div className="flex flex-col justify-center w-full mx-0 my-auto">
            <h3 className="font-mono font-semibold text-4xl text-center text-zinc-700">Trivia <span className="text-yellow-300">Game</span></h3>

            <DivContacinerClassic>
                <h4 className="text-center font-mono font-bold text-2xl">Recupera tu constraseña</h4>
                <h3 className="text-center font-base text-md bg-zinc-200 p-3 mt-3 w-full">Se le enviará un correo electrónico para poder recuperar su contraseña. Recuerda revisar el correo no deseado o spam.</h3>
                <Form />
            </DivContacinerClassic>

            <p className="font-sans text-sm pt-5 text-center">¿Ya tenes cuenta?. <Link to={`/${PublicRoutes.LOGIN}`} className="font-mono text-sm text-blue-400 font-semibold">Iniciar sesión</Link></p>

        </div>
    )
}

export default SendEmail