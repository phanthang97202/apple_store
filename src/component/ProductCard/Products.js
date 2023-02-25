import React, { useEffect, useState } from "react";
import DUMMY_PRODUCTS from "./../../data/products";
import ProductCard2 from "./ProductCard2";
import classes from "./Products.module.css";
const Products = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(DUMMY_PRODUCTS);
  }, []);
  return (
    <>
      <h3 className={classes.title}>New products</h3>
      <div className={classes.products}>
        {products.slice(0, props.quantityProductOnView).map((product) => {
          return (
            <ProductCard2
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              sale={product.sale}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
