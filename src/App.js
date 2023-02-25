import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Search from "./page/Search/Search";
import Categories from "./page/Categories/Categories";
import DetailProduct from "./page/DetailProduct/DetailProduct";
import Home from "./page/Home/Home";
import YourCart from "./page/Cart/YourCart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/cart" element={<YourCart />} />
        <Route path="/search/:name" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
