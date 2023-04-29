import { Formik } from 'formik';
import FormikValidate from '../utils/FormikValidate';

export default function FormSettings() {
	const handleSubmit = (values: any, setSubmitting: any) => {};

	return (
		<div className='flex flex-col justify-center items-center w-full flex-1 p-5'>
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={(values) => FormikValidate(values)}
				onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					<form onSubmit={handleSubmit} className=''>
						<input
							type='email'
							name='email'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							className=''
						/>
						{errors.email && touched.email && errors.email}
						<input
							type='password'
							name='password'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
						{errors.password && touched.password && errors.password}
						<button type='submit' disabled={isSubmitting}>
							Submit
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
}
