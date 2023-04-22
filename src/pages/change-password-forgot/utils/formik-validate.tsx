import { INewPassword } from "../models/interfaces"

export default function FormikValidate(values:INewPassword) {

    const errors = {  } as INewPassword

    if (!values.password) {
        errors.password = 'El password es requerido'
    } else if (!/^.{3,}$/.test(values.password)) {
        errors.password = 'El password debe tener al menos 3 caracteres'
    }

    return errors

}