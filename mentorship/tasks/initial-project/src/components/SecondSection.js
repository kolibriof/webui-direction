import React from "react";
import "../styles/secondsection.css";
import photos from "../data";
import magnifier from "../media/icons/magnifier.png";
import idea from "../media/icons/idea.png";
import graph from "../media/icons/graph.png";

function SecondSection() {
  return (
    <>
      <section className="secondsection" id="solutions">
        <header className="header-secondsection">
          <div className="orange-line"></div>
          <div className="left-text">
            <h3>See why over 100,000 teams choose TeamFlow.com</h3>
          </div>
        </header>
        <div className="company-photos">
          {photos.map((photo) => {
            const { src, alt } = photo;
            return (
              <div className="samsung" key={Math.random().toString()}>
                <img src={src} alt={alt} />
              </div>
            );
          })}
        </div>
      </section>
      <div className="whatdo">
        <div className="whatdo-container">
          <h3>
            What you <span>can do?</span>
          </h3>
        </div>
      </div>
      <div className="solutions">
        <div className="solutions-business">
          <div className="graph-icon-container">
            <img src={graph} alt="graph" className="graph-icon" />
          </div>
          <h4>Business Planing</h4>
          <p>
            Our Business Plan is a written document describing a company’s core
            business activities.
          </p>
        </div>
        <div className="solutions-finance">
          <div className="idea-icon-container">
            <img src={idea} alt="idea" className="idea-icon" />
          </div>
          <h4>Financial Planing</h4>
          <p>
            Our expert team sensible decision about their money, to ensure they
            achieve the life goals. A financial plan.
          </p>
        </div>
        <div className="solutions-market">
          <div className="magnifier-icon-container">
            <img src={magnifier} alt="magnifier" className="magnifier-icon" />
          </div>

          <h4>Market Analysis</h4>
          <p>
            A market analysis is a quantitative and qualitative assessment of a
            market. It looks into the size of the market.
          </p>
        </div>
      </div>
    </>
  );
}

export default SecondSection;
