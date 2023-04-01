import { NavLink } from 'react-router-dom'

function Navbar() {

    const userTokenLogin = localStorage.getItem('user')

    const HandleSingUp = () => {
        localStorage.removeItem('user')
    }

    return (
        <nav className='flex justify-end flex-wrap w-full lg:w-3/5 mx-auto my-0 mt-2 sticky top-0 mb-10 border-y-2 border-zinc-600' id="navigation">

            {
                userTokenLogin ?
                    <>
                        <ul className='flex justify-center py-7 text-zinc-700'>

                            <li className='px-1 m-0'>
                                <NavLink to="/" className="text-lg hover:transition-colors py-5 px-1 font-semibold font-sans hover:border-b-4 hover:border-yellow-300">Inicio</NavLink>
                            </li >

                        </ul>

                        <ul className='flex justify-end py-7 mr-8 text-zinc-700'>

                            <li className='px-1'>
                                <NavLink to="/account" className="text-lg hover:transition-colors py-5 px-1 font-semibold font-sans hover:border-b-4 hover:border-yellow-300">Configuracion</NavLink>
                            </li>

                            <li className='px-1'>
                                <NavLink to="/login" className="text-lg hover:transition-colors py-5 px-1 font-semibold font-sans hover:border-b-4 hover:border-red-300" onClick={HandleSingUp}>Salir</NavLink>
                            </li>

                        </ul>
                    </>
                    :
                    <>
                        <ul className='flex justify-center py-7 text-zinc-50'>

                            <li className='px-1 '>
                                <NavLink to="/" className="text-lg hover:transition-colors p-3 rounded-md hover:bg-yellow-500 hover:text-zinc-800 font-semibold font-mono">Inicio</NavLink>
                            </li >

                            <li className='px-1'>
                                <NavLink to="/rank" className="text-lg hover:transition-colors p-3 rounded-md hover:bg-yellow-500 hover:text-zinc-800 font-semibold font-mono">Ranking</NavLink>
                            </li>

                        </ul>

                        <ul className='flex justify-end py-7 mr-8 text-zinc-50'>

                            <li className='px-1'>
                                <NavLink to="/register" className="text-lg hover:transition-colors p-3 rounded-md hover:bg-yellow-500 hover:text-zinc-800 font-semibold font-mono">Registrate</NavLink>
                            </li>

                            <li className='px-1'>
                                <NavLink to="/login" className="text-lg hover:transition-colors p-3 rounded-md hover:bg-yellow-500 hover:text-zinc-800 font-semibold font-mono">Iniciar Sesión</NavLink>
                            </li>

                        </ul>
                    </>

            }



        </nav>
    )
}

export default Navbar