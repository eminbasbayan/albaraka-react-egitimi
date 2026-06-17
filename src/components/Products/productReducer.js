function reducerFunc(state, action) {
  switch (action.type) {
    case 'ADD_NEW_PRODUCT':
      return { ...state, products: [action.newProduct, ...state.products] };
    case 'GET_PRODUCTS':
      return { ...state, products: action.products };
    case 'DELETE_PRODUCT':
      return { ...state, products: action.products };
    case 'SHOW_MODAL':
      return { ...state, isShowModal: true };
    case 'CLOSE_MODAL':
      return { ...state, isShowModal: false };
    case 'LOADING':
      return { ...state, isLoading: action.show };
    default:
      return state;
  }
}

const initialState = {
  products: [],
  isShowModal: false,
  errorMessage: null,
  isLoading: false,
};

export { reducerFunc, initialState };
