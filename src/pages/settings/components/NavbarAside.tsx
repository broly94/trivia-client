import { NavLink } from 'react-router-dom';

export default function NavbarAside() {
	const listNavbar = [
		{ text: 'Mis datos', url: 'data' },
		{ text: 'Contraseña', url: 'password' },
	];

	return (
		<nav className='w-full'>
			<ul className='flex flex-col justify-center items-center w-full gap-2'>
				{listNavbar.map((data, index) => (
					<li key={index} className='p-1 w-full'>
						<NavLink
							className={({ isActive, isPending }) =>
								`${
									isActive ? 'bg-gray-900 text-white border-green-400 hover:green-gray-700' : ''
								} ${
									isPending ? 'pending' : ''
								} hover:shadow-md hover:shadow-gray-700 w-full block p-3 text-center text-gray-200 text-sm font-semibold uppercase font-sans border-2 border-gray-200 hover:text-white hover:bg-gray-900 transition-colors `
							}
							to={data.url}
						>
							{data.text}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
