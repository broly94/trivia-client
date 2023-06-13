export const config = {
	base_url: import.meta.env.VITE_NODE_ENV === 'production' ? import.meta.env.VITE_BASE_ENDPOINT : 'http://localhost:3002',
};
