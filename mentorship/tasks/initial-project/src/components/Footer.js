import React from "react";
import "../styles/footer.css";
import logo from "../media/logo_footer.png";
import { footerLinks, footerIcons } from "../data.js";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="firstColumn">
        <img src={logo} alt="TeamFlow" />
        <p>All Rights Reserved © teamflow.com</p>
        <h4>Address</h4>
        <p>26 W 12th St. New York, NY 10342, NYC</p>
        <h4>Social media</h4>
        <div className="firstColumn-icons">
          {footerIcons.map((icon) => {
            const { src, alt, href } = icon;
            return (
              <a href={href} key={Math.random().toString()}>
                <img src={src} alt={alt} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="footer-links">
        {footerLinks.map((column) => {
          const { title, contents } = column;
          return (
            <ul className="footer-single-column" key={Math.random().toString()}>
              <h4>{title}</h4>
              {contents.map((item) => {
                return (
                  <li key={Math.random().toString()}>
                    <a href="google.com">{item}</a>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
