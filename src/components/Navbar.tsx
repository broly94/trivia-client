import { NavLink, useNavigate } from 'react-router-dom';
import { decriptedRole } from '../pages/login/utils/encripted';
import HandleLogout from '../hooks/useHandleLogout';
import { PrivateRoutes, PublicRoutes } from '../router';
import { useEffect } from 'react';
import { getRank } from '../api/services/home/home.service';
import { AxiosResponse } from 'axios';
import useTokenExpiredError from '../hooks/useHandleTokenExpiredError';

function Navbar() {
	const navigate = useNavigate();
	const handleTokenExpiredError = useTokenExpiredError();

	const getRolUser = () => {
		const role = window.localStorage.getItem('role');
		const roleParse = JSON.parse(role!);
		return decriptedRole(roleParse);
	};

	useEffect(() => {
		const getAllRank = async () => {
			try {
				const response = (await getRank()) as AxiosResponse<any, any>;
				console.log(response);
			} catch (error: unknown) {
				handleTokenExpiredError(error, navigate);
			}
		};
		getAllRank();
	}, []);

	return (
		<nav className='flex flex-col lg:flex-row justify-between flex-wrap gap-5 w-full mb-15 p-2 md:p-5 bg-gray-800'>
			<div className='flex justify-center flex-col sm:flex-row items-center flex-1'>
				<NavLink to='/' className='font-mono font-semibold text-3xl text-center text-zinc-50'>
					Trivia
					<span className='text-yellow-300'> Game</span>
				</NavLink>
			</div>

			<div className='flex flex-col-reverse justify-center items-center gap-3 flex-1'>
				<h3 className='font-mono font-semibold text-sm text-center text-zinc-50 self-center mr-3'>
					Puntos: 25000
				</h3>
				<h3 className='font-mono font-semibold text-sm text-center text-zinc-50 self-center mr-3'>
					Posicion: #1
				</h3>
			</div>

			<ul className='flex flex-row justify-center items-center text-zinc-50 font-bold flex-1'>
				{getRolUser() === 'admin' ? (
					<li className='px-1'>
						<NavLink
							to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.ADMIN}`}
							className='text-lg hover:transition-colors py-5 px-1 font-semibold font-sans hover:border-b-4 rounded-t-md hover:text-gray-800 hover:bg-green-300 transition-colors'
						>
							Admin
						</NavLink>
					</li>
				) : (
					<></>
				)}

				<li className='px-1'>
					<NavLink
						to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.RANK}`}
						className='text-lg hover:transition-colors py-5 px-1 font-semibold font-sans hover:border-b-4  rounded-t-md hover:text-gray-800 hover:bg-yellow-300 transition-colors'
					>
						Ranking
					</NavLink>
				</li>

				<li className='px-1'>
					<NavLink
						to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.SETTINGS}`}
						className='text-lg hover:transition-colors py-5 px-1 font-semibold font-sans hover:border-b-4  rounded-t-md hover:text-gray-800 hover:bg-yellow-300 transition-colors'
					>
						Configuracion
					</NavLink>
				</li>

				<li className='px-1'>
					<NavLink
						to={`/${PublicRoutes.LOGIN}`}
						className='text-lg hover:transition-colors py-5 px-1 font-semibold font-sans hover:border-b-4  rounded-t-md hover:text-gray-800 hover:bg-red-300 transition-colors'
						onClick={HandleLogout()}
					>
						Salir
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
