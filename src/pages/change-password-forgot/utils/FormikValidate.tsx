import { IinitialValue } from "../models/interfaces"

function FormikValidate(values:IinitialValue) {

    const errors = {  } as IinitialValue

    if (!values.password) {
        errors.password = 'El password es requerido'
    } else if (!/^.{3,}$/.test(values.password)) {
        errors.password = 'El password debe tener al menos 3 caracteres'
    }

    return errors

}

export default FormikValidate