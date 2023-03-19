import { Navigate, Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"

/** Router */
import { AuthGuard, Private, PrivateRoutes } from "./router"

/** Layouts */
import Layout from "./components/layouts/Layout"

/** Pages */
import NotFound from "./pages/not-found/404"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

/** Toasttify */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RedirectLogin from "./router/RedirectLogin"

function App() {

  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>

        <Layout>

          <Routes>


            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/register" element={<Register />} />

            <Route element={<RedirectLogin />}>
              <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<AuthGuard />}>
              <Route path={`/${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>

          </Routes>

        </Layout>

      </BrowserRouter>

      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </div>
  )
}

export default App
