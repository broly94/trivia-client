import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import FormDataUser from './components/FormDataUser';
import FormChangePassword from './components/FormChangePassword';
import { NavLink } from 'react-router-dom';

export default function Settings() {
	return (
		<div className='h-screen w-full flex flex-col'>
			<Navbar />
			<div className='flex flex-row mx-auto h-full w-full max-w-5xl sm:px-6 lg:px-8'>
				<div className='max-w-xs max-h-full bg-slate-400 p-3'>
					<nav>
						<ul>
							<li>
								<Link to='data'>Mis datos</Link>
							</li>
							<li>
								<Link to='password'>Password</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className='w-full flex justify-center items-center mx-auto'>
					<Routes>
						<Route path='data' element={<FormDataUser />} />
						<Route path='password' element={<FormChangePassword />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}
