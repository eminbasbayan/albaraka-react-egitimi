import { createBrowserRouter } from 'react-router';
import HomePage from '../pages/HomePage';
import productRoutes from './productRoutes';
import NotFoundPage from '../pages/NotFoundPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import MainLayout from '../layouts/MainLayout';

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
      ...productRoutes,
    ],
  },

  {
    path: '*',
    Component: NotFoundPage,
  },
]);

export default router;
