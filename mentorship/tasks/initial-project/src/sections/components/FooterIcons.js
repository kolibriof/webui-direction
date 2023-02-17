import React from "react";
import { footerIcons } from "../../data.js";

function FooterIcons() {
  return (
    <div className="first-column-icons">
      {footerIcons.map((icon) => {
        const { src, alt, href } = icon;
        return (
          <a href={href} key={Math.random().toString()}>
            <img src={src} alt={alt} />
          </a>
        );
      })}
    </div>
  );
}

export default FooterIcons;
