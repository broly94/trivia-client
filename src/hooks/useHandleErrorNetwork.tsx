import { AxiosError } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import Toast from '../components/toast/Toast';
import { PublicRoutes } from '../router';

export default function ErrorNetwork() {
	const errorNetwork = (error: unknown, navigate: NavigateFunction) => {
		if (error instanceof AxiosError) {
			if (error.code === 'ERR_NETWORK') {
				navigate(`/${PublicRoutes.ERROR_NETWORK}`);
				Toast({
					isSuccess: false,
					messageError: 'Error interno en el servidor',
				});
			} else {
				Toast({
					isSuccess: false,
					messageError: '¡Error: Revisa los datos e intenta nuevamente...!',
				});
			}
		}
	};

	return errorNetwork;
}
