import { createBrowserRouter } from 'react-router';
import HomePage from '../pages/HomePage';
import productRoutes from './productRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  ...productRoutes,
]);

export default router;
