import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Formik } from "formik"

import { deleteTokenResetPassword, setNewPassword } from '../../../api/services/change-password-forgot/set-new-password.service'

import { IinitialValue, INITIAL_VALUE_FORM } from "../models/interfaces"

import FormikValidate from "../utils/FormikValidate"

import { ErrorMessages } from "../../../utils/components/Messages"

import Toast from "../../../components/toast/Toast"


function Form() {

    const query = new URLSearchParams(useLocation().search)
    
    const token = query.get('token') as string

    const navigate = useNavigate()

    const handleSubmit = async (values: IinitialValue , resetForm: any, setSubmitting: any) => { 
        
        try {
            setSubmitting(true)
            setNewPassword(values.password, token)
            deleteTokenResetPassword(token)
            navigate('/login')
            Toast({
                isSuccess: true,
                messageSuccess: 'Cambiaste tu contraseña'
            })
        } catch (error) {
            setSubmitting(false)
            resetForm()
            Toast({
                isSuccess: false,
                messageError: 'Error al poder cambiar la contraseña de esta cuenta'
            })
        }

    } 

  return (
    <Formik initialValues={INITIAL_VALUE_FORM} onSubmit={(values, { resetForm, setSubmitting }) => handleSubmit(values, resetForm, setSubmitting)}  validate={FormikValidate}
    >{
        ({values, errors, touched, handleChange, handleSubmit, isSubmitting,}) => (
            <form className="flex flex-col gap-5 my-2 pt-5 place-content-center" onSubmit={handleSubmit}>
                
                <input type="password" name="password" placeholder="**********" className="p-4 text-zinc-700 font-sans text-lg focus:outline-none bg-zinc-300" autoFocus onChange={handleChange} value={values.password} />
                {touched.password && errors.password && <ErrorMessages message={errors.password} />}

                <button className="border-2 border-zinc-600 p-2 text-lg font-semibold font-sans hover:bg-yellow-300 hover:text-black transition-colors" type="submit" disabled={isSubmitting}>Cambiar</button>
            </form>
        )
        }

    </Formik>
  )
}

export default Form