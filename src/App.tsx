import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

/** Router */
import { AuthGuard, NotGuard, Private, Public, PrivateRoutes } from './router';

/** Layouts */
// import Layout from "./components/layouts/Layout"

/** Toasttify */
import { ToastContainer } from 'react-toastify';

/** Loader */
import Loader from './components/loader/Loader.loader';

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<main className='flex h-screen w-full'>
				<BrowserRouter>
					<Routes>
						{/** Public Routes */}
						<Route element={<NotGuard />}>
							<Route path='/*' element={<Public />} />
						</Route>

						{/** Private Routes */}
						<Route element={<AuthGuard />}>
							<Route path={`/${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
						</Route>
					</Routes>
				</BrowserRouter>

				<ToastContainer
					position='top-center'
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					theme='dark'
				/>
			</main>
		</Suspense>
	);
}

export default App;
