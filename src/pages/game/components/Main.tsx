import { useState } from 'react'
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store/store";
import Aside from './Aside';
import Questions from './Questions';


export default function Main() {

    const [index, setIndex] = useState(0)

    const questions = useSelector((state: AppState) => state.game.questions)

    const nextQuestion = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setIndex((prevIndex) =>
            prevIndex === questions.length - 1 ? 0 : prevIndex + 1
        )
    }

    const { id, question, category, level, points, answers } = questions[index]

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
                />

            </article>

            <aside className='hidden lg:block lg:col-span-1 bg-yellow-300 h-screen '>
                <Aside
                    category={category.name}
                    level={level}
                    points={points}
                />
            </aside>


        </main>
    )

}