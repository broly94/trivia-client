import { useGameContext } from '../context/GameContext'

/** Sweetalert */
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { useDispatch, useSelector } from 'react-redux'
import { setPoints } from '../../../redux/features/game/game.slice'
import { AppState } from '../../../redux/store/store'
import { useState } from 'react';
const MySwal = withReactContent(Swal)


export default function Questions() {

    const dispatch = useDispatch()

    const { questions } = useSelector((state: AppState) => state.game)

    const { index, setIndex, answerChecked, setAnswerChecked, isValid, setIsValid } = useGameContext()

    const { id, question, category, level, points, answers } = questions[index]

    //ELEMENTS HTML
    const buttonNext = document.getElementById('buttonNext') as HTMLButtonElement

    //Obtener los elementos con sus id correspondiente
    const answerElement = document.getElementById(`answer-${answerChecked}`) as HTMLElement

    //FUNCTIONS
    const onChecked = (index: number, isTrue: boolean) => {
        //Setea la respuesta cuando hace click si es verdadera o falsa
        setIsValid(isTrue)
        //Setea la respuesta checkeada
        setAnswerChecked(index)
    }

    const nextQuestion = () => {

        buttonNext!.disabled = true
        buttonNext!.style.opacity = '0.5'

        //Verifica que se envie una respuesta, si no hace un return vacio para que pueda seguir
        if (answerChecked === null) {
            MySwal.fire({
                title: <strong>¡Atención!</strong>,
                html: <i>Debe seleccionar una opción para poder seguir</i>,
                icon: 'error',
                confirmButtonColor: '#eab308',
            })
            buttonNext!.disabled = false
            buttonNext!.style.opacity = '1'
            return
        }

        //Verifica si la respuesta es correcta, si es asi, asigna los puntos de la pregunta
        if (isValid) {
            dispatch(setPoints(Number(points)))
            answerElement.style.backgroundColor = '#86efac';
        } else {
            answerElement.style.backgroundColor = '#fca5a5';
            // Encuentra y pinta de verde la respuesta correcta
            const correctAnswerIndex = answers.findIndex((answer) => answer.is_true);
            const correctAnswerElement = document.getElementById(`answer-${correctAnswerIndex}`) as HTMLElement;
            correctAnswerElement.style.backgroundColor = '#86efac';
        }

        //Verifica si respondieron todas las preguntas
        if (questions.length == index + 1) {
            console.log("se terminó")
        }

        //Saca el checked de la respuesta al dar al boton siguiente
        setAnswerChecked(null)

        setTimeout(() => {
            setIndex((prevIndex: number) => (prevIndex === questions.length - 1 ? 0 : prevIndex + 1));
            buttonNext!.disabled = false
            buttonNext!.style.opacity = '1'
        }, 2500);
    }

    return (
        <>
            <section className='info block lg:hidden mt-10'>
                <h2 className='capitalize'><strong>Categoria: </strong>{category.name}</h2>
                <p className='capitalize'><strong>Nivel: </strong>{level}</p>
            </section>

            <section className='question p-5 w-full border-2 rounded-md border-zinc-700 font-semibold text-lg mt-10'>
                <div key={id}>{question}</div>
            </section>

            <section className='answers flex flex-col gap-3 py-3 w-3/4 mx-auto my-0'>

                <ul className='flex flex-col gap-3'>
                    {
                        answers.map((a, index) => (
                            <li
                                onClick={() => onChecked(index, a.is_true)}
                                key={a.id}
                                id={`answer-${index}`}
                                className={`w-full p-5 border-2 rounded-md border-zinc-700 hover:bg-yellow-300 cursor-pointer text- font-medium ${answerChecked === index ? 'bg-yellow-200' : 'bg-zinc-50'}`}
                            >
                                {a.name}
                            </li>

                        ))
                    }
                </ul>

                <button onClick={nextQuestion} id="buttonNext" className=' mt-5 border-2 border-zinc-600 p-2 text-lg font-semibold font-sans bg-green-300 hover:text-black transition-colors'>Siguiente</button>

            </section>
        </>
    )
}