import { Formik } from 'formik';
import FormikValidate from '../utils/form-validate-change-password';
import ContainerForm from '../../../components/ContainerForm';
import { ErrorMessages } from '../../../components/Messages';
import useLoaderButtonTrue from '../../../hooks/useLoaderButtonTrue';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/store/store';
import LoaderButton from '../../../components/loader/LoaderButton';
import { INITIAL_VALUE_FORM_CHANGE_PASSWORD } from '../models/settings.models';
import { setLoaderButton } from '../../../redux/features/loaderButton/loaderButton.slice';
import useErrorNetwork from '../../../hooks/useHandleErrorNetwork';
import { useNavigate } from 'react-router-dom';
import useTokenExpiredError from '../../../hooks/useHandleTokenExpiredError';
import { setNewPassword } from '../../../api/services/settings/settings.service';
import Toast from '../../../components/toast/Toast';

export default function FormChangePassword() {
	const isLoaderButton = useSelector((state: AppState) => state.loaderButton);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleErrorNetwork = useErrorNetwork();
	const handleTokenExpiredError = useTokenExpiredError();

	const handleSubmit = async (values: any, setSubmitting: any, resetForm: any) => {
		setSubmitting(false);

		try {
			await setNewPassword(values);
			Toast({
				isSuccess: true,
				messageSuccess: 'Contraseña actualizada',
			});
		} catch (error: unknown) {
			handleErrorNetwork(error, navigate);
			handleTokenExpiredError(error, navigate);
		}

		resetForm();
		dispatch(setLoaderButton(false));
	};

	return (
		<div className='flex flex-col w-full justify-center items-center gap-10'>
			<h3 className='font-sans font-semibold uppercase text-lg'>Actualiza tu contraseña</h3>
			<ContainerForm>
				<Formik
					initialValues={INITIAL_VALUE_FORM_CHANGE_PASSWORD}
					validate={(values) => FormikValidate(values)}
					onSubmit={(values, { setSubmitting, resetForm }) => handleSubmit(values, setSubmitting, resetForm)}
				>
					{({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
						<form onSubmit={handleSubmit} className='flex flex-col gap-5 my-2 pt-5'>
							<label htmlFor='name' className='text-sm font-semibold'>
								Contraseña actual
							</label>
							<input
								type='password'
								name='password'
								placeholder='**************'
								className='p-4 text-zinc-700 font-sans text-lg focus:outline-none bg-zinc-300'
								autoFocus
								onChange={handleChange}
								value={values.password}
							/>

							{touched.password && errors.password && <ErrorMessages message={errors.password} />}

							<label htmlFor='name' className='text-sm font-semibold'>
								Contraseña nueva
							</label>
							<input
								type='password'
								name='newPassword'
								placeholder='**************'
								className='p-4 text-zinc-700 font-sans text-lg focus:outline-none bg-zinc-300'
								autoFocus
								onChange={handleChange}
								value={values.newPassword}
							/>

							{touched.newPassword && errors.newPassword && <ErrorMessages message={errors.newPassword} />}

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
