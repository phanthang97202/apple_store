import React from "react";
import classes from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  return (
    <div className={classes.category}>
      <img src={props.image} alt={props.name} />
      <p>
        {props.name} <span>({props.quantity})</span>{" "}
      </p>
    </div>
  );
};

export default CategoryItem;
