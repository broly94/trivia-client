import { ISettingsDataUser } from '../models/settings.models';

function FormikValidate(values: ISettingsDataUser) {
	const errors = {} as ISettingsDataUser;

	if (!values.name) {
		errors.name = 'El nombre es requerido';
	} else if (!/^.{3,}$/.test(values.name)) {
		errors.name = 'El nombre debe tener como minimo 3 caracteres';
	}

	return errors;
}

export default FormikValidate;
