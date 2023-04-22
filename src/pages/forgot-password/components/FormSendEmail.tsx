import { useNavigate } from "react-router-dom"
import { AxiosError, AxiosResponse } from "axios"

import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../../redux/store/store"
import { setLoaderButton } from "../../../redux/features/loaderButton/loaderButton.slice"

import { sendEmail } from "../../../api/services/forgot-password/send-email.service"

import { ISendEmail, INITIAL_VALUE_FORM_SEND_EMAIL } from "../models/interfaces"

import { Formik } from "formik"
import FormikValidate from "../utils/formik-validate"

import { ErrorMessages } from "../../../components/Messages"
import LoaderButton from "../../../components/loader/LoaderButton"
import Toast from "../../../components/toast/Toast"

import { PublicRoutes } from "../../../router"

export default function FormSendEmail() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const isLoaderButton = useSelector((state: AppState) => state.loaderButton)

    const handleClick = () => {
        dispatch(setLoaderButton(true))
    }

    const handleSubmit = async (values: ISendEmail, resetForm: any, setSubmitting: any) => {

        setSubmitting(true)

        try {

            await sendEmail(values.email) as AxiosResponse<any, any>

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
        <Formik initialValues={INITIAL_VALUE_FORM_SEND_EMAIL} onSubmit={(values, { resetForm, setSubmitting }) => handleSubmit(values, resetForm, setSubmitting)} validate={FormikValidate}>

            {
                ({ values, errors, touched, handleChange, handleSubmit, isSubmitting, }) => (

                    <form className="flex flex-col gap-5 my-2 pt-5 place-content-center" onSubmit={handleSubmit}>

                        <input type="email" name="email" placeholder="ejemplo@gmail.com" className="p-4 text-zinc-700 font-sans text-lg focus:outline-none bg-zinc-300" autoFocus onChange={handleChange} value={values.email} />

                        {touched.email && errors.email && <ErrorMessages message={errors.email} />}

                        <button
                            className="border-2 border-gray-800 p-2 text-lg font-semibold font-sans hover:bg-gray-800 hover:text-white transition-colors"
                            type="submit"
                            disabled={isSubmitting}
                            onClick={handleClick}
                        >
                            {isLoaderButton ? <LoaderButton /> : "Enviar"}
                        </button>

                    </form>
                )
            }

        </Formik>
    )
}