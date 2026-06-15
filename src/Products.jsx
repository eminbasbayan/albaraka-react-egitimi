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
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
