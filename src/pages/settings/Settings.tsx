import { Navigate, Route, Routes } from 'react-router-dom';

import NotFound from '../not-found/404';
import Navbar from '../../components/Navbar';

import { FormChangePassword, FormDataUser, NavbarAside } from './components';

export default function Settings() {
	return (
		<div className='h-screen w-full flex flex-col'>
			<Navbar />
			<div className='flex flex-col md:flex-row h-full w-full'>
				<div className=' flex justify-center items-center w-full md:max-w-xs md:w-2/4 max-h-full p-3 md:m-3 my-2 bg-gray-800 md:rounded-sm'>
					<NavbarAside />
				</div>
				<div className='w-full flex justify-center items-center mx-auto h-full'>
					<Routes>
						<Route path='/' element={<Navigate to='data' />} />
						<Route path='data' element={<FormDataUser />} />
						<Route path='password' element={<FormChangePassword />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}
