import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import classes from "./Header.module.css";
import styles from "./Header.module.css";

const Header = () => {
  const cart = useSelector((state) => state.cart.products);
  // console.log("==giỏ hàng", cart);

  const navigate = useNavigate();
  //   console.log(navigate);
  const [searchText, setSearchText] = useState("");
  const handlerSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        navigate(`/search/${searchText}`);
      }
    });
    return () => {
      window.removeEventListener("keydown", (e) => {
        if (e.keyCode === 13) {
          navigate(`/search/${searchText}`);
        }
      });
    };
  }, [searchText]);

  const handlerGoToSearch = (e) => {
    navigate(`/search/${searchText}`);
  };

  // đóng mở menu
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const buttonMenu = useRef();
  const menuCover = useRef();

  const handlerOpenMenu = (e) => {
    // menuCover.current.classList.add("active");
    setIsOpenMenu(true);
  };

  const handlerCloseMenu = (e) => {
    // menuCover.current.style.remove("active");
    setIsOpenMenu(false);
  };

  return (
    <div className={classes.container_nav}>
      <div className={classes.container_nav__logo}>
        <Link to="/">
          <img
            width={84}
            height={60}
            src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/retina-computershop.png"
            alt="logo"
          />
        </Link>
      </div>
      <nav className={classes.navbar}>
        <ul
          ref={menuCover}
          className={`${styles.navbar_menu} ${
            isOpenMenu ? `${styles.activeMenu}` : ""
          } `}
        >
          <li style={{ padding: 0 }}>
            <button className={classes.closeMenu} onClick={handlerCloseMenu}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </li>
          <li>
            <Link className={classes.navbar_menu__link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={classes.navbar_menu__link} to="/categories">
              Categories
            </Link>
          </li>
          <li>
            <Link className={classes.navbar_menu__link} to="/about">
              About The Shop
            </Link>
          </li>
          <li>
            <Link className={classes.navbar_menu__link} to="/contact">
              Contact Us
            </Link>
          </li>
          {/* <li>
            <Link className={classes.navbar_menu__link} to="/cart">
              Buy Now
            </Link>
          </li> */}
          <li className={classes.responsiveMenu}>
            <Link className={classes.navbar_menu__link} to="/cart">
              <p className={classes.navbar_user__iconcart}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span>{cart.length}</span>
              </p>
            </Link>
            <button className={classes.navbar_menu__account}>
              {/* <p>My Account</p>
            <i className="fa-solid fa-angle-right"></i> */}
              <i className="fa-solid fa-user"></i>
            </button>
          </li>
        </ul>
        <ul className={classes.navbar_user}>
          <li className={classes.box_search}>
            {/* <Search /> */}
            <button
              onClick={handlerGoToSearch}
              className={classes.buttonSearch}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              onChange={handlerSearch}
              className={classes.inputSearch}
              type="text"
              placeholder="Enter keyword..."
            />
          </li>
          <li className={classes.hideCart}>
            <Link className={classes.navbar_menu__link} to="/cart">
              <p className={classes.navbar_user__iconcart}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span>{cart.length}</span>
              </p>
            </Link>
          </li>

          <li className={classes.hideAccount}>
            <button className={classes.navbar_menu__account}>
              {/* <p>My Account</p>
            <i className="fa-solid fa-angle-right"></i> */}
              <i className="fa-solid fa-user"></i>
            </button>
          </li>
        </ul>
        <button
          ref={buttonMenu}
          onClick={handlerOpenMenu}
          className={`${styles.buttonMenu} `}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
    </div>
  );
};

export default Header;
