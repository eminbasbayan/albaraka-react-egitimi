import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  );

  function addToCart(product) {
    setCartItems((prev) => [...prev, product]);
    toast('Ürün sepete eklendi', {
      type: 'success',
      position: 'bottom-right',
    });
  }

  function removeFromCart(cartItemId) {
    setCartItems((prev) => prev.filter((item) => item.id !== cartItemId));
    toast('Ürün sepetten silindi!', {
      type: 'warning',
      position: 'bottom-right',
    });
  }

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
