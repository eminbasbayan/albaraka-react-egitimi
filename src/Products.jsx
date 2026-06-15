import ProductCard from './ProductCard';
import { productsData } from './data/productsData';
import './Products.css';

function Products() {
  return (
    <div className="products-container">
      <h2>Products Component</h2>

      <div className="products-wrapper">
        {productsData.map((product) => (
          <ProductCard
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
