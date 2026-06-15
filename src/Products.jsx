import ProductCard from './ProductCard';
import './Products.css';

function Products() {
  const image = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png';
  const title = 'Çanta';
  const price = 200;

  return (
    <div className="products-container">
      <h2>Products Component</h2>

      <div className="products-wrapper">
        <ProductCard image={image} title={title} price={price} />
      </div>
    </div>
  );
}

export default Products;
