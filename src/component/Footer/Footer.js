import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <ul className={classes.useful}>
          <li className={classes.title_item}>Useful links</li>
          <li>Contact us</li>
          <li>Help & About us</li>
          <li>Shipping & Returns</li>
          <li>Refund Policy</li>
        </ul>
        <ul className={classes.service}>
          <li className={classes.title_item}>Customer services</li>
          <li>Orders</li>
          <li>Downloads</li>
          <li>Addresses</li>
          <li>Account details</li>
          <li>Logout</li>
          <li>Lost password</li>
        </ul>
        <ul className={classes.delivery}>
          <li className={classes.title_item}>Delivery</li>
          <li>How it Works</li>
          <li>Free Delivery</li>
          <li>FAQ</li>
          <li>Payment methods</li>
          <li>Delivery areas</li>
        </ul>
        <ul className={classes.contact}>
          <li className={classes.title_item}>Contact us</li>
          <li>
            <i className="fa-solid fa-mobile-screen-button"></i>
            <span>+84 (0) 394 086 707</span>
          </li>
          <li>noreply@envato.com</li>
          <li>
            <img
              src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-footer-pic1.png"
              alt="payment"
            />
          </li>
        </ul>
      </footer>
      <div className={classes.author}>
        <p>Fall In Luv</p>
        <p>Viet Nam</p>
        <p>
          <span>Terms and conditions</span> | <span>Privacy policy</span> |
          <span> Cookies</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
