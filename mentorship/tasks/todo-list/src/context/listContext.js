import React, { createContext, useState, useContext } from "react";
import { TaskModel } from "../models/TaskModel";

export const TaskProgressContext = createContext();

export const ListContextProvider = ({ children }) => {
  const [list, setList] = useState(getLocalListStorage());

  const addNewTask = (title, description, effectiveDate) => {
    const listItem = new TaskModel(title, description, effectiveDate);
    setList((prev) => [...prev, listItem]);
  };

  const updateTask = ({id, title, description, effectiveDate}) => {
    setList((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title: title || task.title,
            description: description || task.description,
            effectiveDate: effectiveDate || task.effectiveDate,
          };
        }
        return task;
      });
    });
  };

  const deleteTask = (id) => setList((prev) => prev.filter((task) => task.id !== id))

  const filterByName = (title) => setList((prev) => prev.filter((task) => task.title !== title))

  return (
    <TaskProgressContext.Provider
      value={{
        list,
        addNewTask,
        updateTask,
        deleteTask,
        filterByName
      }}
    >
      {children}
    </TaskProgressContext.Provider>
  );
};

export const useTaskProgressContext = () => useContext(TaskProgressContext);
