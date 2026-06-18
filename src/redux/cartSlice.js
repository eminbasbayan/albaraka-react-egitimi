import { createSlice } from '@reduxjs/toolkit';

function setLocalStorage(cartItems) {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);

      state.cartItems = [action.payload, ...state.cartItems];
      setLocalStorage(state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
      setLocalStorage(state.cartItems);
    },
    miktarArttir: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    miktarAzalt: (state, action) => {
      const findCartItem = state.cartItems.find(
        (item) => item.id === action.payload,
      );

      if (findCartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== findCartItem.id,
        );
        return;
      }

      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
});

export const { addToCart, removeFromCart, miktarArttir, miktarAzalt } =
  cartSlice.actions;
export default cartSlice.reducer;
