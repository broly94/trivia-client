import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { AppState } from '../../../redux/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setLoaderButton } from '../../../redux/features/loaderButton/loaderButton.slice';
import { PublicRoutes } from '../../../router';

import { Formik } from 'formik';
import FormikValidate from '../utils/form-validate';

import { registerUser } from '../../../api/services/register/register.service';

import { INITIAL_VALUE_FORM_REGISTER, IRegister } from '../models/interfaces';

import { ErrorMessages } from '../../../components/Messages';

import Toast from '../../../components/toast/Toast';
import LoaderButton from '../../../components/loader/LoaderButton';

import useLoaderButtonTrue from '../../../hooks/useLoaderButtonTrue';
import useErrorNetwork from '../../../hooks/useHandleErrorNetwork';

export default function FormRegister() {
	const isLoaderButton = useSelector((state: AppState) => state.loaderButton);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleErrorNetwork = useErrorNetwork();

	const handleSubmit = async (values: IRegister, resetForm: any, setSubmitting: any) => {
		setSubmitting(true);

		try {
			await registerUser(values);

			navigate(`/${PublicRoutes.LOGIN}`);

			Toast({
				isSuccess: true,
				messageSuccess: 'Te registraste correctamente',
			});
		} catch (error: unknown) {
			setSubmitting(false);

			handleErrorNetwork(error, navigate);

			if (error instanceof AxiosError) {
				if (error.response !== undefined) {
					const messageError = `${error.response.data.message}`;

					if (messageError.includes('The email or name are already in use')) {
						Toast({
							isSuccess: false,
							messageError: 'El usuario o el email ya estan en uso',
						});
					}
				}
			}
		}

		resetForm();

		dispatch(setLoaderButton(false));
	};

	return (
		<Formik
			initialValues={INITIAL_VALUE_FORM_REGISTER}
			validate={(values) => FormikValidate(values)}
			onSubmit={(values, { resetForm, setSubmitting }) =>
				handleSubmit(values, resetForm, setSubmitting)
			}
		>
			{({ values, errors, touched, handleChange, isSubmitting, handleSubmit }) => (
				<form
					className='flex flex-col gap-5 my-2 pt-5'
					onSubmit={handleSubmit}
					autoComplete={'none'}
				>
					<input
						type='text'
						name='name'
						placeholder='Joe'
						className='p-4 text-zinc-700 font-sans text-lg focus:outline-none bg-zinc-300'
						autoFocus
						onChange={handleChange}
						value={values.name}
					/>

					{touched.name && errors.name && <ErrorMessages message={errors.name} />}

					<input
						type='email'
						name='email'
						placeholder='ejemplo@gmail.com'
						className='p-4 text-zinc-700 font-sans text-lg focus:outline-none bg-zinc-300'
						onChange={handleChange}
						value={values.email}
					/>

					{touched.email && errors.email && <ErrorMessages message={errors.email} />}

					<input
						type='password'
						name='password'
						placeholder='********'
						className='p-4 text-zinc-700 font-sans text-lg focus:outline-none bg-zinc-300'
						onChange={handleChange}
						value={values.password}
					/>

					{touched.password && errors.password && <ErrorMessages message={errors.password} />}

					<button
						onClick={useLoaderButtonTrue()}
						className='border-2 border-gray-800 p-2 text-lg font-semibold font-sans hover:bg-gray-800 hover:text-white transition-colors'
						type='submit'
						disabled={isSubmitting}
					>
						{isLoaderButton ? <LoaderButton /> : 'Registrarse'}
					</button>
				</form>
			)}
		</Formik>
	);
}
