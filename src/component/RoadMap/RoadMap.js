import React from "react";
import { Link } from "react-router-dom";
import classes from "./RoadMap.module.css";
const RoadMap = (props) => {
  return (
    <div className={classes.road_map}>
      <h2>{props.title}</h2>
      <p>
        <Link to={"/"}>Home </Link>
        <span>
          <i className="fa-solid fa-chevron-right"></i>
        </span>{" "}
        <Link to={`/${props.link}`}>{props.page}</Link>
        <span>
          <i className="fa-solid fa-chevron-right"></i>
        </span>{" "}
        {props.name}
      </p>
    </div>
  );
};

export default RoadMap;
