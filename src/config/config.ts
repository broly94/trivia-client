export const config = {
	base_url: import.meta.env.VITE_NODE_ENV !== 'production' ? 'http://localhost:3002' : import.meta.env.VITE_BASE_ENDPOINT,
};
