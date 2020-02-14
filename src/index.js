import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Default from "./components/Layout/Default";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store/index";

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <Default />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
