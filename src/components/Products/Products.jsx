import ProductCard from './ProductCard';
import { productsData } from '../../data/productsData';
import './Products.css';
import { useEffect, useState } from 'react';
import AddProductForm from './AddProductForm';
import Modal from '../UI/Modal';

function Products() {
  const [products, setProducts] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleAddProduct(newProduct) {
    setProducts([newProduct, ...products]);
  }

  async function fetchProducts() {
    setIsLoading(true);
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      setErrorMessage(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h2>Products Component</h2>

      <AddProductForm
        productsData={productsData}
        handleAddProduct={handleAddProduct}
        setIsShowModal={setIsShowModal}
      />
      <button onClick={fetchProducts}>Ürünleri Getir</button>
      {isLoading && <b>Yükleniyor!!!</b>}
      {errorMessage && <b>{errorMessage}</b>}
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
