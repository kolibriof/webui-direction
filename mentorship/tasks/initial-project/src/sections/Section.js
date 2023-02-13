import React from "react";
import { FaHandPeace } from "react-icons/fa";
import person1 from "../media/person3.jpg";
import person2 from "../media/person2.png";
import "../styles/section.css";

function Section() {
  return (
    <section className="contents-page">
      <div className="welcome">
        <div className="sub-welcome">
          <h4>
            <FaHandPeace />
            Welcome to SoftServe!
          </h4>
        </div>
        <div className="big-h">
          <h1>Work the way that works for you!</h1>
        </div>
        <div className="line"></div>
        <div className="text-after-line">
          <h3>Create, Build, Collaborate and ship products faster!</h3>
        </div>
        <button className="get-started">Get Started!</button>
      </div>
      <div className="photos">
        <div className="img1">
          <img src={person1} alt="person-1" />
          <div className="name-lucy">Lucy</div>
          <div className="lucy-opinion">
            <span className="span-lucy-opinion">Lucy Niana</span>
            <span className="done-lucy-opinion">done</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              adipisci. Ea rem ab modi placeat quibusdam!
            </p>
          </div>
        </div>
        <div className="img2">
          <img src={person2} alt="person-2" />
          <div className="name-mark">Mark</div>
          <div className="mark-opinion">
            <span className="span-mark-opinion">Mark Anderson</span>
            <span className="done-mark-opinion">Pending</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              adipisci. Ea rem ab modi placeat quibusdam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
