import React from "react";
import Greetings from "./Greetings";
import Calendar from "./Calendar";
import Progress from "./Progress";
import Tasks from "./Tasks";
export default function MainPage() {
  return (
    <>
      <div className="main-page">
        <div className="greetings-calendar-container">
          <Greetings />
          <Calendar />
        </div>
      </div>
      <div className="progress-container">
        <Progress />
      </div>
      <Tasks />
    </>
  );
}
