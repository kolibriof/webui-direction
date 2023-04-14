import React from "react";
import "../styles/progress.css";
import { GoGraph } from "react-icons/go";
import { TbStairsUp } from "react-icons/tb";
import { RiCalendarTodoLine } from "react-icons/ri";
import { useTaskProgressContext } from "../context/ProgressContext";
import { useScoreContext } from "../context/ScoreContext";

function Progress() {
  const { list } = useTaskProgressContext();
  const { weeklyProgress, dailyProgress } = useScoreContext();

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
        <div className="progress-bar zero-score">
          <strong>{weeklyProgress}</strong>
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

        <div className="progress-bar zero-score">
          <strong>{dailyProgress}</strong>
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
        <div className="progress-bar zero-score">
          <strong>
            {list.length} {list.length === 1 ? "task" : "tasks"}
          </strong>
        </div>
      </div>
    </section>
  );
}

export default Progress;
