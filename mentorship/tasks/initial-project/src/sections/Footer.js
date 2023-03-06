import React from "react";
import "../styles/footer.css";
import logo from "../media/logo_footer.png";
import { footerIcons } from "../data.js";
import { footerLinks } from "../data.js";
import FooterIcons from "../components/FooterIcons";
import FooterLinks from "../components/FooterLinks";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="first-column">
        <img src={logo} alt="TeamFlow" />
        <p>All Rights Reserved © teamflow.com</p>
        <h4>Address</h4>
        <p>26 W 12th St. New York, NY 10342, NYC</p>
        <h4>Social media</h4>
        <FooterIcons footerIcons={footerIcons} />
      </div>
      <FooterLinks footerLinks={footerLinks} />
    </footer>
  );
}

export default Footer;
