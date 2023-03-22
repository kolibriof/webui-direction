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

  const completedThisWeek = completedTasks.filter((task) => {
    const taskDate = new Date(task.deadline);
    return taskDate >= currentWeekStart && taskDate <= currentWeekEnd;
  });
  const completedTasksForToday = completedTasks.filter((task) => {
    const taskDeadline = new Date(task.deadline);
    const taskCompletedDateForToday = new Date(task.dateCompleted);
    return taskDeadline.getTime() === taskCompletedDateForToday.getTime();
  });
  const tasksForThisWeek = list.filter((task) => {
    const taskDate = new Date(task.date);
    return taskDate >= currentWeekStart && taskDate <= currentWeekEnd;
  });
  const tasksForThisDay = list.filter((task) => {
    const taskDate = new Date(task.date);
    const currentDateTasks = new Date();
    currentDateTasks.setHours(0, 0, 0, 0);
    return taskDate.getTime() === currentDateTasks.getTime();
  });
  const dailyTasksOverall =
    tasksForThisDay.length + completedTasksForToday.length;
  const WeeklyTasksOverall = tasksForThisWeek.length + completedThisWeek.length;

  const dailyProgress =
    list.length > 0 &&
    tasksForThisDay.length > 0 &&
    completedTasksForToday.length > 0
      ? Math.round((completedTasksForToday.length / dailyTasksOverall) * 100) +
        "%"
      : completedTasksForToday.length === dailyTasksOverall &&
        tasksForThisDay.length === 0
      ? "All done"
      : "0%";

  const weeklyProgress =
    list.length > 0 &&
    tasksForThisWeek.length > 0 &&
    completedThisWeek.length > 0
      ? Math.round((completedThisWeek.length / WeeklyTasksOverall) * 100) + "%"
      : completedThisWeek.length === WeeklyTasksOverall &&
        tasksForThisWeek.length === 0
      ? "All done"
      : "0%";

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
