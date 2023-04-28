import TableRank from './components/TableRank';
import { PrivateRoutes } from '../../router';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';

export default function Rankig() {
	return (
		<div className='ranking flex flex-col mx-0 my-auto w-full max-w-3xl h-3/4'>
			<Logo />
			<div className='back-button flex flex-row gap-2'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					className='w-5 h-5'
				>
					<path
						fillRule='evenodd'
						d='M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z'
						clipRule='evenodd'
					/>
				</svg>
				<p className='font-sans text-sm text-center'>
					<Link
						to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`}
						className='font-mono text-sm text-blue-400 font-semibold'
					>
						Volver
					</Link>
				</p>
			</div>

			<h3 className='text-center p-5 text-xl font-semibold uppercase border-zinc-600 bg-gray-800 text-white mt-3 mb-3'>
				Ranking
			</h3>
			<div className='flex flex-wrap flex-col w-full h-full p-2 overflow-y-scroll hover:shadow-2xl transition-all shadow-slate-900'>
				<TableRank />
			</div>
		</div>
	);
}
