import { toast } from 'react-toastify';

interface Props {
	isSuccess: boolean;
	messageSuccess?: string;
	messageError?: string;
}

function Toast({ isSuccess, messageSuccess, messageError }: Props) {
	let Toast;

	Toast = isSuccess
		? toast.success(messageSuccess, {
				position: 'top-center',
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: false,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: 'dark',
		  })
		: toast.error(messageError, {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: false,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: 'dark',
		  });

	return Toast;
}

export default Toast;
