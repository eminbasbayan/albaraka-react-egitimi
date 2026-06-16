import ProductCard from './ProductCard';
import { productsData } from '../../data/productsData';
import './Products.css';
import { useState } from 'react';
import AddProductForm from './AddProductForm';

function Products() {
  const [products, setProducts] = useState(productsData);
  const [titleState, setTitleState] = useState('Title');

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
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
            titleState={titleState}
            setTitleState={setTitleState}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
