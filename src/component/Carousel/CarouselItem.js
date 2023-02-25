import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProductCard2 from "../ProductCard/ProductCard2";
import classes from "./CarouselItem.module.css";

const CarouselItem = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <div className={classes.container}>
      <div className={classes.carousel}>
        <h3>Monthly Specials</h3>
        <Slider
          className={classes.slider}
          {...settings}
          styles={{ width: "90%", margin: "auto" }}
        >
          {props.products.map((product, index) => (
            <ProductCard2
              styles={{
                width: "80%",
                border: "none",
              }}
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              sale={product.sale}
            />
          ))}
        </Slider>
      </div>

      <div className={classes.mockup}>
        <h3>Black Friday Sale</h3>
        <h2>
          Up to <strong>50%</strong> OFF{" "}
        </h2>
        <img
          src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-home-pic1.png"
          alt="sale"
        />
        <p>Sale starts on November 24th</p>
        <Link className={classes.see_all_sale} to={""}>
          SEE ALL OFFERS
        </Link>
      </div>
    </div>
  );
};

export default CarouselItem;
