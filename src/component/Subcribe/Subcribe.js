import React from "react";
import classes from "./Subcribe.module.css";
const Subcribe = () => {
  return (
    <div className={classes.section_form}>
      <div className={classes.section_wrap}>
        <h6>DON'T MISS ANYTHING</h6>
        <h2>
          Subscribe to our newsletter <br></br> and grab
          <span>
            <strong>30% OFF!</strong>
          </span>
        </h2>
        <input
          type="email"
          name=""
          id=""
          className={classes.section_form__input}
          placeholder="Your e-mail..."
        />
        <br></br>
        <input type="submit" value="SIGN UP" className={classes.sub_btn} />
      </div>
    </div>
  );
};

export default Subcribe;
