import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "./../../../../images/upperNav/menu.svg";
import logo from "./../../../../images/upperNav/logo.svg";
import leftArrow from "./../../../../images/upperNav/leftArrow.svg";
import rightArrow from "./../../../../images/upperNav/rightArrow.svg";
import phone from "./../../../../images/upperNav/phone.svg";
import shopCart from "./../../../../images/upperNav/shopCart.svg";
import location from "./../../../../images/upperNav/location.svg";
import "./UpperNav.css";
import Sidebar from "../sidebar/Sidebar";
import MiddleNav from './../MiddleNav/MiddleNav';

const UpperNav = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const showSidebarHandler = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <section className="uppernav">
      <div className="container">
        <div className="uppernav_inner">
          <div className="uppernav_menuBrandWrapper">
            <button onClick={showSidebarHandler}>
              <img src={menu} alt="menu" />
            </button>
            <Link to="/" className="uppernav_brand_home">
              <img src={logo} alt="logo" className="" />
            </Link>
          </div>
          <MiddleNav />
          <div className="uppernav_offers">
            <img src={leftArrow} alt="left arrow" />
            Valentine’s Day Offers! Buy Two Get One Free{" "}
            <Link to="/" className="bold">
              Shop Now
            </Link>
            <img src={rightArrow} alt="right arrow" />
          </div>
          <ul className="uppernav_info-containers">
            <li>
              <img src={phone} alt="phone icon" />
              <h3>Contact Us</h3>
            </li>
            <li>
              <img src={shopCart} alt="shopCart icon" />
              <h3>Track Order</h3>
            </li>
            <li>
              <img src={location} alt="location icon" />
              <h3>Find A Store</h3>
            </li>
          </ul>
        </div>
      </div>
      <Sidebar
        closeSidebar={showSidebarHandler}
        showSidebar={showSidebar}
        showSidebarStatus={showSidebar}
      />
    </section>
  );
};

export default UpperNav;
