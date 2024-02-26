import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import addItemReducer from './AddItemReducer';

const store = configureStore({
  reducer: rootReducer,
  addItemReducer: addItemReducer
});

export default store;
