import { Navigate, Route, Routes } from 'react-router-dom';
import FormDataUser from '../components/FormDataUser';
import FormChangePassword from '../components/FormChangePassword';

export default function Router() {
	return (
		<Routes>
			<Route path='/private/settings' element={<Navigate to={'/private/settings/data-user'} />} />
			<Route path='data-user' element={<FormDataUser />} />
			<Route path='change-password' element={<FormChangePassword />} />
		</Routes>
	);
}
