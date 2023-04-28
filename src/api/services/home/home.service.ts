import axios from '../../base.axios';
import { getToken } from '../../../utils/tokens.utils';
import { getUserLogin } from '../../../utils/get-localstorage.util';

const { token } = getToken();

export const getCategories = async () => {
	return await axios.get('/api/categories', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export const getRank = async () => {
	const { id } = getUserLogin();
	return await axios.get(`/api/user-rank/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export const getAllRank = async () => {
	return await axios.get(`/api/users-rank`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
