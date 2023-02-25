import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductCard2.module.css";
const ProductCard2 = (props) => {
  return (
    <div style={props.styles} className={classes.product}>
      {props.sale ? (
        <button className={classes.product_percent}>
          - {Math.round((props.sale / props.price) * 100)} %
        </button>
      ) : (
        ""
      )}
      <div className={classes.product_image}>
        <Link to={`/product/${props.id}`}>
          <img src={props.image} alt={props.name} />
        </Link>
      </div>
      <div className={classes.product_infor}>
        <Link className={classes.product_name} to={`/product/${props.id}`}>
          {props.name}
        </Link>
        <p className={classes.product_price}>
          {props.sale ? (
            <>
              <del>£{props.price}</del>
              <u>£{props.sale}</u>
            </>
          ) : (
            <span>£{props.price}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductCard2;
