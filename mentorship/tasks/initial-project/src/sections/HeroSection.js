import React from "react";
import person1 from "../media/lucy.png";
import person2 from "../media/mark.png";
import review1 from "../media/four_start_review.png";
import review2 from "../media/five_star_review.png";
import "../styles/hero-section.css";
import cursorImage from "../media/cursor_image_lucy_opinion.png";
import circleImage from "../media/circle_after_cursor_image.png";
import { welcomeBackgroundImages } from "../data.js";
import "../styles/hero-background-images.css";
import borderBackground from "../media/background_border_lucy.png";

function HeroSection() {
  return (
    <section className="contents-page">
      <div className="welcome">
        <div className="sub-welcome">
          <h4>👋 Welcome to TeamFlow</h4>
        </div>
        <div className="welcome-message">
          <h1>Work the way that works for you!</h1>
        </div>
        <div className="line"></div>
        <div className="text-after-line">
          <h3>Create, Build, Collaborate and ship products faster!</h3>
        </div>
        <div className="get-started-container">
          <button className="get-started">Get Started</button>
        </div>
        {welcomeBackgroundImages.map(({ src, alt, className }) => {
          return (
            <div key={Math.random().toString()}>
              <img src={src} alt={alt} className={className} />
            </div>
          );
        })}
      </div>
      <div className="opinions">
        <div className="lucy">
          <div className="img-lucy">
            <div className="background-lucy">
              <img src={person1} alt="lucy_photo" />
            </div>
          </div>
          <img
            src={borderBackground}
            alt="dashed border background"
            className="lucy-border"
          />
          <div className="name-lucy">
            <p>Lucy</p>
          </div>
          <div className="lucy-opinion">
            <span className="span-lucy-opinion">Lucy Niana</span>
            <div className="done-lucy-opinion">
              <h5>Done</h5>
            </div>
            <p>Develop Communication Plan</p>
            <img src={review1} alt="review" />
          </div>
          <img
            src={cursorImage}
            alt="background_photo"
            className="cursor-image-lucy-opinion"
          />
          <img
            src={circleImage}
            alt="circle"
            className="circle-after-cursor-image"
          />
        </div>
        <div className="mark">
          <div className="img-mark">
            <div className="background-mark">
              <img src={person2} alt="mark" />
            </div>
          </div>
          <div className="name-mark">
            <p>Mark</p>
          </div>
          <div className="mark-opinion">
            <span className="span-mark-opinion">Mark Anderson</span>
            <span className="done-mark-opinion">
              <h5>Pending</h5>
            </span>
            <p>Update Contract Agreement</p>
            <img src={review2} alt="review" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
