import React from "react";
import Greetings from "./Greetings";
import Calendar from "./Calendar";
import Progress from "./Progress";
import Tasks from "./Tasks";
import CalendarContext from "../context/CalendarContext";
import ScoreContext from "../context/ScoreContext";
export default function MainPage() {
  return (
    <>
      <div className="main-page">
        <div className="greetings-calendar-container">
          <Greetings />
          <CalendarContext>
            <Calendar />
          </CalendarContext>
        </div>
      </div>
      <div className="progress-container">
        <ScoreContext>
          <Progress />
        </ScoreContext>
      </div>
      <Tasks />
    </>
  );
}
