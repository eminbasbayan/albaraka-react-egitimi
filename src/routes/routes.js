import { createBrowserRouter } from 'react-router';
import HomePage from '../pages/HomePage';
import productRoutes from './productRoutes';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  ...productRoutes,
  {
    path: "*",
    Component: NotFoundPage
  }
]);

export default router;
