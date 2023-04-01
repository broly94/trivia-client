import { UserAuth } from "../../../models/user/user.types"
import { initialValueForm } from "../models/interfaces"

function FormikValidate(values:UserAuth) {

    const errors = {  } as initialValueForm

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

}

export default FormikValidate