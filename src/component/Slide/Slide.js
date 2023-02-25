import React, { useState } from "react";
import SlideItem from "./SlideItem";
import classes from "./Slide.module.css";
const Slide = () => {
  const [show, setShow] = useState("show");
  const [hide, setHide] = useState("hide");

  const handlerBack = (e) => {
    setShow("show");
    setHide("hide");
  };

  const handlerNext = (e) => {
    setShow("hide");
    setHide("show");
  };

  return (
    <div className={classes.container_banner}>
      {/* SAU  */}
      <SlideItem
        className={classes[`${show}`]}
        name={"Dell Gaming G3"}
        image={
          "https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-slider-pic1-1.png"
        }
        description={
          "Hiệu năng vượt trội nhờ chip Apple A15 Bionic. Con chip Apple A15 Bionic siêu mạnh được sản xuất trên quy trình 5 nm giúp iPhone 13"
        }
        processor={"Intel Xeon W 2.5 Hz"}
        card={"AMD Radeon Vega"}
      />

      {/* TRƯỚC  */}
      <SlideItem
        className={classes[`${hide}`]}
        name={"Macbook M1 Plus"}
        image={
          "https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-slider-pic2.png"
        }
        description={
          "Sản phẩm chắc chắn sẽ không làm bạn phải thất vọng khi sở hữu trong ngồi nhà của bạn"
        }
        processor={"Itel Core i10 Hz"}
        card={"Apple A15"}
      />
      <div className={classes.button_slide}>
        <button
          onClick={handlerBack}
          className="fa-solid fa-angle-left"
        ></button>
        <button
          onClick={handlerNext}
          className="fa-solid fa-angle-right"
        ></button>
      </div>
    </div>
  );
};

export default Slide;
