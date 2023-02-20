import React from "react";

function FooterIcons({ footerIcons }) {
  return (
    <div className="footer-left-column-icons">
      {footerIcons.map(({ href, src, alt }) => {
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
