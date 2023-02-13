import React from "react";
import "../styles/footer.css";
import logo from "../media/logo.png";
import { BsFacebook, BsTwitter, BsTelegram } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="firstColumn">
        <img src={logo} alt="softserve" />
        <p>All Rights Reserved @ softserve.com</p>
        <h4>Address</h4>
        <p>26 W 12th St. New York, Ny 12121, NYC</p>
        <h4>Social media</h4>
        <div className="firstColumn-icons">
          <BsFacebook />
          <AiFillInstagram />
          <BsTwitter />
          <BsTelegram />
        </div>
      </div>
      <div className="secondColumn">
        <ul>
          <h4>Product</h4>
          <li>Pricing</li>
          <li>Enterprise</li>
          <li>Partners</li>
          <li>Affiliate</li>
          <li>Antegrations</li>
          <li>Developers</li>
        </ul>
      </div>
      <div className="thirdColumn">
        <ul>
          <h4>Team</h4>
          <li>Pricing</li>
          <li>Enterprise</li>
          <li>Partners</li>
          <li>Affiliate</li>
          <li>Antegrations</li>
          <li>Developers</li>
        </ul>
      </div>
      <div className="fourthColumn">
        <ul>
          <h4>Solutions</h4>
          <li>Pricing</li>
          <li>Enterprise</li>
          <li>Partners</li>
          <li>Affiliate</li>
          <li>Antegrations</li>
          <li>Developers</li>
        </ul>
      </div>
      <div className="fifthColumn">
        <ul>
          <h4>Resources</h4>
          <li>Pricing</li>
          <li>Enterprise</li>
          <li>Partners</li>
          <li>Affiliate</li>
          <li>Antegrations</li>
          <li>Developers</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
