import { AxiosError, AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../../redux/store/store"
import { setLoaderButton } from "../../../redux/features/loaderButton/loaderButton.slice"

import { userAuth } from "../../../api/services/auth/auth.service"

import { Formik } from "formik"
import { ILogin, INITIAL_VALUE_FORM_LOGIN } from "../models/interfaces"
import FormikValidate from "../utils/formik-validate"

import { setToken } from "../../../utils/tokens.utils"

import Toast from "../../../components/toast/Toast"
import { encriptedRole } from "../utils/encripted"

import { ErrorMessages } from "../../../components/Messages"
import LoaderButton from "../../../components/loader/LoaderButton"

import { PrivateRoutes, PublicRoutes } from "../../../router"

export default function FormLogin() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const isLoaderButton = useSelector((state: AppState) => state.loaderButton)

    const handleClick = () => {
        dispatch(setLoaderButton(true))
    }

    const handleSubmit = async (values: ILogin, resetForm: any, setSubmitting: any) => {

        setSubmitting(true)

        try {

            const { data } = await userAuth(values) as AxiosResponse<any, any>

            const { role, ...rest } = data.userLogin

            const roleEncrypt = encriptedRole(role).toString()

            window.localStorage.setItem('user', JSON.stringify(rest))

            window.localStorage.setItem('role', JSON.stringify(roleEncrypt))

            setToken(data.userLogin.token)

            navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`)

        } catch (error: unknown) {

            setSubmitting(false)

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
                        messageError: "Ooops!!! algo salió mal. Intenta de nuevo"
                    })
                }

            }
        }

        resetForm()

        dispatch(setLoaderButton(false))
    }

    return (

        <Formik initialValues={INITIAL_VALUE_FORM_LOGIN} validate={values => FormikValidate(values)} onSubmit={(values, { resetForm, setSubmitting }) => handleSubmit(values, resetForm, setSubmitting)}>

            {
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
                            {isLoaderButton ? <LoaderButton /> : 'Ingresar'}
                        </button>

                    </form>
                )
            }

        </Formik>
    )
}