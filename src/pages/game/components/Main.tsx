/** Components */
import Aside from './Aside';
import Questions from './Questions';

import GameProvider from '../context/GameContext';

export default function Main() {

    return (
        <GameProvider>
            <main className='grid grid-cols-1 lg:grid-cols-5 w-full p-0 mx-0 my-auto h-screen'>

                <article className='flex flex-col justify-center mx-5 lg:mx-auto lg:my-0 gap-5 text-center h-full lg:col-span-4'>

                    <section>
                        <h3 className="font-mono font-semibold text-4xl text-center text-zinc-700">Trivia <span className="text-yellow-300">Game</span></h3>
                    </section>

                    <Questions />

                </article>

                <aside className='hidden lg:block lg:col-span-1 bg-yellow-300 h-screen border-l-2 border-zinc-400'>
                    <Aside />
                </aside>

            </main>
        </GameProvider>
    )

}