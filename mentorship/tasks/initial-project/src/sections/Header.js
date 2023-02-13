import React from "react";
import { MdExpandMore, MdOutlineExpandLess } from "react-icons/md";
import logo from "../media/logo.png";
import { useState, useEffect } from "react";
import "../styles/header.css";

function Header() {
  const pageOffset = 100;
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > pageOffset) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="header-main">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="header">
        <ul>
          <li>
            <MdExpandMore className="arrow" />
            <a
              href="#footer"
              style={{ textDecoration: "none", color: "black" }}
            >
              Product
            </a>
          </li>
          <li>
            <MdExpandMore className="arrow" />
            <a
              href="#solutions"
              style={{ textDecoration: "none", color: "black" }}
            >
              Solution
            </a>
          </li>
          <li>Enterprize </li>
          <li>Pricing </li>
        </ul>
      </div>
      <div className="form">
        <button className="login">Login</button>
        <button className="signup">Sign up</button>
      </div>
      {showButton && (
        <button
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: "lightgray",
            border: "none",
            borderRadius: "5pt",
          }}
          onClick={handleClick}
        >
          <MdOutlineExpandLess
            style={{ transform: "scale(4)", padding: "10pt" }}
          />
        </button>
      )}
    </header>
  );
}

export default Header;
