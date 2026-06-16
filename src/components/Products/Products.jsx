import ProductCard from './ProductCard';
import { productsData } from '../../data/productsData';
import './Products.css';
import { useState } from 'react';
import AddProductForm from './AddProductForm';
import Modal from '../UI/Modal';

function Products() {
  const [products, setProducts] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  function handleAddProduct(newProduct) {
    setProducts([newProduct, ...products]);
  }

  async function fetchProducts() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="products-container">
      <h2>Products Component</h2>

      <AddProductForm
        productsData={productsData}
        handleAddProduct={handleAddProduct}
        setIsShowModal={setIsShowModal}
      />
      <button onClick={fetchProducts}>Ürünleri Getir</button>
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

      {isShowModal && (
        <Modal
          title="Inputlar boş geçilemez!"
          description="Lütfen tüm form elemanlarının dolu olduğundan emin olun!"
          onClose={() => setIsShowModal(false)}
        />
      )}
    </div>
  );
}

export default Products;
