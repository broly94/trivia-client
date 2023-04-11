import { useState } from 'react'
import { IAnser, ICategory } from "../models/interfaces"

export interface Props {
    id: string
    question: string
    category: ICategory
    level: string
    answers: Array<IAnser>,
    index: number
    nextQuestion: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function Questions({ id, question, category, answers, level, nextQuestion }: Props) {

    const [isChecked, setIsCheked] = useState<number | null>(null)

    const [isValid, setIsValid] = useState<boolean>(false)

    const onChecked = (index: number, isTrue: boolean) => {
        setIsValid(isTrue)
        setIsCheked(index)
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
                                className={`w-full p-5 border-2 rounded-md border-zinc-700 hover:bg-yellow-300 cursor-pointer text- font-medium ${isChecked === index ? 'bg-yellow-300' : 'bg-zinc-50'}`}
                            >
                                {a.name}
                            </li>

                        ))
                    }
                </ul>

                <button onClick={nextQuestion} className=' mt-5 border-2 border-zinc-600 p-2 text-lg font-semibold font-sans bg-green-300 hover:text-black transition-colors'>Siguiente</button>
            
            </section>
        </>
    )
}