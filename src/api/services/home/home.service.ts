import axios from '../../base.axios';
import { getUserLogin } from '../../../utils/get-localstorage.util';

export const getCategories = async () => {
	return await axios.get('/api/categories', {
		headers: {
			Authorization: `Bearer ${getUserLogin().token}`,
		},
	});
};

export const getRank = async () => {
	const { id } = getUserLogin();
	return await axios.get(`/api/user-rank/${id}`, {
		headers: {
			Authorization: `Bearer ${getUserLogin().token}`,
		},
	});
};

export const getAllRank = async () => {
	return await axios.get(`/api/users-rank`, {
		headers: {
			Authorization: `Bearer ${getUserLogin().token}`,
		},
	});
};
