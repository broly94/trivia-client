import { Formik } from 'formik';
import FormikValidate from '../utils/form-validate-data-user';
import ContainerForm from '../../../components/ContainerForm';
import { ErrorMessages } from '../../../components/Messages';
import useLoaderButtonTrue from '../../../hooks/useLoaderButtonTrue';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/store/store';
import LoaderButton from '../../../components/loader/LoaderButton';
import { getUserLogin } from '../../../utils/get-localstorage.util';
import { INITIAL_VALUE_FORM_DATA_USER } from '../models/settings.models';

export default function FormDataUser() {
	const isLoaderButton = useSelector((state: AppState) => state.loaderButton);

	const { name } = getUserLogin();

	const setUserInitialValueForm = () => {
		INITIAL_VALUE_FORM_DATA_USER.name = name;
		return INITIAL_VALUE_FORM_DATA_USER;
	};

	const handleSubmit = (values: any, setSubmitting: any, resetForm: any) => {
		console.log(values);
	};

	return (
		<div className='flex flex-col w-full justify-center items-center gap-10'>
			<h3 className='font-sans font-semibold uppercase text-lg'>Actualiza tus datos</h3>
			<ContainerForm>
				<Formik
					initialValues={setUserInitialValueForm()}
					validate={(values) => FormikValidate(values)}
					onSubmit={(values, { setSubmitting, resetForm }) =>
						handleSubmit(values, setSubmitting, resetForm)
					}
				>
					{({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
						<form onSubmit={handleSubmit} className='flex flex-col gap-5 my-2 pt-5'>
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
