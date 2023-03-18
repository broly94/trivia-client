import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import { AppState } from '../../redux/store/store'
import { PublicRoutes } from './routes';

function AuthGuard() {
    const userLogin = useSelector((state: AppState) => state.userLogin)
    return !userLogin.token ? <Navigate replace to={PublicRoutes.LOGIN} /> : <Outlet />
}

export default AuthGuard