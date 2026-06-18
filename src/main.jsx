import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import CartProvider from './context/CartContext.jsx';
import AuthProvider from './context/AuthContext.jsx';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store.js';
import './index.css';

createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </ReduxProvider>,
);
