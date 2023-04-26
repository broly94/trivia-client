import { useDispatch } from 'react-redux';
import { setLoaderButton } from '../redux/features/loaderButton/loaderButton.slice';

export default function LoaderButtonTrue() {
	const dispatch = useDispatch();

	const loaderButtonTrue = () => {
		dispatch(setLoaderButton(true));
	};

	return loaderButtonTrue;
}
