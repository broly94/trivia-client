import { AxiosError, AxiosResponse } from "axios"
import { NavigateFunction } from "react-router-dom"
import { PublicRoutes } from "../router"

export default function TokenExpiredError() {

    const tokenExiredError = (error: unknown, navigate: NavigateFunction) => {

        if (error instanceof AxiosError) {

            const { response } = error;

            if (response) {
                if (response.request.response.includes("TokenExpiredError")) {
                    window.localStorage.clear();
                    navigate(`/${PublicRoutes.LOGIN}`);
                    return;
                }
            }

        }
    }

    return tokenExiredError
}