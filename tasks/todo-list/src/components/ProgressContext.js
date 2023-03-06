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
function ProgressContext({ children }) {
  const [completedTasks, setCompletedTasks] = useState(
    getLocalCompletedTasksStorage()
  );
  const [isClicked, setIsClicked] = useState(false);
  const [list, setList] = useState(getLocalListStorage());
  return (
    <TaskProgressContext.Provider
      value={{
        completedTasks,
        setCompletedTasks,
        list,
        setList,
        isClicked,
        setIsClicked,
      }}
    >
      {children}
    </TaskProgressContext.Provider>
  );
}

export default ProgressContext;
