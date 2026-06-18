import ProductCard from '../components/Products/ProductCard';
import { useSelector } from 'react-redux';

const CartPage = () => {
  /* const { cartItems } = useContext(CartContext); */
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      {cartItems.length === 0 && (
        <h3 className="text-3xl">Sepette hiç ürün yok!</h3>
      )}
      <div className="products-wrapper">
        {cartItems.map((item) => (
          <ProductCard key={item.id} {...item} cart />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
