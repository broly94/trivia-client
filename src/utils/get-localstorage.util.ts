import { decriptedRole } from '../pages/login/utils/encripted';

export const getUserLogin = () => {
	const userNotParse = window.localStorage.getItem('user');
	return JSON.parse(userNotParse!);
};

export const getUserRol = () => {
	const roleNotParse = window.localStorage.getItem('role');
	const roleParse = JSON.parse(roleNotParse!);
	return decriptedRole(roleParse);
};
