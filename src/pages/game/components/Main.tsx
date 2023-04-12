import { useState } from 'react'

/** Redux */
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../redux/store/store";
import { setPoints } from '../../../redux/features/game/game.slice';

/** Components */
import Aside from './Aside';
import Questions from './Questions';

/** Sweetalert */
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer } from 'react-toastify';
const MySwal = withReactContent(Swal)

export default function Main() {

    const { questions } = useSelector((state: AppState) => state.game)

    const [index, setIndex] = useState(0)

    const [nextQuestionFinish, setNextQuestionFinish] = useState<boolean | null>(null)

    const { id, question, category, level, points, answers } = questions[index]

    const dispatch = useDispatch()

    const nextQuestion = (isValid: boolean, isChecked: number | null, setIsCheked: React.Dispatch<React.SetStateAction<number | null>>) => {

        //Verifica que se envie una respuesta, si no hace un return vacio para que pueda seguir
        if (isChecked === null) {
            MySwal.fire({
                title: <strong>¡Atención!</strong>,
                html: <i>Debe seleccionar una opción para poder seguir</i>,
                icon: 'error',
                confirmButtonColor: '#eab308',
            })
            return
        }

        //Verifica si la respuesta es correcta, si es asi, asigna los puntos de la pregunta
        if (isValid) {
            dispatch(setPoints(Number(points)))
            setNextQuestionFinish(true)
        } else {
            setNextQuestionFinish(false)
        }

        //Verifica si respondieron todas las preguntas
        if (questions.length == index + 1) {
            console.log("se terminó")
        }

        // Saca el checked de la respuesta al dar al boton siguiente
        setIsCheked(null)


        setTimeout(() => {
            setIndex((prevIndex) =>
                prevIndex === questions.length - 1 ? 0 : prevIndex + 1
            )
            setNextQuestionFinish(null)
        }, 0)
    }


    return (
        <main className='grid grid-cols-1 lg:grid-cols-5 w-full p-0 mx-0 my-auto h-screen'>

            <article className='flex flex-col justify-center mx-5 lg:mx-auto lg:my-0 gap-5 text-center h-full lg:col-span-4'>

                <section>
                    <h3 className="font-mono font-semibold text-4xl text-center text-zinc-700">Trivia <span className="text-yellow-300">Game</span></h3>
                </section>

                <Questions
                    id={id}
                    question={question}
                    category={category}
                    level={level}
                    answers={answers}
                    index={index}
                    nextQuestion={nextQuestion}
                    nextQuestionFinish={nextQuestionFinish}
                />

            </article>

            <aside className='hidden lg:block lg:col-span-1 bg-yellow-300 h-screen border-l-2 border-zinc-400'>
                <Aside
                    category={category.name}
                    level={level}
                    points={points}
                />
            </aside>
            
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

        </main>
    )

}