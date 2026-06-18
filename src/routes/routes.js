import { createBrowserRouter } from 'react-router';
import HomePage from '../pages/HomePage';
import productRoutes from './productRoutes';
import NotFoundPage from '../pages/NotFoundPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import MainLayout from '../layouts/MainLayout';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/Auth/LoginPage';
import AuthLayout from '../layouts/AuthLayout';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
      {
        path: '/about',
        Component: AboutPage,
      },
      {
        path: '/contact',
        Component: ContactPage,
      },
      {
        path: '/cart',
        Component: CartPage,
      },
      ...productRoutes,
    ],
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children: [
      {
        path: '/auth/login',
        Component: LoginPage,
      },
    ],
  },

  {
    path: '*',
    Component: NotFoundPage,
  },
]);

export default router;
