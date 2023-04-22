import { ISendEmail } from "../models/interfaces"

function FormikValidate(values: ISendEmail) {

    const errors = {} as ISendEmail

    if (!values.email) {
        errors.email = 'El email es requerido'
    } else if (!/^.{3,}$/.test(values.email)) {
        errors.email = 'El email debe tener al menos 3 caracteres'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Ingrese un email valido'
    }

    return errors

}

export default FormikValidate