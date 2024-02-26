// Cart
export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

// AddItem
export const updateCategory = (category) => ({
  type: 'UPDATE_CATEGORY',
  payload: category,
});

export const updateSort = (sort) => ({
  type: 'UPDATE_SORT',
  payload: sort,
});

export const toggleEnable = () => ({
  type: 'TOGGLE_ENABLE',
});

export const updateFile = (file) => ({
  type: 'UPDATE_FILE',
  payload: file,
});