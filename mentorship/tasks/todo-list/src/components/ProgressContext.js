import React, { createContext, useState, useContext } from "react";

export const TaskProgressContext = createContext();

export const useTaskProgressContext = () => useContext(TaskProgressContext);

const getLocalListStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
const getLocalCompletedTasksStorage = () => {
  let completedTasks = localStorage.getItem("completedTasks");
  if (completedTasks) {
    return JSON.parse(completedTasks);
  } else {
    return [];
  }
};
const ProgressContext = ({ children }) => {
  const [completedTasks, setCompletedTasks] = useState(
    getLocalCompletedTasksStorage()
  );
  const [isClicked, setIsClicked] = useState(false);
  const [list, setList] = useState(getLocalListStorage());
  const [selectedDate, setSelectedDate] = useState(null);
  const formattedCompletedDate = new Date().toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <TaskProgressContext.Provider
      value={{
        completedTasks,
        setCompletedTasks,
        list,
        setList,
        isClicked,
        setIsClicked,
        selectedDate,
        setSelectedDate,
        formattedCompletedDate,
      }}
    >
      {children}
    </TaskProgressContext.Provider>
  );
};

export default ProgressContext;
