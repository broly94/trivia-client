import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { AppState } from '../../redux/store/store'


function Navbar() {

    const userTokenLogin = useSelector((state: AppState) => state.userLogin.token)

    return (
        <nav className='bg-zinc-900 grid grid-cols-2 p-2 border-b-1 border-yellow-500 shadow-lg w-full sticky top-0' id="navigation">

            {
                userTokenLogin ?
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
                                <NavLink to="/account" className="text-lg hover:transition-colors p-3 rounded-md hover:bg-yellow-500 hover:text-zinc-800 font-semibold font-mono">Configuracion</NavLink>
                            </li>

                            <li className='px-1'>
                                <NavLink to="/logout" className="hover:transition-colors p-3 rounded-md hover:bg-yellow-500 hover:text-zinc-800 font-semibold font-mono">Salir</NavLink>
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