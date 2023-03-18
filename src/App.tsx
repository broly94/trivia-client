import { Navigate, Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"


import { AuthGuard, Private, PrivateRoutes } from "./components/router"

import Layout from "./components/Layout"

import NotFound from "./pages/404"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {

  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>

        <Layout>

          <Routes>

            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            <Route element={<AuthGuard />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>

          </Routes>

        </Layout>

      </BrowserRouter>
    </div>
  )
}

export default App
