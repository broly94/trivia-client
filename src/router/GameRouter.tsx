import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { AppState } from "../redux/store/store"

import { PrivateRoutes } from "./routes"



export default function GameRouter() {
    
    const { start_game } = useSelector((state: AppState) => state.game)

    return start_game ? <Outlet /> : <Navigate to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`} />

}

