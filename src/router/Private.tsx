import { Navigate, Route, Routes } from 'react-router-dom'

import NotFound from '../pages/not-found/404'
import Dashboard from '../pages/dashboard/Dashboard'
import Game from '../pages/game/Game'
import Home from '../pages/home/Home'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'

import { PrivateRoutes } from './routes'

interface Props {
  children: JSX.Element | JSX.Element[]
}

function Private() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>

  )
}

export default Private