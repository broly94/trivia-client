import { AxiosResponse } from "axios"

import { sendEmail } from "../../../api/services/forgot-password/send-email.service"

import { initialValueForm, INITIAL_VALUE_FORM } from "../models/interfaces"

import { Formik } from "formik"
import FormikValidate from "../utils/FormikValidate"

import { ErrorMessages } from "../../../utils/components/Messages"

function Form() {


    const handleSubmit = async (values: initialValueForm, resetForm: any, setSubmitting: any) => {

        try {
            setSubmitting(true)
            const { data } = await sendEmail(values.email) as AxiosResponse<any, any>
            console.log(data)
            
            resetForm()
        } catch (error) {
            setSubmitting(false)
            resetForm()
            console.log(error)
        }

    }

    return (
        <Formik initialValues={INITIAL_VALUE_FORM} onSubmit={(values, { resetForm, setSubmitting }) => handleSubmit(values, resetForm, setSubmitting)} validate={FormikValidate}
        >{
                ({ values, errors, touched, handleChange, handleSubmit, isSubmitting, }) => (
                    <form className="flex flex-col gap-5 my-2 pt-5 place-content-center" onSubmit={handleSubmit}>

                        <input type="email" name="email" placeholder="ejemplo@gmail.com" className="p-4 text-zinc-700 font-sans text-lg focus:outline-none bg-zinc-300" autoFocus onChange={handleChange} value={values.email} />
                        {touched.email && errors.email && <ErrorMessages message={errors.email} />}

                        <button className="border-2 border-zinc-600 p-2 text-lg font-semibold font-sans hover:bg-yellow-300 hover:text-black transition-colors" type="submit" disabled={isSubmitting}>Enviar</button>
                    </form>
                )
            }

        </Formik>
    )
}

export default Form