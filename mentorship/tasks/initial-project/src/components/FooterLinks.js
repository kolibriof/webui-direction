import React from "react";

function FooterLinks({ footerLinks }) {
  return (
    <div className="footer-links">
      {footerLinks.map(({ title, contents }) => {
        return (
          <ul className="footer-single-column" key={Math.random().toString()}>
            <h4>{title}</h4>
            {contents.map((link) => {
              const { href, label } = link;
              return (
                <li key={Math.random().toString()}>
                  <a href={href}>{label}</a>
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
