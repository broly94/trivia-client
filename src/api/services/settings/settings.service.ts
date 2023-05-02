import { ISettingsChangePassword, ISettingsDataUser } from '../../../pages/settings/models/settings.models';
import { getUserLogin } from '../../../utils/get-localstorage.util';
import axios from '../../base.axios';

export const setDataUser = async (dataUser: ISettingsDataUser) => {
	return await axios.put(
		'/api/user',
		{
			name: dataUser.name,
		},
		{
			headers: {
				Authorization: `Bearer ${getUserLogin().token}`,
			},
		}
	);
};

export const setNewPassword = async ({ password, newPassword }: ISettingsChangePassword) => {
	return await axios.put(
		'/api/change-password',
		{
			password,
			newPassword,
		},
		{
			headers: {
				Authorization: `Bearer ${getUserLogin().token}`,
			},
		}
	);
};
