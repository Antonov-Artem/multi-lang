import { store } from './store';
import { HomePage } from 'pages/home';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HomePage />
  </Provider>
);
