import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DUMMY_PRODUCTS from "./../../data/products";
import classes from "./../../component/ProductCard/Products.module.css";
import ProductCard2 from "../../component/ProductCard/ProductCard2";
import classesSearch from "./Search.module.css";
const Search = () => {
  document.title = "Home";
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const search = DUMMY_PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(params.name.toLowerCase())
    );
    setProducts(search);
  }, [params]);

  return (
    <div>
      <div className={classes.products}>
        {products.length > 0 ? (
          products.map((product) => {
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
          })
        ) : (
          <div className={classesSearch.notFound}>
            <h2 className={classesSearch.fail_search}>
              0 results found for: {params.name}
            </h2>
            <img
              src="https://i.pinimg.com/236x/41/be/94/41be94ffe572a66a928b605c3335b806.jpg"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
