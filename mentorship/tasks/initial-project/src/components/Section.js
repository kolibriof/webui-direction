import React from "react";
import person1 from "../media/person3.png";
import person2 from "../media/person2.png";
import review1 from "../media/four_start_review.png";
import review2 from "../media/five_star_review.png";
import "../styles/section.css";

function Section() {
  return (
    <section className="contents-page">
      <div className="welcome">
        <div className="sub-welcome">
          <h4>👋 Welcome to TeamFlow</h4>
        </div>
        <div className="big-h">
          <h1>Work the way that works for you!</h1>
        </div>
        <div className="line"></div>
        <div className="text-after-line">
          <h3>Create, Build, Collaborate and ship products faster!</h3>
        </div>
        <button className="get-started">Get Started</button>
      </div>
      <div className="photos">
        <div className="img1">
          <div className="img-person1">
            <div className="background-person1">
              <img src={person1} alt="person1" />
            </div>
          </div>
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
        </div>
        <div className="img2">
          <div className="img-person2">
            <div className="background-person2">
              <img src={person2} alt="person2" />
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

export default Section;
