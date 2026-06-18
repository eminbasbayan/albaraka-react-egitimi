import ProductDetails from '../pages/ProductDetails';
import ProductsPage from '../pages/ProductsPage';

const productRoutes = [
  {
    path: '/products',
    Component: ProductsPage,
  },
  {
    path: "/product-details/:productId",
    Component: ProductDetails
  }
];

export default productRoutes;
