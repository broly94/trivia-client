import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../../router';
import { finishGame, cleanStateQuestions } from '../../../redux/features/game/game.slice';
import { useDispatch } from 'react-redux';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


export interface Props {
    category: string,
    level: string,
    points: string
}

export default function Aside({ category, level, points }: Props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const exitGame = () => {
        MySwal.fire({
            title: <strong>¿Deseas salir?</strong>,
            html: <i>Se perderán todos los cambios</i>,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#EAB308',
            cancelButtonColor: '#fca5a5',
            confirmButtonText: 'Si salir!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(finishGame())
                dispatch(cleanStateQuestions())
                navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`)
            }
        })
    }

    return (
        <div className="content mx-0 my-auto flex flex-col justify-center h-full content-center gap-5">
            <h5 className='text-center text-lg uppercase font-normal'>
                <span className='font-extrabold text-zinc-600'>Categoria</span><br />
                {category}
            </h5>
            <h5 className='text-center text-lg uppercase font-norma'>
                <span className='font-extrabold text-zinc-600'>Nivel</span><br />
                {level}
            </h5>
            <h5 className='text-center text-lg uppercase font-norma'>
                <span className='font-extrabold text-zinc-600'>Puntos por preguntas</span><br />
                {points}
            </h5>
            <button onClick={exitGame} className=' my-5  mx-3 border-2 border-zinc-600 p-2 text-lg font-semibold font-sans bg-red-300 hover:text-black transition-colors'>Salir</button>
        </div>
    )
}