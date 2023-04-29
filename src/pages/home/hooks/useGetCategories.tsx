import { useEffect } from 'react';
import { getCategories } from '../../../api/services/home/home.service';
import { useHomeContext } from '../context/HomeContext';
import useErrorNetwork from '../../../hooks/useHandleErrorNetwork';
import { useNavigate } from 'react-router-dom';
import useTokenExpiredError from '../../../hooks/useHandleTokenExpiredError';

export default function useGetCategories() {
	const { setCategories } = useHomeContext();

	const handleErrorNetwork = useErrorNetwork();
	const handleTokenExpireError = useTokenExpiredError();
	const navigate = useNavigate();

	const getAllCategories = async () => {
		try {
			const response = await getCategories();
			setCategories(response.data.category);
		} catch (error: unknown) {
			handleErrorNetwork(error, navigate);
			handleTokenExpireError(error, navigate);
		}
	};

	useEffect(() => {
		getAllCategories();
	}, []);

	return getCategories;
}
