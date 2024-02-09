// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import "./css/App.css";
import store from "./store";
import Login from "./Login";
import ModeChoose from "./ModeChoose";
import ManageMode from "./ManageMode";
import BusinessMode from "./BusinessMode";

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
