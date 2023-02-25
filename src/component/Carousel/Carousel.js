import React, { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import DUMMY_PRODUCTS from "./../../data/products";
import classes from "./Carousel.module.css";
const Carousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(DUMMY_PRODUCTS);
  }, []);
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Promoted products</h1>
      <CarouselItem products={products} />
    </div>
  );
};

export default Carousel;
