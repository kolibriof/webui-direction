import React, { useContext, createContext, useState } from "react";
import { useTaskProgressContext } from "./ProgressContext";
import { format } from "date-fns";

export const ListContextView = createContext();

export const useListContext = () => useContext(ListContextView);

const ListContext = ({ children }) => {
  const {
    list,
    setList,
    completedTasks,
    setCompletedTasks,
    selectedDate,
    setSelectedDate,
    showModal,
    setShowModal,
    showConfirmationModal,
    setShowConfirmationModal,
  } = useTaskProgressContext();
  const [deleteID, setDeleteID] = useState(null);
  const [doneTask, setDoneTask] = useState({});
  const [confirmationState, setConfirmationState] = useState(0);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [viewCompletedTasks, setViewCompletedTasks] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [viewID, setViewID] = useState(null);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [completedTasksSearchQuery, setCompletedTasksSearchQuery] =
    useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDate.getTime() < new Date().setHours(0, 0, 0, 0)) {
      setErrorDate(true);
      setError(true);
    } else if (!name || !selectedDate) {
      setErrorDate(false);
      setError(true);
    } else if (name && selectedDate && isEditing) {
      const formattedDate = format(selectedDate, "M/dd/yyyy");
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return {
              ...item,
              title: name,
              date: formattedDate,
              description: description,
            };
          }
          return item;
        })
      );
      setIsEditing(false);
      setName("");
      setDescription("");
      setEditID(null);
      setShowModal(!showModal);
      setError(false);
      setErrorDate(false);
      setViewCompletedTasks(false);
    } else {
      const formattedDate = format(selectedDate, "M/dd/yyyy");
      const newTask = {
        id: Math.random().toString(),
        title: name,
        date: formattedDate,
        description: description,
      };
      setList([...list, newTask]);
      setName("");
      setShowModal(!showModal);
      setError(false);
      setErrorDate(false);
    }
  };
  const removeItem = () => {
    setList(list.filter((k) => k.id !== deleteID));
    setShowConfirmationModal(!showConfirmationModal);
    setConfirmationMessage("");
  };

  const editItem = (id) => {
    setIsEditing(true);
    setShowModal(!showModal);
    const specItem = list.find((d) => d.id === id);
    const specItemDate = new Date(specItem.date);
    setEditID(id);
    setName(specItem.title);
    setDescription(specItem.description);
    setSelectedDate(specItemDate);
  };
  const removeCompletedItem = (id) => {
    setCompletedTasks(completedTasks.filter((k) => k.id !== id));
  };
  const handleModalWindow = () => {
    if (isEditing) {
      setShowModal(!showModal);
      setError(false);
      setTimeout(() => setIsEditing(!isEditing), 200);
    }
    setShowModal(!showModal);
    setTimeout(() => {
      setName("");
      setDescription("");
      setSelectedDate("");
    }, 200);
    setError(false);
    setTimeout(() => setViewCompletedTasks(false), 200);
  };
  const handleDoneTasks = () => {
    const { id } = doneTask;
    setCompletedTasks([...completedTasks, doneTask]);
    setList(list.filter((k) => k.id !== id));
    setError(false);
    setDoneTask({});
    setShowConfirmationModal(!showConfirmationModal);
    setConfirmationMessage("");
  };
  return (
    <ListContextView.Provider
      value={{
        searchQuery,
        name,
        completedTasksSearchQuery,
        setDescription,
        setViewCompletedTasks,
        setViewID,
        handleSubmit,
        setName,
        isEditing,
        setIsEditing,
        handleModalWindow,
        error,
        description,
        errorDate,
        viewCompletedTasks,
        viewID,
        confirmationState,
        removeItem,
        handleDoneTasks,
        confirmationMessage,
        setConfirmationMessage,
        setSearchQuery,
        editItem,
        deleteID,
        setDeleteID,
        doneTask,
        setDoneTask,
        setConfirmationState,
        setCompletedTasksSearchQuery,
        removeCompletedItem,
      }}
    >
      {children}
    </ListContextView.Provider>
  );
};
export default ListContext;
