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
								`${isActive ? 'bg-yellow-500' : ''} ${
									isPending ? 'pending' : ''
								} w-full block p-3 text-center  text-sm font-bold uppercase font-sans bg-yellow-300 text-gray-800 hover:shadow-md transition-colors `
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
