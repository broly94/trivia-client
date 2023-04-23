import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"

import { deleteTokenResetPassword, setNewPassword } from '../../../api/services/change-password-forgot/set-new-password.service'

import { Formik } from "formik"
import FormikValidate from "../utils/formik-validate"


import { ErrorMessages } from "../../../components/Messages"
import Toast from "../../../components/toast/Toast"
import LoaderButton from "../../../components/loader/LoaderButton"

import { INewPassword, INITIAL_VALUE_FORM_NEW_PASSWORD } from "../models/interfaces"
import { setLoaderButton } from "../../../redux/features/loaderButton/loaderButton.slice"
import { AppState } from "../../../redux/store/store"

import useLoaderButtonTrue from "../../../hooks/useLoaderButtonTrue"
import useErrorNetwork from "../../../hooks/useHandleErrorNetwork"

import { PublicRoutes } from "../../../router"

export default function FormNewPassword() {

    const query = new URLSearchParams(useLocation().search)

    const token = query.get('token') as string

    const isLoaderButton = useSelector((state: AppState) => state.loaderButton)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleErrorNetwork = useErrorNetwork()

    const handleSubmit = (values: INewPassword, resetForm: any, setSubmitting: any) => {

        setSubmitting(true)

        try {

            if (token) {
                setNewPassword(values.password, token)
                deleteTokenResetPassword(token)
                navigate(`/${PublicRoutes.LOGIN}`)
            }

            Toast({
                isSuccess: true,
                messageSuccess: 'Cambiaste tu contraseña'
            })

        } catch (error: unknown) {

            setSubmitting(false)

            handleErrorNetwork(error, navigate)
     
        }

        resetForm()

        dispatch(setLoaderButton(false))
    }

    return (

        <Formik initialValues={INITIAL_VALUE_FORM_NEW_PASSWORD} onSubmit={(values, { resetForm, setSubmitting }) => handleSubmit(values, resetForm, setSubmitting)} validate={FormikValidate}>
            
            {
                ({ values, errors, touched, handleChange, handleSubmit, isSubmitting, }) => (
                    
                    <form className="flex flex-col gap-5 my-2 pt-5 place-content-center" onSubmit={handleSubmit}>

                        <input type="password" name="password" placeholder="**********" className="p-4 text-zinc-700 font-sans text-lg focus:outline-none bg-zinc-300" autoFocus onChange={handleChange} value={values.password} />
                        
                        {touched.password && errors.password && <ErrorMessages message={errors.password} />}

                        <button
                            className="border-2 border-gray-800 p-2 text-lg font-semibold font-sans hover:bg-gray-800 hover:text-white transition-colors"
                            type="submit"
                            disabled={isSubmitting}
                            onClick={useLoaderButtonTrue()}
                        >
                            {isLoaderButton ? <LoaderButton /> : "Cambiar"}
                        </button>
                    </form>
                )
            }

        </Formik>
    )
}