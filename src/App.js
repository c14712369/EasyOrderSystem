// App.js
import React from 'react';
import { Provider } from 'react-redux';
import './css/App.css'
import store from './store';
import Menu from './Menu';
import Cart from './Cart';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>超營養速食店點餐</h1>
        <Menu />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
