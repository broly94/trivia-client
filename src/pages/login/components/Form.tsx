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
import { encriptedRole } from "../utils/encripted"
import { useState } from "react"
import LoaderButton from "../../../components/loader/LoaderButton"


function Form() {

    const [isValid, setIsValid] = useState(false)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleClick = () => {
        setIsValid(true)
    }

    const handleSubmit = async (values: UserAuth, resetForm: any, setSubmitting: any) => {

        setSubmitting(true)

        try {
            const { data } = await userAuth(values) as AxiosResponse<any, any>

            const { role, ...rest } = data.userLogin

            dispatch(setUser(data.userLogin))

            localStorage.setItem('user', JSON.stringify(rest))

            const roleEncrypt = encriptedRole(role).toString()

            localStorage.setItem('role', JSON.stringify(roleEncrypt))

            setToken(data.userLogin.token)

            navigate('/private/home')
        } catch (error) {
            setSubmitting(false)
            setIsValid(false)
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

                        <button
                            className="border-2 border-gray-800 p-2 text-lg font-semibold font-sans hover:bg-gray-800 hover:text-white transition-colors"
                            type="submit"
                            disabled={isSubmitting}
                            onClick={handleClick}
                        >
                            {
                                isValid ? <LoaderButton /> : 'Ingresar'
                                
                            }
                        </button>

                    </form>
                )
            }

        </Formik>

    )
}

export default Form