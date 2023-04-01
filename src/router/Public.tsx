import { Suspense, lazy } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import RedirectLogin from "./RedirectLogin"

import Loader from "../components/loader/Loader.loader"

import { PrivateRoutes } from "./routes"
import LayoutPublic from "../components/layouts/LayoutPublic"

/** Pages */
const Login = lazy(() => import("../pages/login/Login"))
const NotFound = lazy(() => import("../pages/not-found/404"))
const Register = lazy(() => import("../pages/register/Register"))
const FormNewPassword = lazy(() => import("../pages/change-password-forgot/NewPassword"))
const SendEmail = lazy(() => import("../pages/forgot-password/SendEmail"))


export default function Public() {
    return (
        <Suspense fallback={<Loader />}>
            <LayoutPublic>
                <Routes>
                    <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/send-email" element={<SendEmail />} />
                    <Route path={`/new-password/:token`} element={<FormNewPassword />} />
                    <Route path="*" element={<NotFound />} />
                    {/** if a user exists it doesn't let him go back to the login, if it doesn't it redirects him to the login */}
                    <Route element={<RedirectLogin />}>
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Routes>
            </LayoutPublic>
        </Suspense>
    )
}