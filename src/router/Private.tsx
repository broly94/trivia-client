import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Loader from '../components/loader/Loader.loader'
import LayoutPrivate from '../components/layouts/LayoutPrivate'
import { PrivateRoutes } from './routes'
import GameRouter from './GameRouter'

const NotFound = lazy(() => import("../pages/not-found/404"))
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'))
const Game = lazy(() => import('../pages/game/Game'))
const SelectCategory = lazy(() => import('../pages/game/SelectCategory'))
const GameStatus = lazy(() => import('../pages/game/layouts/GameStatus'))
const Home = lazy(() => import('../pages/home/Home'))

function Private() {
  return (
    <Suspense fallback={<Loader />}>
      <LayoutPrivate>
        <Routes>
          <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
          <Route path={`/${PrivateRoutes.HOME}`} element={<Home />} />
          <Route path={`/${PrivateRoutes.DASHBOARD}`} element={<Dashboard />} />
          <Route path={`/${PrivateRoutes.GAME}/${PrivateRoutes.CATEGORY}/:category`} element={<SelectCategory />} />

          {/** Si el usuario no le da a iniciar juego, lo redirecciona al Home */}
          <Route element={<GameRouter />}>
            <Route path={`/${PrivateRoutes.GAME}`} element={<Game />} />
            <Route path={`/${PrivateRoutes.GAME}/${PrivateRoutes.STATUS}`} element={<GameStatus />} />
          </Route>


          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutPrivate>
    </Suspense>

  )
}

export default Private