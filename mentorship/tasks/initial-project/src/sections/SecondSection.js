import React from "react";
import "../styles/secondsection.css";
import apple from "../media/apple.png";
import hulu from "../media/hulu.png";
import samsung from "../media/samsung.png";
import { AiOutlineStock } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiMagnifyingGlass } from "react-icons/gi";

function SecondSection() {
  return (
    <>
      <section className="secondsection" id="solutions">
        <header className="header-secondsection">
          <div className="orange-line"></div>
          <div className="left-text">
            <h3>See why over 100,000 teams choose SoftServe.com</h3>
          </div>
        </header>
        <div className="company-photos">
          <div className="apple">
            <img src={apple} alt="apple" />
          </div>
          <div className="hulu">
            <img src={hulu} alt="apple" />
          </div>
          <div className="samsung">
            <img src={samsung} alt="apple" />
          </div>
        </div>
      </section>
      <div className="whatdo">
        <div className="whatdo-h3">
          <h3>
            What you <span style={{ color: "orange" }}>can do?</span>
          </h3>
        </div>
      </div>
      <div className="solutions">
        <div className="solutions-business">
          <AiOutlineStock
            style={{
              transform: "scale(3)",
              backgroundColor: "aqua",
              borderRadius: "5pt",
              padding: "2pt",
              color: "white",
            }}
          />
          <h4>Business Planing</h4>
          <p>
            Our Business Plan is a written document describing a company's core
            business activities.
          </p>
        </div>
        <div className="solutions-finance">
          <HiOutlineLightBulb
            style={{
              transform: "scale(3)",
              backgroundColor: "rgb(255, 204, 0)",
              borderRadius: "5pt",
              padding: "2pt",
              color: "white",
            }}
          />
          <h4>Financial Planing</h4>
          <p>
            Our Business Plan is a written document describing a company's core
            business activities.
          </p>
        </div>
        <div className="solutions-market">
          <GiMagnifyingGlass
            style={{
              transform: "scale(3)",
              backgroundColor: "purple",
              borderRadius: "5pt",
              padding: "2pt",
              color: "white",
            }}
          />
          <h4>Market Analysis</h4>
          <p>
            Our Business Plan is a written document describing a company's core
            business activities.
          </p>
        </div>
      </div>
    </>
  );
}

export default SecondSection;
