import { Formik } from "formik"

interface initialValueForm {
    email?: string,
    password?: string
}

function Form() {

    const INITIAL_VALUE_FORM: initialValueForm = { email: "", password: '' }

    const errorMessages = (message: string | boolean) => {
        return (
            <div className="bg-red-500 text-white font-mono font-medium pl-2">{message}</div>
        )
    }

    return (
        <Formik
            initialValues={INITIAL_VALUE_FORM}
            validate={values => {

                const errors: initialValueForm = {}

                if (!values.email) {
                    errors.email = 'El email es requerido'
                } else if (!/^.{3,}$/.test(values.email)) {
                    errors.email = 'El email debe tener al menos 3 caracteres'
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Ingrese un email valido'
                }

                if (!values.password) {
                    errors.password = 'El password es requerido'
                } else if (!/^.{3,}$/.test(values.password)) {
                    errors.password = 'La contraseña debe tener como minimo 3 caracteres'
                }

                return errors
            }}
            onSubmit={(values, { resetForm, setSubmitting }) => {
                setSubmitting(false)
                resetForm()
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