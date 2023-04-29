import { useNavigate } from 'react-router-dom';
import { getUserLogin } from '../../../utils/get-localstorage.util';
import { useHomeContext } from '../../home/context/HomeContext';
import useTokenExpiredError from '../../../hooks/useHandleTokenExpiredError';
import { useEffect, useState } from 'react';
import { getAllRank } from '../../../api/services/home/home.service';
import { AxiosResponse } from 'axios';
import { IRank } from '../models/interfaces';

export default function TableRank() {
	const [rank, setRank] = useState<IRank[]>([]);

	const navigate = useNavigate();

	const handleTokenExpiredError = useTokenExpiredError();

	const { id } = getUserLogin();

	useEffect(() => {
		const getRank = async () => {
			try {
				const { data } = (await getAllRank()) as AxiosResponse<any, any>;
				console.log(data.users);
				setRank(data.users);
			} catch (error: unknown) {
				handleTokenExpiredError(error, navigate);
			}
		};
		getRank();
	}, []);

	return (
		<table className='w-full h-full text-sm text-left border-2 border-gray-800'>
			<thead className='text-base text-gray-200 uppercase bg-gray-500 border-b-2 border-zinc-400'>
				<tr className='text-center mb-3'>
					<th scope='col' className='font-extrabold p-5'>
						Posicion
					</th>
					<th scope='col' className='font-extrabold p-5'>
						Usuario
					</th>
					<th scope='col' className='font-extrabold p-5'>
						Puntos
					</th>
				</tr>
			</thead>

			<tbody>
				{rank.map((r, index) => (
					<tr
						className={`hover:cursor-pointer border-2 border-gray-800 ${
							r.id == id ? 'bg-green-200' : 'bg-slate-100'
						}`}
						key={r.id}
					>
						<th scope='row' className='text-gray-900 font-bold text-center py-5'>
							<span className='text-gray-700'>#{index + 1}</span>
						</th>
						<td className='text-center font-bold text-base text-gray-900'>
							<span className='text-gray-700'>{r.name}</span>
						</td>
						<td className='text-center font-bold text-base text-gray-900'>
							<span className='text-gray-800'>{r.points}</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
