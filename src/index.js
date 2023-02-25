import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store/cart";
import formReducer from "./store/form";
import productReducer from "./store/product";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import css slick react
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// create store for using redux toolkit
const store = configureStore({
  reducer: {
    cart: cartReducer,
    form: formReducer,
    product: productReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
