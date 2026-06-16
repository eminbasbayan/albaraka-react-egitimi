import ProductCard from './ProductCard';
import { productsData } from '../../data/productsData';
import './Products.css';
import { useState } from 'react';
import AddProductForm from './AddProductForm';

function Products() {
  const [products, setProducts] = useState(productsData);

  function handleAddProduct(newProduct) {
    setProducts([newProduct, ...products]);
  }

  return (
    <div className="products-container">
      <h2>Products Component</h2>

      <AddProductForm
        productsData={productsData}
        handleAddProduct={handleAddProduct}
      />
      <div className="products-wrapper">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
            setProducts={setProducts}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
