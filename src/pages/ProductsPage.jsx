import Products from '../components/Products/Products';
import Header from '../layout/Header';

const ProductsPage = () => {
  return (
    <div className="products-page">
      <Header />
      <h1>Products Page</h1>
      <Products />
    </div>
  );
};

export default ProductsPage;
