import { useDispatch } from "react-redux"

//Function Slices
import { setLoaderButton } from "../redux/features/loaderButton/loaderButton.slice"
import { setUser } from "../redux/features/user/user.slice"
import { UserEmptyState } from "../models/user/user.types"
import { setCategory } from "../redux/features/category/category.slice"
import { cleanStateQuestions, finishGame } from "../redux/features/game/game.slice"


export default function HandleLogout() {

    const dispatch = useDispatch()

    const handleLogout = () => {
        window.localStorage.clear()
        dispatch(setLoaderButton(false))
        dispatch(setUser(UserEmptyState))
        dispatch(setCategory([]))
        dispatch(finishGame())
        dispatch(cleanStateQuestions())
    }

    return handleLogout
}