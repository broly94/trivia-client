import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../../router';
import { finishGame, cleanStateQuestions } from '../../../redux/features/game/game.slice';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { useGameContext } from '../context/GameContext';
import { AppState } from '../../../redux/store/store';
const MySwal = withReactContent(Swal)

export default function Aside() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const { index, setIndex, answerChecked, setAnswerChecked, isValid, setIsValid } = useGameContext()

    const { questions, correct_answer } = useSelector((state: AppState) => state.game)

    const { category, level, points } = questions[0]

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
                <span className='font-extrabold text-zinc-200'>Categoria</span><br />
                {category.name}
            </h5>
            <h5 className='text-center text-lg uppercase font-norma'>
                <span className='font-extrabold text-zinc-200'>Nivel</span><br />
                {level}
            </h5>
            <h5 className='text-center text-lg uppercase font-norma'>
                <span className='font-extrabold text-zinc-200'>Puntos por preguntas</span><br />
                {points}
            </h5>
            <h5 className='text-center text-lg uppercase font-norma'>
                <span className='font-extrabold text-zinc-200'>Respuestas acertadas</span><br />
                <span className='text-green-600 font-semibold'>{correct_answer} </span>/ {questions.length}
            </h5>
            <button onClick={exitGame} className=' my-5 mx-3 p-2 text-lg font-semibold font-sans bg-red-400 text-gray-800 transition-colors'>Salir</button>
        </div>
    )
}