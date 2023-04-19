import { useNavigate } from 'react-router-dom';

import { useGameContext } from '../context/GameContext'

import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../redux/store/store'
import { setPoints, setCorrectAnswer } from '../../../redux/features/game/game.slice';
import GameCompleted from '../utils/game-completed';

/** Sweetalert */
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { useState } from 'react';
const MySwal = withReactContent(Swal)

export default function Questions() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isNextAvailable, setIsNextAvailable] = useState<boolean>(true)

    const { questions, collected_points, correct_answer } = useSelector((state: AppState) => state.game)

    const { index, setIndex, answerChecked, setAnswerChecked, isValid, setIsValid } = useGameContext()

    const { id, question, category, level, points, answers } = questions[index]

    //Obtener los elementos con sus id correspondiente
    const answerElement = document.getElementById(`answer-${answerChecked}`) as HTMLElement

    //FUNCTIONS
    const onChecked = (index: number, isTrue: boolean) => {
        //Setea la respuesta cuando hace click si es verdadera o falsa
        setIsValid(isTrue)
        //Setea la respuesta checkeada
        setAnswerChecked(index)
    }

    const nextQuestion = async () => {

        setIsNextAvailable(false)

        let lastPoints: number = 0

        //Verifica que se seleccione una respuesta antes de dar Siguiente, si no lo hace enviará una alerta de error
        if (answerChecked === null) {
            MySwal.fire({
                title: <strong>¡Atención!</strong>,
                html: <i>Debe seleccionar una opción para poder seguir</i>,
                icon: 'error',
                confirmButtonColor: '#eab308',
            })
            //Al enviar la alerta le decimos que el boton "Siguiente" no este deshabilitado y que la opacidad este full
            setIsNextAvailable(true)
            return
        }

        //Verifica si la respuesta es correcta, si es asi, asigna los puntos de la pregunta y pinta de colores las respuesta
        if (isValid) {
            dispatch(setPoints(Number(points)))
            dispatch(setCorrectAnswer(1))
            lastPoints = Number(points)
            answerElement.style.backgroundColor = '#86efac';
        } else {
            lastPoints = 0
            answerElement.style.backgroundColor = '#fca5a5';
            // Encuentra y pinta de verde la respuesta correcta
            const correctAnswerIndex = answers.findIndex((answer) => answer.is_true)
            const correctAnswerElement = document.getElementById(`answer-${correctAnswerIndex}`) as HTMLElement;
            correctAnswerElement.style.backgroundColor = '#86efac'
        }


        //Saca el checked de la respuesta al dar al boton siguiente
        setAnswerChecked(null)

        //Funcion donde se limpia el estado de las respuestas y si guarda en la base de datos los puntos del usuario
        GameCompleted({ questions, index, collected_points, lastPoints, dispatch, navigate })

        setTimeout(() => {
            setIndex((prevIndex: number) => (prevIndex === questions.length - 1 ? 0 : prevIndex + 1));
            setIsNextAvailable(true)
        }, 2500)

    }

    return (
        <>
            <section className='info flex flex-wrap flex-col lg:hidden mt-5 gap-2 bg-gray-600 py-3'>
                <h2 className='capitalize font-sans text-md text-zinc-100'><strong>Categoria: </strong>{category.name}</h2>
                <p className='capitalize font-sans text-md text-zinc-100'><strong>Nivel: </strong>{level}</p>
                <p className='capitalize font-sans text-md text-zinc-100'><strong>Puntos por preguntas: </strong>{points}</p>
                <p className='capitalize font-sans text-md text-zinc-100'><strong>Respuestas acertadas: </strong><span className='text-green-400'>{correct_answer} </span>/ {questions.length}</p>
            </section>

            <section className='question p-5 w-full font-semibold mt-5 bg-gray-800'>
                <h2 key={id} className='font-sans text-center text-lg lg:text-xl text-white'>{question}</h2>
            </section>

            <section className='answers flex flex-col gap-3 py-3 w-full'>

                <ul className='flex flex-col gap-3 mx-0 my-auto justify-center'>
                    {
                        answers.map((a, index) => (
                            <li
                                onClick={() => onChecked(index, a.is_true)}
                                key={a.id}
                                id={`answer-${index}`}
                                className={`w-full p-5 border-2 border-zinc-700 hover:bg-yellow-200 cursor-pointer text- font-medium ${answerChecked === index ? 'bg-green-200' : 'bg-zinc-50'}`}
                            >
                                {a.name}
                            </li>

                        ))
                    }
                </ul>

                <button
                    onClick={nextQuestion}
                    disabled={!isNextAvailable}
                    id="buttonNext"
                    className={`mt-5 border-2 border-zinc-600 p-2 text-lg font-semibold font-sans bg-green-300 hover:text-black transition-colors ${!isNextAvailable ? 'opacity-50' : ''}`}>
                    Siguiente
                </button>

            </section>
        </>
    )
}