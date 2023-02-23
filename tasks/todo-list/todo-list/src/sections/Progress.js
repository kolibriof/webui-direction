import React, { useEffect, useState } from "react";
import "../styles/progress.css";
import { GoGraph } from "react-icons/go";
import { TbStairsUp } from "react-icons/tb";
import { RiCalendarTodoLine } from "react-icons/ri";

function Progress() {
  const [dailyScore, setDailyScore] = useState(0);
  const [weeklyScore, setWeeklyScore] = useState(0);
  const [uncompletedTasks, setUncompletedTasks] = useState([]);

  return (
    <section className="progress-section">
      <div className="weekly-score">
        <div className="first-paragraph">
          <div className="first-line">
            <h4>Weekly score</h4>
          </div>
          <div className="second-line">
            <GoGraph className="progress-icon graph" />
          </div>
        </div>
        <div className={`progress-bar ${dailyScore <= 0 && `zero-score`}`}>
          <strong>{dailyScore <= 0 && "0%"}</strong>
        </div>
      </div>
      <div className="daily-score">
        <div className="first-paragraph">
          <div className="first-line">
            <h4>Daily score</h4>
          </div>
          <div className="second-line">
            <TbStairsUp className="progress-icon stairsup" />
          </div>
        </div>

        <div className={`progress-bar ${dailyScore <= 0 && `zero-score`}`}>
          <strong>{dailyScore <= 0 && "0%"}</strong>
        </div>
      </div>
      <div className="uncompleted-tasks">
        <div className="first-paragraph">
          <div className="first-line">
            <h4>Uncompleted tasks</h4>
          </div>
          <div className="second-line">
            <RiCalendarTodoLine className="progress-icon todocalendar" />
          </div>
        </div>
        <div className={`progress-bar ${dailyScore <= 0 && `zero-score`}`}>
          <strong>{dailyScore <= 0 && "0%"}</strong>
        </div>
      </div>
    </section>
  );
}

export default Progress;
