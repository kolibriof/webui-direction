import React, { createContext, useContext, useMemo } from "react";
import { useTaskProgressContext } from "./ProgressContext";

export const ScoreContextView = createContext();

export const useScoreContext = () => useContext(ScoreContextView);

const ScoreContext = ({ children }) => {
  const { list, completedTasks } = useTaskProgressContext();
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentWeekStart = new Date(
    currentDate.setDate(currentDate.getDate() - currentDay)
  );
  const currentWeekEnd = new Date(
    currentDate.setDate(currentWeekStart.getDate() + 6)
  );

  const completedThisWeek = completedTasks.filter(
    ({ deadline }) =>
      new Date(deadline) >= currentWeekStart &&
      new Date(deadline) <= currentWeekEnd
  );
  const completedTasksForToday = completedTasks.filter(
    ({ deadline, dateCompleted }) =>
      new Date(deadline).getTime() === new Date(dateCompleted).getTime()
  );
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
  const dailyTasksOverall = useMemo(
    () => tasksForThisDay.length + completedTasksForToday.length,
    [tasksForThisDay, completedTasksForToday]
  );
  const weeklyTasksOverall = tasksForThisWeek.length + completedThisWeek.length;

  const { length: completedToday } = completedTasksForToday;
  const { length: tasksToday } = tasksForThisDay;
  const { length: completedThisWeekCount } = completedThisWeek;
  const { length: tasksThisWeek } = tasksForThisWeek;

  const dailyProgress = useMemo(() => {
    if (completedToday === dailyTasksOverall && tasksToday === 0) {
      return "All done";
    }
    return dailyTasksOverall > 0
      ? Math.round((completedToday / dailyTasksOverall) * 100) + "%"
      : "0%";
  }, [completedToday, dailyTasksOverall, tasksToday]);

  const weeklyProgress = useMemo(() => {
    if (completedThisWeekCount === weeklyTasksOverall && tasksThisWeek === 0) {
      return "All done";
    }
    return weeklyTasksOverall > 0
      ? Math.round((completedThisWeekCount / weeklyTasksOverall) * 100) + "%"
      : "0%";
  }, [completedThisWeekCount, tasksThisWeek, weeklyTasksOverall]);
  return (
    <ScoreContextView.Provider
      value={{ dailyProgress, weeklyProgress, currentWeekStart }}
    >
      {children}
    </ScoreContextView.Provider>
  );
};

export default ScoreContext;
