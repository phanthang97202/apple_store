import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./DetailProduct.module.css";
import DUMMY_PRODUCTS from "./../../data/products";
import { useDispatch, useSelector } from "react-redux";
import { setAddProduct } from "../../store/cart";
import ProductCard2 from "../../component/ProductCard/ProductCard2";
import RoadMap from "../../component/RoadMap/RoadMap";

const DetailProduct = (props) => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const cart = useSelector((state) => state.cart.products);
  const currentProduct = cart.find((p) => p.id === params.id);
  useEffect(() => {
    const [detail] = DUMMY_PRODUCTS.filter(
      (product) => product.id === params.id
    );

    setProduct(detail);
    document.title = product.name;
    window.scrollTo(0, 0);
  }, [params.id]);

  // lấy số lượng sản phẩm
  const handlerIncrease = (e) => {
    if (quantity >= product.quantity) {
      return;
    }
    setQuantity((prev) => prev + 1);
  };
  const handlerDecrease = (e) => {
    if (quantity <= 0) {
      return;
    }
    setQuantity((prev) => prev - 1);
  };

  //   thêm vào giỏ hàng
  const dispatchAddToCart = useDispatch();
  const handlerAddToCart = (e) => {
    dispatchAddToCart(
      setAddProduct({
        id: product.id,
        name: product.name,
        price: product.price,
        sale: product?.sale,
        quantity: (currentProduct?.quantity || 0) + quantity,
        image: product.image,
        totalmoney: product.sale
          ? product.sale * quantity
          : product.price * quantity,
      })
    );
  };

  // responsive product related
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
    <div className={classes.container}>
      <RoadMap
        title="Our products"
        page={"Products"}
        link={"categories"}
        name={product.name}
      />
      <div className={classes.product_container}>
        <div className={classes.next_back_category}>
          <button className="fa-solid fa-chevron-left"></button>
          <Link>
            <i className="fa-brands fa-microsoft"></i>
          </Link>
          <button className="fa-solid fa-chevron-right"></button>
        </div>
        <div className={classes.product_main}>
          <div className={classes.product_main__image}>
            <img src={product.image} alt="" />
            <button className="fa-solid fa-magnifying-glass"></button>
          </div>
          <div className={classes.product_main__content}>
            <h1>{product.name}</h1>
            <h3>
              {product.sale ? (
                <>
                  <small
                    style={{
                      color: "#8b97aa",
                      paddingRight: "1rem",
                      fontStyle: "italic",
                    }}
                  >
                    <del>{product.price} $ </del>
                  </small>
                  {product.sale} $
                </>
              ) : (
                <>{product.price} $</>
              )}
            </h3>
            <h4>{product.description}</h4>
            <div className={classes.product_main__content_handler}>
              <div>
                <button
                  className="fa-solid fa-angle-up"
                  onClick={handlerIncrease}
                ></button>
                <input
                  step="1"
                  type="number"
                  value={quantity}
                  onChange={() => {}}
                />
                <button
                  className="fa-solid fa-angle-down"
                  onClick={handlerDecrease}
                ></button>
              </div>
              <button
                onClick={handlerAddToCart}
                className={classes.product_button}
              >
                Add to cart
              </button>
            </div>
            <p>
              Quantity: {product.quantity} <span>Categories:</span>{" "}
              <Link>Core parts</Link> <Link>Workstation</Link>
            </p>

            <ul>
              <li>Share</li>
              <li className="fa-brands fa-facebook-f"></li>
              <li className="fa-brands fa-twitter"></li>
              <li className="fa-brands fa-linkedin-in"></li>
              <li className="fa-brands fa-pinterest-p"></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={classes.product__configuration}>
        <div className={classes.product__configuration__toggle}>
          <button className={classes.active}>Description</button>
          <button className={classes}>Additional information</button>
        </div>
        <div className={classes.product__configuration__desc}>
          <p>{product.description}</p>
          <ul>
            <li>
              <img src={product.image} alt="" />
            </li>
            <li>
              <img src={product.image} alt="" />
            </li>
            <li>
              <img src={product.image} alt="" />
            </li>
          </ul>
          <h5>Full specification: </h5>
          <table>
            <tbody>
              <tr>
                <td>
                  <h6>processor</h6>
                  <h5>Intel Xeon W 2,5 GHz</h5>
                </td>
                <td>
                  <h6>processor</h6>
                  <h5>Intel Xeon W 2,5 GHz</h5>
                </td>
                <td>
                  <h6>processor</h6>
                  <h5>Intel Xeon W 2,5 GHz</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>processor</h6>
                  <h5>Intel Xeon W 2,5 GHz</h5>
                </td>
                <td>
                  <h6>processor</h6>
                  <h5>Intel Xeon W 2,5 GHz</h5>
                </td>
                <td>
                  <h6>processor</h6>
                  <h5>Intel Xeon W 2,5 GHz</h5>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={classes.product__configuration__additional}></div>
      </div>

      <div className={classes.related_product}>
        <p>Related products</p>
        <div>
          {DUMMY_PRODUCTS.slice(0, 3).map((product) => {
            return (
              <ProductCard2
                styles={
                  screenSize.width < 700 ? { width: "100%" } : { width: "32%" }
                }
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                sale={product.sale}
              />
            );
          })}
          {/* <Products quantityProductOnView={4} /> */}
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
