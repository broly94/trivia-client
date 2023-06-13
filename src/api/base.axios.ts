import axios from 'axios';
import { config } from '../config/config';

const baseAxios = axios.create({
	baseURL: config.base_url,
	withCredentials: false,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
});

export default baseAxios;
