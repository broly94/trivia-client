export interface ISettingsDataUser {
	name: string;
}

export interface ISettingsChangePassword {
	password: string;
	newPassword: string;
}

export const INITIAL_VALUE_FORM_DATA_USER: ISettingsDataUser = { name: '' };

export const INITIAL_VALUE_FORM_CHANGE_PASSWORD: ISettingsChangePassword = { password: '', newPassword: '' };
