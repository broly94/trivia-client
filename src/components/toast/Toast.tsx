import { toast } from 'react-toastify'

interface Props {
  isSuccess: boolean
  messageSuccess?: string
  messageError?: string
}

function Toast({ isSuccess, messageSuccess, messageError }: Props) {

  let Toast

  Toast = isSuccess ?
    toast.success(messageSuccess, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }) :
    toast.error(messageError, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });


  return (
    <>
      Toast
    </>
  )
}

export default Toast