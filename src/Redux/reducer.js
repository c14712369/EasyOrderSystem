import { ADD_TO_CART, CLEAR_CART } from './Action';

const initialState = {
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) { 
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default rootReducer;
