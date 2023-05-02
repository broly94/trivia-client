import { ISettingsChangePassword } from '../models/settings.models';

export default function FormikValidate(values: ISettingsChangePassword) {
	const errors = {} as ISettingsChangePassword;

	if (!values.password) {
		errors.password = 'La contraseña actual es requerida';
	} else if (!/^.{3,}$/.test(values.password)) {
		errors.password = 'La contraseña actual debe tener como minimo 3 caracteres';
	}

	if (!values.newPassword) {
		errors.newPassword = 'La contraseña nueva es requerida';
	} else if (!/^.{3,}$/.test(values.newPassword)) {
		errors.newPassword = 'La contraseña nueva debe tener como minimo 3 caracteres';
	}

	return errors;
}
