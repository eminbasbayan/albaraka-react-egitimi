import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/Products/ProductCard';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      <div className="products-wrapper">
        {cartItems.map((item) => (
          <ProductCard {...item} cart />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
