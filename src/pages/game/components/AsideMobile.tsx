import { useSelector } from "react-redux"
import { AppState } from "../../../redux/store/store"
import { useGameContext } from "../context/GameContext"

export default function AsideMobile() {

    const { questions, correct_answer } = useSelector((state: AppState) => state.game)

    const { index } = useGameContext()

    const { category, level, points} = questions[index]

    return (
        <section className='aside-mobile flex flex-wrap flex-col lg:hidden mt-5 gap-2 bg-gray-600 py-3'>
            <h2 className='capitalize font-sans text-md text-zinc-100'><strong>Categoria: </strong>{category.name}</h2>
            <p className='capitalize font-sans text-md text-zinc-100'><strong>Nivel: </strong>{level}</p>
            <p className='capitalize font-sans text-md text-zinc-100'><strong>Puntos por preguntas: </strong>{points}</p>
            <p className='capitalize font-sans text-md text-zinc-100'><strong>Respuestas acertadas: </strong><span className='text-green-400'>{correct_answer} </span>/ {questions.length}</p>
        </section>
    )
}