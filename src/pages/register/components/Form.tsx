import { Formik } from "formik"
import { useNavigate } from "react-router-dom"

import { registerUser } from "../../../api/services/register/register.service"

import { INITIAL_VALUE_FORM, User } from "../models/interfaces"

import FormikValidate from "../utils/form-validate"

import Toast from "../../../components/toast/Toast"

import { ErrorMessages } from "../../../utils/components/Messages"

function Form() {

    const navigate = useNavigate()

    const handleSubmit = async (values: User, resetForm: any, setSubmitting: any) => {
        try {

            setSubmitting(true)
            await registerUser(values)
            navigate('/login')
            Toast({
                isSuccess: true,
                messageSuccess: "Te registraste correctamente."
            })
        } catch (error: any) {
            const err = `${error?.response.data.message}`
            if (err.includes('The email or name are already in use')) {
                Toast({
                    isSuccess: false,
                    messageError: 'El usuario o el email ya estan en uso'
                })
            } else {
                Toast({
                    isSuccess: false,
                    messageError: "Ooops!!! algo salió mal. Intenta de nuevo"
                })
            }
            setSubmitting(false)
        }
        resetForm()

    }

    return (

        <Formik initialValues={INITIAL_VALUE_FORM} validate={values => FormikValidate(values)} onSubmit={(values, { resetForm, setSubmitting }) => handleSubmit(values, resetForm, setSubmitting)}
        >{

                ({ values, errors, touched, handleChange, isSubmitting, handleSubmit }) => (

                    <form className="flex flex-col gap-5 my-2 pt-5" onSubmit={handleSubmit} autoComplete={'none'}>

                        <input type="text" name="name" placeholder="Joe" className="p-4 text-zinc-700 font-sans text-lg focus:outline-none bg-zinc-300" autoFocus onChange={handleChange} value={values.name} />
                        {touched.name && errors.name && <ErrorMessages message={errors.name} />}

                        <input type="email" name="email" placeholder="ejemplo@gmail.com" className="p-4 text-zinc-700 font-sans text-lg focus:outline-none bg-zinc-300" onChange={handleChange} value={values.email} />
                        {touched.email && errors.email && <ErrorMessages message={errors.email} />}

                        <input type="password" name="password" placeholder="********" className="p-4 text-zinc-700 font-sans text-lg focus:outline-none bg-zinc-300" onChange={handleChange} value={values.password} />

                        {touched.password && errors.password && <ErrorMessages message={errors.password} />}

                        <button className="border-2 border-gray-800 p-2 text-lg font-semibold font-sans hover:bg-gray-800 hover:text-white transition-colors" type="submit" disabled={isSubmitting}>Registrarse</button>

                    </form>
                )
            }

        </Formik>

    )
}

export default Form