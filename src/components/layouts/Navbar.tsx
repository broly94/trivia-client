import { NavLink } from 'react-router-dom'

function Navbar() {

    const HandleSingUp = () => {
        localStorage.removeItem('user')
    }

    return (
        <nav className='flex justify-center flex-wrap w-full mx-0 my-auto fixed top-0 lg:top-10 bg-yellow-100 z-50'>

            <ul className='flex justify-center py-7 text-zinc-700 font-bold'>

                <li className='px-1 m-0'>
                    <NavLink to="/" className="text-lg hover:transition-colors py-5 px-1 font-semibold font-sans hover:border-b-4 hover:border-yellow-300">Inicio</NavLink>
                </li >

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