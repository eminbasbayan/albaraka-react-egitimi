import { createContext } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  const fullName = 'Emin Başbayan';

  return (
    <CartContext.Provider value={{ fullName, adres: 'Türkiye' }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
