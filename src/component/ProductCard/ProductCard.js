import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAddProduct } from "../../store/cart";
import { openModelUpdate } from "../../store/form";
import { detailProduct } from "../../store/product";
import ModelUpdate from "../ModelUpdate/ModelUpdate";
import classes from "./ProductCard.module.css";
// import DUMMY_PRODUCTS from "./../../data/products";

const ProductCard = (props) => {
  const dispatchAddToCart = useDispatch();
  const handlerAddToCart = (e) => {
    e.preventDefault();
    dispatchAddToCart(
      setAddProduct({
        id: props.id,
        name: props.name,
        price: props.price,
        quantity: 1,
        image: props.image,
      })
    );
  };
  const isOpenModelUpdate = useSelector(
    (state) => state.form.isOpenModelUpdate
  );
  const dispatchUpdateProduct = useDispatch();

  // get thông tin của sản phẩm để update

  const dispatchUpdateIdProduct = useDispatch();
  const idProductUpdate = useSelector((state) => state.product.id);
  const handlerUpdateProduct = (e) => {
    e.preventDefault();
    dispatchUpdateProduct(openModelUpdate(true));
    dispatchUpdateIdProduct(
      detailProduct({ idProduct: e.target.getAttribute("data-update") })
    );
  };
  return (
    <>
      {isOpenModelUpdate && <ModelUpdate id={idProductUpdate} />}
      <Link to={`/product/${props.id}`} className={classes.product_card}>
        <img src={props.image} alt={props.name} />
        <h2 className={classes.product_name}>{props.name}</h2>
        <p className={classes.product_price}>{props.price} VNĐ</p>
        <button onClick={handlerAddToCart} className={classes.add_to_cart}>
          Add to Cart
        </button>
        <button
          data-update={props.id}
          onClick={handlerUpdateProduct}
          className={classes.add_to_cart}
        >
          Chỉnh sửa
        </button>
      </Link>
    </>
  );
};

export default ProductCard;
