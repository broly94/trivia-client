import TableRank from './components/TableRank';
import { PrivateRoutes } from '../../router';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
{
	/* <Navbar /> */
}
export default function Rankig() {
	return (
		<div className='flex flex-col w-full h-screen justify-center items-center'>
			<Navbar />

			<div className='flex flex-col items-center w-full md:w-3/4 p-3 my-3 hover:shadow-2xl overflow-x-scroll transition-all shadow-slate-900'>
				<div className='back-button flex flex-row m-5'>
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
				<TableRank />
			</div>
		</div>
	);
}
