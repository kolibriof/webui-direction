import React, { createContext, useState, useContext } from "react";

export const TaskProgressContext = createContext();

export const useTaskProgressContext = () => useContext(TaskProgressContext);

const getLocalStorage = (key) => {
  let item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  } else {
    return [];
  }
};
const ProgressContext = ({ children }) => {
  const today = new Date().setHours(0, 0, 0, 0);
  const [completedTasks, setCompletedTasks] = useState(
    getLocalStorage("completedTasks")
  );
  const [isClicked, setIsClicked] = useState(false);
  const [list, setList] = useState(getLocalStorage("list"));
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
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
        showModal,
        setShowModal,
        showConfirmationModal,
        setShowConfirmationModal,
        today,
      }}
    >
      {children}
    </TaskProgressContext.Provider>
  );
};

export default ProgressContext;
