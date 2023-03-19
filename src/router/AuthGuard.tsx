import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from './routes';

function AuthGuard() {
    const userLocalStorage = localStorage.getItem('user')
    return JSON.parse(userLocalStorage!) ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
}

export default AuthGuard