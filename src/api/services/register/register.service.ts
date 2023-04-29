import axios from '../../base.axios';
import { IRegister } from '../../../pages/register/models/interfaces';

export const registerUser = async (user: IRegister) => {
	await axios.post('/api/user', user);
};
