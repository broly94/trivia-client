import axios from '../../base.axios';

export const setNewPassword = async (newPassword: string, token: string) => {
	await axios.put(
		'/api/reset-new-password',
		{ password: newPassword },
		{
			headers: {
				token: token,
			},
		}
	);
};

export const getTokenResetPassword = async (token: string) => {
	return axios.get('/api/token-reset-password/', { params: { token } });
};

export const deleteTokenResetPassword = async (token: string) => {
	await axios.put('/api/delete-token-reset-password', { token });
};
