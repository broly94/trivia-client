import { getUserLogin } from '../../../utils/get-localstorage.util';
import axios from '../../base.axios';
console.log(`Bearer ${getUserLogin().token}`);
export const getAllQuestions = async (category: string, level: string) => {
	return await axios.get(`/api/questions?level=${level}&category=${category}`, {
		headers: {
			Authorization: `Bearer ${getUserLogin().token}`,
		},
	});
};

export const setPointsUser = async (points: number) => {
	await axios.put(
		'/api/set-points',
		{ id: getUserLogin().id, points },
		{
			headers: {
				Authorization: `Bearer ${getUserLogin().token}`,
			},
		}
	);
};
