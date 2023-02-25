import React from "react";
import { Link } from "react-router-dom";
import classes from "./SlideItem.module.css";
import styles from "./SlideItem.module.css";

const SlideItem = (props) => {
  return (
    // <div className={`${styles.slide_item} ${styles[`${props.className}`]}`}>
    <div className={props.className}>
      <div className={styles.slide_item}>
        <div className={classes.slide_description}>
          <h3>- monthly special</h3>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <ul>
            <li>
              <p>processor</p>
              <h3>{props.processor}</h3>
            </li>
            <li>
              <p>graphics card</p>
              <h3>{props.card}</h3>
            </li>
          </ul>
          <Link className={classes.slide_description__link} to={"/"}>
            SEE MORE DETAILS
          </Link>
        </div>
        <div className={classes.slide_image}>
          <img src={props.image} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
