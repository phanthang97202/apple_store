import React, { useCallback, useEffect, useState } from "react";
import classes from "./Categories.module.css";
import DUMMY_PRODUCTS from "./../../data/products";
import Wrapper from "../../component/Wrapper/Wrapper";
import ProductCard from "../../component/ProductCard/ProductCard";
import Products from "../../component/ProductCard/Products";
import ProductCard2 from "../../component/ProductCard/ProductCard2";
import RoadMap from "../../component/RoadMap/RoadMap";
import { Link } from "react-router-dom";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [minMax, setMinMax] = useState({});
  useEffect(() => {
    const products = DUMMY_PRODUCTS;
    setProducts(products);
    setMinMax({
      minPrice: Math.min(...products.map((product) => product.price)),
      maxPrice: Math.max(...products.map((product) => product.price)),
    });
  }, []);

  const handlerBrand = (e) => {
    const products = DUMMY_PRODUCTS.filter(
      (category) => category.brand === e.target.value
    );
    setProducts(products);
    if (e.target.value === "all") {
      setProducts(DUMMY_PRODUCTS);
    }
  };
  document.title = "Categories";

  // lấy range price

  const [range, setRange] = useState(minMax.minPrice);
  const handlerRange = (e) => {
    setRange(e.target.value);

    // console.log("===range", range);
  };
  const handlerFilterByPrice = (e) => {
    console.log("filter by price", range);
    const products = DUMMY_PRODUCTS.filter(
      (category) => category.price > range && category.price < minMax.maxPrice
    );
    setProducts(products);
    window.scrollTo(0, 0);
  };

  // responsive products
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
      });
    };
    // console.log("===screenSize", screenSize.width);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize.width]);
  return (
    <>
      <RoadMap page={"Categories"} link={"categories"} title="Categories" />
      <div className={classes.container}>
        <div className={classes.products_container}>
          <div className={classes.products_filter}>
            <div className={classes.products_filter__result}>
              <p>
                Showing all <b>{products.length}</b> results
              </p>
            </div>
            <select className={classes.select} onChange={handlerBrand}>
              <option value="all">Show all products</option>
              <option value="smartphone">Filter with smart phone</option>
              <option value="pc">Filter with laptop</option>
              <option value="tv">Filter with television</option>
            </select>
          </div>
          <div className={classes.all_products}>
            {/* <Wrapper> */}
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard2
                  styles={
                    screenSize.width < 800 ? { width: "48%" } : { width: "30%" }
                  }
                  key={product.id}
                  image={product.image}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  sale={product.sale}
                />
              ))
            ) : (
              <div className={classes.notFound}>
                <h2 className={""}>
                  0 results found for: ${range} - ${minMax.maxPrice}
                </h2>
                <img
                  src="https://i.pinimg.com/236x/41/be/94/41be94ffe572a66a928b605c3335b806.jpg"
                  alt=""
                />
              </div>
            )}
            {/* </Wrapper> */}
          </div>
        </div>

        <div className={classes.filter_handler}>
          <h4>Cart</h4>
          <p>
            No product in your cart
            {/* <Link to={"/cart"}>Go to cart</Link>
            <span className="fa-solid fa-right-long"></span> */}
          </p>
          <h3>Product categories</h3>
          <ul>
            <li>
              <Link to={"#"}>Accessories</Link>
            </li>
            <li>
              <Link to={"#"}>Core part</Link>
            </li>
            <li>
              <Link to={"#"}>Peripincel</Link>
            </li>
            <li>
              <Link to={"#"}>Printers</Link>
            </li>
            <li>
              <Link to={"#"}>Uncategoriezed</Link>
            </li>
            <li>
              <Link to={"#"}>Workstations</Link>
            </li>
          </ul>
          <h3>Filter by price</h3>
          <input
            value={range}
            min={minMax.minPrice}
            max={minMax.maxPrice}
            step="1"
            start={minMax.minPrice}
            defaultValue={minMax.minPrice}
            onChange={handlerRange}
            type="range"
          />
          <div>
            <button onClick={handlerFilterByPrice}>Filter</button>
            <p>
              <span> Price</span> : <strong>${range}</strong> -{" "}
              <strong>{minMax.maxPrice}$</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
