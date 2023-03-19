import { Formik } from "formik"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUser } from "../../../redux/features/user/user.slice"

import { userAuth } from "../../../api/user/user.auth"

import { INITIAL_VALUE_FORM } from "../models/interfaces"

import FormikValidate from "./FormikValidate"
import Toast from "../../../components/toast/Toast"


function Form() {

    // const [errorRequest, setErrorRequest] = useState(false)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    

    const errorMessages = (message: string | boolean) => {
        return (
            <div className="bg-red-500 text-white font-mono font-medium pl-2">{message}</div>
        )
    }

    return (

        <Formik
            initialValues={INITIAL_VALUE_FORM}
            validate={values => FormikValidate(values)}
            onSubmit={async (values, { resetForm, setSubmitting }) => {
                try {
                    const {data} = await userAuth(values)
                     setSubmitting(true)
                     dispatch(setUser(data.userLogin))
                     navigate('/private/home')
                } catch (error) {
                    resetForm()
                    console.log(error)
                    setSubmitting(false)
                }
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, isSubmitting, handleSubmit }) => (

                <form className="flex flex-col gap-3 my-5" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="ejemplo@gmail.com"
                        className="p-2 rounded-sm text-black font-mono text-base"
                        autoFocus
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {touched.email && errors.email && errorMessages(errors.email!)}
                    <input
                        type="password"
                        name="password"
                        placeholder="********"
                        className="p-2 rounded-sm text-black font-mono text-base"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {touched.password && errors.password && errorMessages(errors.password!)}

                    <button className="border-2 p-2 text-md font-mono hover:bg-yellow-500 hover:text-black transition-colors" type="submit" disabled={isSubmitting}>Entrar</button>


                </form>
            )}

        </Formik>
    )
}

export default Form

{/* <Toast isSuccess={false} messageError={"Error al ingresar. Intente de nuevo"} /> */}