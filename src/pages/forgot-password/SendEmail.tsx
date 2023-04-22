import { Link } from "react-router-dom"
import { PublicRoutes } from "../../router"

import ContainerForm from "../../components/ContainerForm"
import FormSendEmail from "./components/FormSendEmail"
import Logo from "../../components/Logo"

export default function SendEmail() {

    return (
        <div className="flex flex-col justify-center w-full mx-0 my-auto">

            <Logo />

            <ContainerForm>

                <h4 className="text-center font-mono font-bold text-2xl">Recupera tu constraseña</h4>
                
                <h3 className="text-center font-sans text-md font-semibold bg-gray-200 p-3 mt-3 w-full">Se le enviará un correo electrónico para poder recuperar su contraseña. Recuerda revisar el correo no deseado o spam.</h3>
                
                <FormSendEmail />
            
            </ContainerForm>

            <p className="font-sans text-sm pt-5 text-center">¿Ya tenes cuenta?. <Link to={`/${PublicRoutes.LOGIN}`} className="font-sans text-md text-gray-700 font-bold">Iniciar sesión</Link></p>

        </div>
    )
}