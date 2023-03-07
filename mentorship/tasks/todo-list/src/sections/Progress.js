import React from "react";
import "../styles/progress.css";
import { GoGraph } from "react-icons/go";
import { TbStairsUp } from "react-icons/tb";
import { RiCalendarTodoLine } from "react-icons/ri";
import { useTaskProgressContext } from "../components/ProgressContext";

function Progress() {
  const { list, completedTasks } = useTaskProgressContext();
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentWeekStart = new Date(
    currentDate.setDate(currentDate.getDate() - currentDay)
  );
  const currentWeekEnd = new Date(
    currentDate.setDate(currentWeekStart.getDate() + 6)
  );
  const completedToday = completedTasks.filter((task) => {
    const taskDate = new Date(task.deadline);
    return (
      taskDate.getDate() === currentDate.getDate() &&
      taskDate.getMonth() === currentDate.getMonth() &&
      taskDate.getFullYear() === currentDate.getFullYear()
    );
  });

  const uncompletedTasks = list.filter((task) => {
    const taskDate = new Date(task.date);
    return taskDate >= currentDate;
  });

  const completedThisWeek = completedTasks.filter((task) => {
    const taskDate = new Date(task.deadline);
    return taskDate >= currentWeekStart && taskDate <= currentWeekEnd;
  });

  const dailyProgress = Math.round(
    (completedToday.length /
      (uncompletedTasks.length + completedToday.length)) *
      100
  );
  const weeklyProgress = Math.round(
    (completedThisWeek.length /
      (uncompletedTasks.length + completedThisWeek.length)) *
      100
  );
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
          <strong>{weeklyProgress}%</strong>
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
