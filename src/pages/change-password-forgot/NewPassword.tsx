import { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { getTokenResetPassword } from "../../api/services/change-password-forgot/set-new-password.service"
import DivContacinerClassic from "../../components/DivContanerClassic"
import Form from "./components/FormNewPassword"

function FormNewPassword() {

  const query = new URLSearchParams(useLocation().search)
  const token = query.get('token')

  const [data, setData] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const getToken = async () => {
      try {
        const data = await getTokenResetPassword(token!) as AxiosResponse<any, any>
        if (data.data.user[0].resetTokenPassword) {
          setData(data.data.user[0].resetTokenPassword)
        }
      } catch (error) {
        console.log(error)
        navigate('/login')
      }
    }
    getToken()
  }, [])

  return (
    <>
      {
        data !== '' &&
        (
          <div className="flex flex-col justify-center w-full mx-0 my-auto">
            <h3 className="font-mono font-semibold text-4xl text-center text-zinc-700">Trivia <span className="text-yellow-300">Game</span></h3>
            <DivContacinerClassic>
              <h4 className="text-center font-mono font-bold text-2xl">Cambia tu  constraseña</h4>
              <Form />
            </DivContacinerClassic>

          </div>
        )
      }
    </>
  )
}

export default FormNewPassword