import React from "react";
import { MdExpandMore } from "react-icons/md";
import logo from "../media/logo.png";
import "../styles/header.css";

function Header() {
  return (
    <header className="header-main">
      <div className="image">
        <img src={logo} alt="logo" />
      </div>
      <div className="header">
        <ul>
          <li className="header-product">
            Product
            <MdExpandMore className="arrow" />
          </li>
          <li className="header-solution">
            Solution
            <MdExpandMore className="arrow" />
          </li>
          <li className="header-enterprise">Enterprise </li>
          <li className="header-pricing">Pricing </li>
        </ul>
      </div>
      <div className="form">
        <a href="https://www.youtube.com/" className="login">
          Login
        </a>
        <a href="https://www.youtube.com/" className="signup">
          Sign up
        </a>
      </div>
    </header>
  );
}

export default Header;
