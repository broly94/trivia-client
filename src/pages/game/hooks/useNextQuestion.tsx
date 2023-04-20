import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

import { setPointsUser } from "../../../api/services/game/game.service";

import { useGameContext } from "../context/GameContext"
import { AppState } from "../../../redux/store/store"
import { setCorrectAnswer, setPoints } from "../../../redux/features/game/game.slice";

import { PrivateRoutes } from "../../../router";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

import successQuestion from '../../../assets/success-question.mp3'
import errorQuestion from '../../../assets/error-question.mp3'

export default function NextQuestion() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { questions, collected_points } = useSelector((state: AppState) => state.game)

    const { index, setIndex, answerChecked, setAnswerChecked, isValid, setIsNextAvailable } = useGameContext()

    const { points, answers } = questions[index]

    //Obtener los elementos con sus id correspondiente
    const answerElement = document.getElementById(`answer-${answerChecked}`) as HTMLElement

    const playSound = (sound: string) => {
        const mySound = new Audio(sound)
        mySound.play()
    }

    return async () => {

        setIsNextAvailable(false)

        let lastPoints: number = 0

        //Verifica que se seleccione una respuesta antes de dar Siguiente, si no lo hace enviará una alerta de error
        if (answerChecked === null) {
            MySwal.fire({
                title: <strong>¡Atención!</strong>,
                html: <i>Debe seleccionar una opción para poder seguir</i>,
                icon: 'error',
                confirmButtonColor: '#eab308',
            })
            //Al enviar la alerta le decimos que el boton "Siguiente" no este deshabilitado y que la opacidad este full
            setIsNextAvailable(true)
            return
        }

        //Verifica si la respuesta es correcta, si es asi, asigna los puntos de la pregunta y pinta de colores las respuesta
        if (isValid) {
            dispatch(setPoints(Number(points)))
            dispatch(setCorrectAnswer(1))
            lastPoints = Number(points)
            answerElement.style.backgroundColor = '#86efac';
            playSound(successQuestion)
        } else {
            lastPoints = 0
            answerElement.style.backgroundColor = '#fca5a5';
            // Encuentra y pinta de verde la respuesta correcta
            const correctAnswerIndex = answers.findIndex((answer) => answer.is_true)
            const correctAnswerElement = document.getElementById(`answer-${correctAnswerIndex}`) as HTMLElement;
            correctAnswerElement.style.backgroundColor = '#86efac'
            playSound(errorQuestion)
        }

        //Saca el checked de la respuesta al dar al boton siguiente
        setAnswerChecked(null)

        //Funcion donde se limpia el estado de las respuestas y si guarda en la base de datos los puntos del usuario
        const updatedPoints = collected_points + lastPoints

        if (questions.length == index + 1) {
            await setPointsUser(updatedPoints)
            setTimeout(() => {
                navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.GAME}/${PrivateRoutes.STATUS}`)
            }, 2500)
        }

        setTimeout(() => {
            setIndex((prevIndex: number) => (prevIndex === questions.length - 1 ? 0 : prevIndex + 1));
            setIsNextAvailable(true)
        }, 2500)
    }
}