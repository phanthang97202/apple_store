import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RoadMap from "../../component/RoadMap/RoadMap";
import { deleteProductOnCart, setAddProduct } from "../../store/cart";
import classes from "./YourCart.module.css";
const YourCart = () => {
  // get all products in your cart
  const cart = useSelector((state) => state.cart.products);
  useEffect(() => {
    document.title = "Cart";
  }, []);

  // remove one item on the cart
  const dispatchDeleteOne = useDispatch();

  // tổng tiền trong giỏ hàng
  const [totalMoneyCart, setTotalMoneyCart] = useState(0);
  useEffect(() => {
    const result = cart.reduce((total, product) => {
      return total + product.totalmoney;
    }, 0);
    setTotalMoneyCart(result);
    console.log(totalMoneyCart);
  }, [cart]);

  // update số lượng sản phẩm
  const dispatchUpdateQuantity = useDispatch();

  return (
    <div className={classes.container}>
      <RoadMap page={"Your Cart"} link={"cart"} title="Your cart" />

      {cart.length > 0 ? (
        <>
          <table className={classes.carts}>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Money</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      style={{ display: "flex", margin: "auto" }}
                      width={100}
                      height={100}
                      src={product.image}
                      alt=""
                    />
                  </td>
                  <td>
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </td>
                  <td>
                    {product.sale ? (
                      <>
                        <del>
                          <small>{product.price}$</small>
                        </del>
                        <u>{product.sale}$</u>
                      </>
                    ) : (
                      <u>{product.price}$</u>
                    )}
                  </td>
                  <td>
                    <input
                      value={product.quantity}
                      type="number"
                      min="1"
                      step="1"
                      max="999999"
                      onChange={(e) => {
                        dispatchUpdateQuantity(
                          setAddProduct({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            sale: product?.sale,
                            quantity:
                              product.quantity +
                              (+e.target.value > product.quantity ? 1 : -1),
                            image: product.image,
                            totalmoney: product.sale
                              ? product.sale * e.target.value
                              : product.price * e.target.value,
                          })
                        );
                      }}
                    />
                  </td>
                  <td>{product.totalmoney}$</td>
                  <td>
                    <button
                      onClick={() =>
                        dispatchDeleteOne(
                          deleteProductOnCart({ idProductCart: product.id })
                        )
                      }
                      className="fa-solid fa-trash"
                    ></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={classes.checkout}>
            <div></div>
            <div className={classes.total_monney}>
              <p>Cart totals</p>
              <div>
                <h4>Total money</h4>
                <p>{totalMoneyCart} $</p>
              </div>
              <button>Process to checkout</button>
            </div>
          </div>
        </>
      ) : (
        <div className={classes.empty_cart}>
          <Link className={classes.return} to={"/categories"}>
            <i className="fa-solid fa-arrow-left"></i>
            Return
          </Link>
          <h2>Empty cart</h2>
          <div>
            <img src="https://i.imgur.com/bTxO7C3.gif" alt="empty cart" />
          </div>
        </div>
      )}
    </div>
  );
};

export default YourCart;
