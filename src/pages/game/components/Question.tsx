import { useSelector } from "react-redux"
import { AppState } from "../../../redux/store/store"
import { useGameContext } from "../context/GameContext"

export default function Question() {

    const { questions } = useSelector((state: AppState) => state.game)
    const { index } = useGameContext()
    const { id, question } = questions[index]

    return (
        <section className='question p-5 w-full font-semibold mt-5 bg-gray-800'>
            <h2 key={id} className='font-sans text-center text-lg lg:text-xl text-white'>{question}</h2>
        </section>
    )
}