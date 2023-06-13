import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

import { store } from './redux/store/store';
import { Provider } from 'react-redux';

import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
