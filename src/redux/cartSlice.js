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
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
