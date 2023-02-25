import React from "react";
import classes from "./Work.module.css";
const Work = () => {
  return (
    <div className={classes.form_about}>
      <div className={classes.form_about__col}>
        <div className={classes.form_about__left}>
          <img
            src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-home-pic3.png"
            alt="Avatar about"
          />
        </div>

        <div className={classes.form_about__right}>
          <p>
            <i className="fa-solid fa-minus"></i>
            ABOUT OUR SHOP
          </p>
          <h2>
            Everything what you
            <strong> need for work</strong>
          </h2>
          <ul className={classes.list_item}>
            <li>
              <img
                src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-icon1.png"
                alt=""
              />
              Lorem ipsum dolor sit amet enim
            </li>
            <li>
              <img
                src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-icon1.png"
                alt=""
              />
              Vestibulum dapibus, mauris nec malesuada
            </li>
            <li>
              <img
                src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-icon1.png"
                alt=""
              />
              Quisque lorem tortor fringilla vestibulum id
            </li>
          </ul>
          <button type="submit">
            READ MORE <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
