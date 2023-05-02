import { Formik } from 'formik';
import FormikValidate from '../utils/form-validate-data-user';
import ContainerForm from '../../../components/ContainerForm';
import { ErrorMessages } from '../../../components/Messages';
import useLoaderButtonTrue from '../../../hooks/useLoaderButtonTrue';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/store/store';
import LoaderButton from '../../../components/loader/LoaderButton';
import { getUserLogin } from '../../../utils/get-localstorage.util';
import { INITIAL_VALUE_FORM_DATA_USER } from '../models/settings.models';
import { setLoaderButton } from '../../../redux/features/loaderButton/loaderButton.slice';
import useErrorNetwork from '../../../hooks/useHandleErrorNetwork';
import { useNavigate } from 'react-router-dom';
import useTokenExpiredError from '../../../hooks/useHandleTokenExpiredError';
import { setDataUser } from '../../../api/services/settings/settings.service';
import Toast from '../../../components/toast/Toast';
import { AxiosError } from 'axios';

export default function FormDataUser() {
	const isLoaderButton = useSelector((state: AppState) => state.loaderButton);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleErrorNetwork = useErrorNetwork();
	const handleTokenExpiredError = useTokenExpiredError();

	const { name } = getUserLogin();

	const setUserInitialValueForm = () => {
		INITIAL_VALUE_FORM_DATA_USER.name = name;
		return INITIAL_VALUE_FORM_DATA_USER;
	};

	const handleSubmit = async (values: any, setSubmitting: any) => {
		setSubmitting(false);

		try {
			await setDataUser(values);
			Toast({
				isSuccess: true,
				messageSuccess: 'Datos actualizados',
			});
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				if (error.response !== undefined) {
					const messageError = `${error.response.data.message}`;

					if (messageError.includes('The name is already in use')) {
						Toast({
							isSuccess: false,
							messageError: 'El usuario ya estan en uso',
						});
						dispatch(setLoaderButton(false));
						return;
					}
				}
			}
			setSubmitting(false);
			handleErrorNetwork(error, navigate);
			handleTokenExpiredError(error, navigate);
		}

		dispatch(setLoaderButton(false));
	};

	return (
		<div className='flex flex-col w-full justify-center items-center gap-10'>
			<h3 className='font-sans font-semibold uppercase text-lg'>Actualiza tus datos</h3>
			<ContainerForm>
				<Formik
					initialValues={setUserInitialValueForm()}
					validate={(values) => FormikValidate(values)}
					onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
				>
					{({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
						<form onSubmit={handleSubmit} className='flex flex-col gap-5 my-2 pt-5'>
							<label htmlFor='name' className='text-sm font-semibold'>
								Nombre o Nickname
							</label>
							<input
								type='text'
								name='name'
								placeholder='Nombre o Nickname'
								className='p-4 text-zinc-700 font-sans text-lg focus:outline-none bg-zinc-300'
								autoFocus
								onChange={handleChange}
								value={values.name}
							/>

							{touched.name && errors.name && <ErrorMessages message={errors.name} />}

							<button
								onClick={useLoaderButtonTrue()}
								className='border-2 border-gray-800 p-2 text-lg font-semibold font-sans hover:bg-gray-800 hover:text-white transition-colors'
								type='submit'
								disabled={isSubmitting}
							>
								{isLoaderButton ? <LoaderButton /> : 'Actualizar'}
							</button>
						</form>
					)}
				</Formik>
			</ContainerForm>
		</div>
	);
}
