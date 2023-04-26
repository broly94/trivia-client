import CryptoJs from 'crypto-js';

export const encriptedRole = (role: string) => {
	return CryptoJs.AES.encrypt(role, '@trivia-app').toString();
};

export const decriptedRole = (role: string) => {
	const bytes = CryptoJs.AES.decrypt(role, '@trivia-app');
	return bytes.toString(CryptoJs.enc.Utf8);
};
