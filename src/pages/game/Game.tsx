import { useDispatch } from "react-redux";
import { finishGame, cleanStateQuestions } from "../../redux/features/game/game.slice"
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../router";
import Main from "./layouts/Main";


export default function Game() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleBackButton() {

    dispatch(finishGame())
    dispatch(cleanStateQuestions())
    navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`)

  }

  window.addEventListener('popstate', handleBackButton);

  return (
    
    <div className="flex justify-center w-full">
      
      <Main />
    
    </div>
  )

}