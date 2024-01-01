import React from "react";
import { LOGO_URL } from "../Utils/constants";

const Header = () => {
  return (
    <>
      <header className=" main-header onlyWeb">
        <div className="main-container flex-class">
          <div className="logo flex-class">
            <img src={LOGO_URL} alt="bewkoof logo" />
            <div className="nav-bar flex-class primary-nav ">
              <ul className="flex-class nav ">
                <li>
                  <a>Men</a>
                </li>
                <li>
                  <a>Women</a>
                </li>
                <li>
                  <a>Accessories</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="secondary-nav flex-class nav-bar ">
            <ul className="nav flex-class ">
              <li className="flex-class">
                <span className="search-icon">
                  <i class="fi fi-rr-search"></i>
                </span>
                <input
                  type="text"
                  className="searchBox"
                  placeholder="Search by product"
                />
              </li>
              <li className="flex-class">
                <span>
                  <i class="fi fi-rr-user"></i>
                </span>
                <a>Account</a>
              </li>
              <li className="flex-class">
                <span>
                  <i class="fi fi-rs-heart"></i>
                </span>
                <a>Wishlist</a>
              </li>
              <li className="flex-class">
                <span>
                  <i class="fi fi-rr-shopping-cart"></i>
                </span>
                <a>Cart</a>
              </li>
            </ul>
            {/*  */}
          </div>
        </div>
      </header>
      <header className=" main-header onlyMobile">
        <div className="flex-class main-container">
          <div className="logo flex-class">
            <div className="hamburger">
              <i class="fi fi-br-menu-burger"></i>
            </div>

            <img src={LOGO_URL} alt="bewkoof logo" />
          </div>
          <ul className="nav flex-class ">
            <li>
              <i class="fi fi-rr-search"></i>
            </li>
            <li>
              <i class="fi fi-rs-heart"></i>
            </li>
            <li>
              <i class="fi fi-rr-shopping-cart"></i>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
