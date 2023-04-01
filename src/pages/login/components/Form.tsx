import { Formik } from "formik"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { AxiosResponse } from "axios"

import { setUser } from "../../../redux/features/user/user.slice"
import { userAuth } from "../../../api/services/auth/auth.service"

import { UserAuth } from "../../../models/user/user.types"
import { INITIAL_VALUE_FORM } from "../models/interfaces"
import FormikValidate from "../utils/FormikValidate"

import { setToken } from "../../../utils/tokens.utils"

import Toast from "../../../components/toast/Toast"

import { ErrorMessages } from "../../../utils/components/Messages"


function Form() {

    const dispatch = useDispatch()

    const navigate = useNavigate()
  
    const handleSubmit = async (values: UserAuth, resetForm: any, setSubmitting: any) => {
        try {

            setSubmitting(true)
            const { data } = await userAuth(values) as AxiosResponse<any, any>
            dispatch(setUser(data.userLogin))
            setToken(data.userLogin.token)
            navigate('/private/home')
        } catch (error) {
            setSubmitting(false)
            resetForm()
            Toast({
                isSuccess: false,
                messageError: "Ooops!!! algo salió mal. Intenta de nuevo"
            })
        }
    }

    return (

        <Formik
            initialValues={INITIAL_VALUE_FORM}
            validate={values => FormikValidate(values)}
            onSubmit={(values, { resetForm, setSubmitting }) => handleSubmit(values, resetForm, setSubmitting)}
        >{
                ({ values, errors, touched, handleChange, isSubmitting, handleSubmit }) => (

                    <form className="flex flex-col gap-5 my-2 pt-5" onSubmit={handleSubmit}>

                        <input type="email" name="email" placeholder="ejemplo@gmail.com" className="p-4 text-zinc-700 font-sans text-lg focus:outline-none bg-zinc-300" autoFocus onChange={handleChange} value={values.email} />
                        {touched.email && errors.email && <ErrorMessages message={errors.email} />}

                        <input type="password" name="password" placeholder="********" className="p-4 text-zinc-700 font-sans text-lg focus:outline-none bg-zinc-300" onChange={handleChange} value={values.password} />
                        {touched.password && errors.password && <ErrorMessages message={errors.password} />}

                        <button className="border-2 border-zinc-600 p-2 text-lg font-semibold font-sans hover:bg-yellow-300 hover:text-black transition-colors" type="submit" disabled={isSubmitting}>Entrar</button>

                    </form>
                )
            }

        </Formik>

    )
}

export default Form