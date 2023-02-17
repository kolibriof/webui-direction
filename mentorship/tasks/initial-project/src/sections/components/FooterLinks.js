import React from "react";
import { footerLinks } from "../../data.js";

function FooterLinks() {
  return (
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
  );
}

export default FooterLinks;
