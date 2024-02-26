// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import "./css/App.css";
import store from "./Redux/store";
import Login from "./Login";
import ModeChoose from "./Component/ModeChoose";
import ManageMode from "./Component/ManageMode";
import BusinessMode from "./Component/BusinessMode";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ModeChoose" element={<ModeChoose />} />
          <Route path="/ManageMode" element={<ManageMode />} />
          <Route path="/BusinessMode" element={<BusinessMode />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
