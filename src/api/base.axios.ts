import axios from 'axios';

const baseAxios = axios.create({
	baseURL: `${import.meta.env.VITE_BASE_ENDPOINT}`,
	// baseURL: 'http://localhost:3002',
	withCredentials: false,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
});

export default baseAxios;
