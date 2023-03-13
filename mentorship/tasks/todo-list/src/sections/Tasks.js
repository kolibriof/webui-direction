import React, { useState, useEffect } from "react";
import ModalWindow from "../components/ModalWindow";
import "../styles/tasks.css";
import "../styles/list.css";
import { useTaskProgressContext } from "../components/ProgressContext";
import TasksNewTasks from "../components/TasksNewTasks";
import TasksCompletedTasks from "../components/TasksCompletedTasks";
import { format } from "date-fns";

function Tasks({ showModal, setShowModal }) {
  const [errorDate, setErrorDate] = useState(false);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [completedTasksSearchQuery, setCompletedTasksSearchQuery] =
    useState("");
  const {
    list,
    setList,
    completedTasks,
    setCompletedTasks,
    isClicked,
    setIsClicked,
    selectedDate,
    setSelectedDate,
    formattedCompletedDate,
  } = useTaskProgressContext();

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
      setEditID(null);
      setShowModal(!showModal);
      setError(false);
      setErrorDate(false);
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
  const clearList = () => {
    setList([]);
  };

  const removeItem = (id) => {
    setList(list.filter((k) => k.id !== id));
  };

  const editItem = (id) => {
    setIsEditing(true);
    setShowModal(!showModal);
    const specItem = list.find((d) => d.id === id);
    setEditID(id);
    setName(specItem.title);
  };
  const removeCompletedItem = (id) => {
    setCompletedTasks(completedTasks.filter((k) => k.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  const handleModalWindow = () => {
    if (isEditing) {
      setIsEditing(!isEditing);
      setShowModal(!showModal);
      setError(false);
    } else if (!isEditing) {
      setShowModal(!showModal);
      setName("");
      setError(false);
    }
  };
  const handleDoneTasks = (id, title, date, description) => {
    const newDoneTask = {
      id: Math.random().toString(),
      name: title,
      dateCompleted: formattedCompletedDate,
      deadline: date,
      description: description,
    };
    setCompletedTasks([...completedTasks, newDoneTask]);
    setList(list.filter((k) => k.id !== id));
    setError(false);
  };

  const filteredList = list.filter((item) => item.title.includes(searchQuery));
  const completedTasksfilteredList = completedTasks.filter((item) =>
    item.name.includes(completedTasksSearchQuery)
  );
  const handleDescription = (e) => {
    const description = e.target.value;
    if (description.length <= 180) {
      setDescription(description);
    }
  };

  return (
    <>
      <ModalWindow
        name={name}
        handleSubmit={handleSubmit}
        setName={setName}
        showModal={showModal}
        setShowModal={setShowModal}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        handleModalWindow={handleModalWindow}
        error={error}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        description={description}
        setDescription={setDescription}
        errorDate={errorDate}
        handleDescription={handleDescription}
      />
      <h2
        className={`completed-tasks-transition-button ${
          isClicked && `clicked`
        }`}
        onClick={() => setIsClicked(!isClicked)}
      >
        {!isClicked ? "Completed Tasks" : "Active Tasks"}
      </h2>
      {!isClicked ? (
        <section className="tasks-container">
          <TasksNewTasks
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleModalWindow={handleModalWindow}
            list={list}
            editItem={editItem}
            removeItem={removeItem}
            handleDoneTasks={handleDoneTasks}
            clearList={clearList}
            filteredList={filteredList}
            setShowModal={setShowModal}
          />
        </section>
      ) : (
        <section className="tasks-container">
          <TasksCompletedTasks
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleModalWindow={handleModalWindow}
            list={list}
            editItem={editItem}
            removeItem={removeItem}
            handleDoneTasks={handleDoneTasks}
            clearList={clearList}
            completedTasksfilteredList={completedTasksfilteredList}
            completedTasks={completedTasks}
            completedTasksSearchQuery={completedTasksSearchQuery}
            setCompletedTasksSearchQuery={setCompletedTasksSearchQuery}
            removeCompletedItem={removeCompletedItem}
            isClicked={isClicked}
          />
        </section>
      )}
    </>
  );
}

export default Tasks;