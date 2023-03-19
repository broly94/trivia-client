import { Navigate, Outlet } from "react-router-dom"
import { PrivateRoutes } from "./routes"

function RedirectLogin() {
  const userLocalStorage = localStorage.getItem('user')
  return !JSON.parse(userLocalStorage!) ? <Outlet /> : <Navigate to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`} /> 
}

export default RedirectLogin