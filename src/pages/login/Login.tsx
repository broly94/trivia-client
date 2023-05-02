import { Link } from 'react-router-dom';
import ContainerForm from '../../components/ContainerForm';

import { PublicRoutes } from '../../router';

import FormLogin from './components/FormLogin';
import Logo from '../../components/Logo';

export default function Login() {
	return (
		<div className='flex flex-col justify-center w-full mx-0 my-auto'>
			<Logo />

			<p className='font-sans text-sm pt-5 text-center mb-3'>
				¿No tenes cuenta?{' '}
				<Link to={`/${PublicRoutes.REGISTER}`} className='font-sans text-md text-gray-700 font-bold'>
					Registrate
				</Link>
			</p>

			<ContainerForm>
				<h4 className='text-center font-sans font-bold uppercase text-2xl'>Iniciar Sesión</h4>

				<FormLogin />
			</ContainerForm>

			<p className='font-sans text-sm pt-5 text-center'>
				¿Perdiste tu contraseña?{' '}
				<Link to={`/${PublicRoutes.SEND_EMAIL}`} className='font-sans text-md text-gray-700 font-bold'>
					Recuperarla
				</Link>
			</p>
		</div>
	);
}
