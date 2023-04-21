import { NavLink } from 'react-router-dom'
import { decriptedRole } from '../../pages/login/utils/encripted'

function Navbar() {

    const HandleSingUp = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('role')
        localStorage.removeItem('token')
    }

    const role = localStorage.getItem('role')
    const roleParse = JSON.parse(role!)
    const roleUser = decriptedRole(roleParse)

    return (
        <nav className='flex justify-center flex-wrap w-full mx-0 my-auto fixed top-0 lg:top-10 bg-gray-800 z-50'>

            <div className='flex justify-center ml-10'>
                <NavLink to="/" className="font-mono font-semibold text-3xl text-center text-zinc-50 self-center mr-3">
                    Trivia
                    <span className="text-yellow-300"> Game</span>
                </NavLink>
            </div>
            <ul className='flex justify-center py-7 px-10 text-zinc-50 font-bold'>

                {
                    roleUser === 'admin' ? <li className='px-1'><NavLink to="/account" className="text-lg hover:transition-colors py-5 px-1 font-semibold font-sans hover:border-b-4 hover:border-green-300">Admin</NavLink></li> : null
                }

                <li className='px-1'>
                    <NavLink to="/account" className="text-lg hover:transition-colors py-5 px-1 font-semibold font-sans hover:border-b-4 hover:border-yellow-300">Configuracion</NavLink>
                </li>

                <li className='px-1'>
                    <NavLink to="/login" className="text-lg hover:transition-colors py-5 px-1 font-semibold font-sans hover:border-b-4 hover:border-red-300" onClick={HandleSingUp}>Salir</NavLink>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar