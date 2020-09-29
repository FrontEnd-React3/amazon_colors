import React from "react";
import logo from "./imgs/amazon.png";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <Link to="/login">
        <img className="header__logo" src={logo} alt="amazon-logo" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            {/* no href cause this will refresh the page */}
            <span className="header__option1"> Hello Qazi </span>
            <span className="header__option2"> Sign in </span>
          </div>
        </Link>{" "}
        <Link to="/" className="header__link">
          {" "}
          <div className="header__option">
            {/* no href cause this will refresh the page */}
            <span className="header__option1"> Returns </span>
            <span className="header__option2"> Orders </span>
          </div>
        </Link>{" "}
        <Link to="/" className="header__link">
          {" "}
          <div className="header__option">
            {/* no href cause this will refresh the page */}
            <span className="header__option1"> Your </span>
            <span className="header__option2"> Prime</span>
          </div>
        </Link>
        <Link className="header__optionBasket" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span>0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
