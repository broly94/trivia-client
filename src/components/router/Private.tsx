import { Navigate, Route, Routes } from 'react-router-dom'

import NotFound from '../../pages/404'
import Dashboard from '../../pages/Dashboard'
import Game from '../../pages/Game'
import Home from '../../pages/Home'
import Rank from '../../pages/Rank'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

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
        <Route path="/rank" element={<Rank />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>

  )
}

export default Private