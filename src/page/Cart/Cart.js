import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
const Cart = () => {
  const cart = useSelector((state) => state.cart.products);
  useEffect(() => {
    document.title = "Cart";
  }, []);

  return (
    <>
      {cart.length > 0 ? (
        cart.map((product) => {
          return (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className={classes.cart_container}
            >
              <div className={classes.cart_item}>
                <img src={`${product.image}`} alt={product.name} />
                <div className={classes.item_details}>
                  <h3>{product.name}</h3>
                  <p>Số lượng: {product.quantity}</p>
                  {/* <p>Description of product</p> */}
                  <span>{product.price} VNĐ</span>
                </div>
              </div>
              <div className={classes.cart_total}>
                <h3>
                  Tổng tiền: {product.price * product.quantity}
                  VNĐ
                </h3>
                <button>Checkout</button>
              </div>
            </Link>
          );
        })
      ) : (
        <h2>Vui lòng thêm sản phẩm vào giỏ hàng</h2>
      )}
    </>
  );
};

export default Cart;
