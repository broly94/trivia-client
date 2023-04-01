
import { toast } from 'react-toastify'
import axios from '../../base.axios'

export const sendEmail = async (email: string) => {
        try {
                return await toast.promise(
                        axios.put('/api/forgot-password', { email }),
                        {
                                pending: 'Enviando email...',
                                success: 'Email enviado, revise su correo',
                                error: 'Error al enviar el email. Vuelva a intentarlo'
                        },
                        {
                                hideProgressBar: true,
                                closeOnClick: false,
                                pauseOnHover: false,
                                draggable: false,
                                progress: undefined,
                                theme: "dark",
                        }

                )
        } catch (error) {
                console.log(error)
        }
}