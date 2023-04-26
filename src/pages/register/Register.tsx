import { Link } from 'react-router-dom';

import { PublicRoutes } from '../../router';

import ContainerForm from '../../components/ContainerForm';
import FormRegister from './components/FormRegister';
import Logo from '../../components/Logo';

export default function Register() {
	return (
		<div className='flex flex-col justify-center w-full mx-0 my-auto'>
			<Logo />

			<ContainerForm>
				<h4 className='text-center font-sans font-bold uppercase text-2xl'>Registrate</h4>

				<FormRegister />
			</ContainerForm>

			<p className='font-sans text-sm pt-5 text-center'>
				¿Ya tenes cuenta?.{' '}
				<Link to={`/${PublicRoutes.LOGIN}`} className='font-sans text-md text-gray-700 font-bold'>
					Iniciar sesión
				</Link>
			</p>
		</div>
	);
}
