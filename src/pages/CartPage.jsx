import ProductCard from '../components/Products/ProductCard';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const cartTotal = cartItems.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.price * currentValue.quantity,
    0,
  );

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
      Sepet Toplam: {cartTotal.toFixed(2)}
    </div>
  );
};

export default CartPage;
