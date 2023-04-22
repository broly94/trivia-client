import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../redux/store/store"
import { setLoaderButton } from "../redux/features/loaderButton/loaderButton.slice"
import { useEffect } from "react"

interface Props {
    message: string,
}
export const ErrorMessages = ({message}: Props) => {

    const dispatch = useDispatch()

    const isLoaderButton = useSelector((state: AppState) => state.loaderButton)

    useEffect(() => {
        if(isLoaderButton) {
            dispatch(setLoaderButton(false))
        }
    }, [isLoaderButton])

    return (
        <div className="bg-red-500 text-white font-mono font-medium pl-2">{message}</div>
    )
}