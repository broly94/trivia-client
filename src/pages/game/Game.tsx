import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
import { AppState } from "../../redux/store/store";
import { useEffect } from "react";

const MySwal = withReactContent(Swal)

const Game: React.FC = () => {


  const navigate = useNavigate()

  const questions = useSelector((state: AppState) => state.question.questions)

  const handleBack = () => {
    navigate('/private/home')
  }


  useEffect(() => {

    const handleReturn = (e: Event) => {
      console.log("evento funcionando")
      e.preventDefault()
      MySwal.fire({
        title: '¿Estás seguro que deseas salir?',
        text: "Se perderá todo el progreso!!!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, volver al inicio'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/private/home')
        } else {
          navigate(`/private/game`)
        }
      });

    }

    window.addEventListener('popstate', handleReturn)
    console.log("se monto el componente")
    return () => {
      console.log("se desmonto el componente")
      window.removeEventListener('popstate', handleReturn)
    }
  }, [])



  return (
    <div className="flex justify-center w-full m-2">
      {
        questions.length > 0 ?
          <div className="flex flex-col justify-center w-3/4 mx-0 my-auto bg-zinc-400 py-10 h-full">
            <h2 className="text-center">asd</h2>
            <h3 className="text-center">asdasdasd</h3>
          </div>
          :
          <div className="flex flex-col gap-3 justify-center w-auto mx-0 my-auto p-5 border-2 rounded-md border-zinc-700">
            <h2 className="text-center text-red-500 font-bold text-lg">Error !!!</h2>
            <p className="text-center font-sans">No puede volver a cargar las preguntas</p>
            <p className="text-center font-bold text-sm">Regrese para volver a jugar...</p>
            <button onClick={handleBack} className="border-2 border-zinc-600 py-1 px-3 text-lg font-semibold font-sans hover:bg-red-300 hover:text-black transition-colors">Regresar</button>
          </div>
      }
    </div>
  )

}

export default Game