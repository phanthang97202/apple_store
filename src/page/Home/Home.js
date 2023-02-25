import React from "react";
import Category from "../../component/Category/Category";
import Subcribe from "./../../component/Subcribe/Subcribe";
import Products from "../../component/ProductCard/Products";
import Slide from "../../component/Slide/Slide";
import Carousel from "../../component/Carousel/Carousel";
import Work from "../../component/Work/Work";

const Home = () => {
  document.title = "Home";
  return (
    <div>
      <Slide />
      <Category />
      <Carousel />
      <Work />
      <Products quantityProductOnView={4} />
      <Subcribe />
    </div>
  );
};

export default Home;
