import ProductCard from './ProductCard';
import { productsData } from '../../data/productsData';
import './Products.css';
import { useEffect, useReducer } from 'react';
import AddProductForm from './AddProductForm';
import Modal from '../UI/Modal';
import { initialState, reducerFunc } from './productReducer';

function Products() {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  function handleAddProduct(newProduct) {
    dispatch({ type: 'ADD_NEW_PRODUCT', newProduct });
  }

  async function fetchProducts() {
    dispatch({ type: 'LOADING', show: true });
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      dispatch({ type: 'GET_PRODUCTS', products: data });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: 'LOADING', show: false });
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
        setIsShowModal={() => dispatch({ type: 'SHOW_MODAL' })}
      />
      <button onClick={fetchProducts}>Ürünleri Getir</button>
      {state.isLoading && <b>Yükleniyor!!!</b>}
      <div className="products-wrapper">
        {state.products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
            setProducts={(productId) =>
              dispatch({
                type: 'DELETE_PRODUCT',
                products: state.products.filter(
                  (product) => product.id !== productId,
                ),
              })
            }
          />
        ))}
      </div>

      {state.isShowModal && (
        <Modal
          title="Inputlar boş geçilemez!"
          description="Lütfen tüm form elemanlarının dolu olduğundan emin olun!"
          onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
        />
      )}
    </div>
  );
}

export default Products;
