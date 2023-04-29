import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllQuestions } from '../../../api/services/game/game.service';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/store/store';
import {
	setQuestions,
	cleanStateQuestions,
	initGame,
} from '../../../redux/features/game/game.slice';

import { setLoaderButton } from '../../../redux/features/loaderButton/loaderButton.slice';

import useErrorNetwork from '../../../hooks/useHandleErrorNetwork';
import useTokenExpiredError from '../../../hooks/useHandleTokenExpiredError';
import useLoaderButtonTrue from '../../../hooks/useLoaderButtonTrue';

import LoaderButton from '../../../components/loader/LoaderButton';

import { PrivateRoutes } from '../../../router';

export default function FormGameCategory() {
	const isLoaderButton = useSelector((state: AppState) => state.loaderButton);

	const [level, setLevel] = useState('BASIC');

	const { category } = useParams();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleErrorNetwork = useErrorNetwork();
	const handleTokenExpiredError = useTokenExpiredError();

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setLevel(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			if (category) {
				const { data } = await getAllQuestions(category, level);
				dispatch(cleanStateQuestions());
				dispatch(initGame());
				dispatch(setQuestions(data.questions));
				navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.GAME}`);
			}
		} catch (error: unknown) {
			handleErrorNetwork(error, navigate);
			handleTokenExpiredError(error, navigate);
		}

		dispatch(setLoaderButton(false));
	};

	return (
		<form onSubmit={handleSubmit} className='flex flex-col mx-0 my-auto gap-5'>
			<div className='flex flex-row gap-5 justify-center'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
					/>
				</svg>
				<select
					className='w-24 border-2 border-gray-500 text-lg font-sans'
					name='level'
					onChange={handleChange}
				>
					<option value='BASIC'>Facil</option>
					<option value='MEDIUM'>Medio</option>
					<option value='ADVANCED'>Dificil</option>
				</select>
			</div>

			<button
				type='submit'
				className='border-2 border-zinc-600 p-2 text-lg font-semibold font-sans hover:bg-green-300 hover:text-black transition-colors'
				onClick={useLoaderButtonTrue()}
			>
				{isLoaderButton ? <LoaderButton /> : 'Iniciar juego'}
			</button>
		</form>
	);
}
