import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AxiosError, AxiosResponse } from "axios"

import { PublicRoutes } from "../../router"

import { getTokenResetPassword } from "../../api/services/change-password-forgot/set-new-password.service"

import ContainerForm from "../../components/ContainerForm"
import FormNewPassword from "./components/FormNewPassword"
import Toast from "../../components/toast/Toast"
import Logo from "../../components/Logo"

export default function NewPassword() {

  const query = new URLSearchParams(useLocation().search)
  const token = query.get('token')

  const [tokenReset, setTokenReset] = useState('')

  const navigate = useNavigate()

  useEffect(() => {

    const getToken = async () => {

      try {

        // Evalua la primera ves que inicia si hay un token de reseteo de password (en la base de datos), si hay un token...
        const { data } = await getTokenResetPassword(token!) as AxiosResponse<any, any>

        // Guarda el token en un estado para luego en el return evaluar si existe, que muestre el formulario
        setTokenReset(data.token)

      } catch (error: unknown) {

        if (error instanceof AxiosError) {

          if (error.code === "ERR_NETWORK") {
            navigate(`/${PublicRoutes.ERROR_NETWORK}`)
            Toast({
              isSuccess: false,
              messageError: "Error interno en el servidor"
            })
          } else {
            Toast({
              isSuccess: false,
              messageError: "Ooops!!! algo salió mal"
            })
            navigate(`/${PublicRoutes.LOGIN}`)
          }

        }
      }
    }

    getToken()

  }, [])

  return (
    <>
      {
        tokenReset !== '' &&
        (
          <div className="flex flex-col justify-center w-full mx-0 my-auto">

            <Logo />

            <ContainerForm>

              <h4 className="text-center font-mono font-bold text-2xl">Cambia tu  constraseña</h4>
            
              <FormNewPassword />

            </ContainerForm>

          </div>
        )
      }
    </>
  )
}