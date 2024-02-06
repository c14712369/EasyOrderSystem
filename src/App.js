// App.js
import React from 'react';
import { Provider } from 'react-redux';
import './css/App.css'
import store from './store';
import Login from './Login';

const App = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default App;
