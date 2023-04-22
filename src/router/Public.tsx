import { Suspense, lazy } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import RedirectLogin from "./RedirectLogin"

import Loader from "../components/loader/Loader.loader"

import { PrivateRoutes, PublicRoutes } from "./routes"
import LayoutPublic from "../components/layouts/LayoutPublic"
import ErrorNetwork from "../pages/not-found/ErrorNetwork"

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
                    <Route path="/" element={<Navigate to={`${PrivateRoutes.PRIVATE}`} />} />
                    <Route path={`${PublicRoutes.REGISTER}`} element={<Register />} />
                    <Route path={`/${PublicRoutes.SEND_EMAIL}`} element={<SendEmail />} />
                    <Route path={`/${PublicRoutes.NEW_PASSWORD}/:token`} element={<FormNewPassword />} />
                    <Route path={`/${PublicRoutes.ERROR_NETWORK}`} element={<ErrorNetwork />} />
                    <Route path="*" element={<NotFound />} />
                    {/** if a user exists it doesn't let him go back to the login, if it doesn't it redirects him to the login */}
                    <Route element={<RedirectLogin />}>
                        <Route path={`${PublicRoutes.LOGIN}`} element={<Login />} />
                    </Route>
                </Routes>
            </LayoutPublic>
        </Suspense>
    )
}