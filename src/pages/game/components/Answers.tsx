import { useSelector } from "react-redux"

import { AppState } from "../../../redux/store/store"

import { useGameContext } from "../context/GameContext"

import useNextQuestion from "../hooks/useNextQuestion";

export default function Answers() {
    
    const { questions } = useSelector((state: AppState) => state.game)
    
    const { index, answerChecked, setAnswerChecked, setIsValid, isNextAvailable  } = useGameContext()

    const { answers } = questions[index]

    const onChecked = (index: number, isTrue: boolean) => {
        //Setea la respuesta cuando hace click si es verdadera o falsa
        setIsValid(isTrue)
        //Setea la respuesta checkeada
        setAnswerChecked(index)
    }

    const nextQuestion = useNextQuestion()

    return (
        <section className='answers flex flex-col gap-3 py-3 w-full'>

            <ul className='flex flex-col gap-3 mx-0 my-auto justify-center'>
                {
                    answers.map((a, index) => (
                        <li
                            onClick={() => onChecked(index, a.is_true)}
                            key={a.id}
                            id={`answer-${index}`}
                            className={`w-full p-5 border-2 border-gray-800 cursor-pointer text- font-medium ${answerChecked === index ? 'hover:bg-green-300' : 'hover:bg-yellow-300'} ${answerChecked === index ? 'bg-green-300' : 'bg-zinc-50'}`}
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
                className={`mt-5 border-2 border-gray-800 py-3 text-lg font-semibold font-sans bg-gray-300 hover:bg-gray-800 hover:text-white text-black transition-colors ${!isNextAvailable ? 'opacity-50' : ''}`}>
                Siguiente
            </button>

        </section>
    )
}