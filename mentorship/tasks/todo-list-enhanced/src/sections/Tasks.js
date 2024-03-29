import React, { useState, useEffect } from "react";
import ModalWindow from "../components/ModalWindow";
import "../styles/tasks.css";
import "../styles/list.css";
import { useTaskProgressContext } from "../components/ProgressContext";
import NewTasks from "../components/NewTasks";
import CompletedTasksList from "../components/CompletedTasksList";
import ConfirmationModal from "../components/ConfirmationModal";
import { format } from "date-fns";

function Tasks() {
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
  const {
    list,
    setList,
    completedTasks,
    setCompletedTasks,
    isClicked,
    setIsClicked,
    selectedDate,
    setSelectedDate,
    showModal,
    setShowModal,
    showConfirmationModal,
    setShowConfirmationModal,
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

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

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
  const handleItemView = (id) => {
    setViewCompletedTasks(true);
    setShowModal(!showModal);
    setViewID(id);
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
        viewCompletedTasks={viewCompletedTasks}
        completedTasks={completedTasks}
        viewID={viewID}
      />
      <ConfirmationModal
        showConfirmationModal={showConfirmationModal}
        confirmationState={confirmationState}
        removeItem={removeItem}
        handleDoneTasks={handleDoneTasks}
        setShowConfirmationModal={setShowConfirmationModal}
        confirmationMessage={confirmationMessage}
        setConfirmationMessage={setConfirmationMessage}
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
          <NewTasks
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleModalWindow={handleModalWindow}
            list={list}
            editItem={editItem}
            removeItem={removeItem}
            handleDoneTasks={handleDoneTasks}
            filteredList={filteredList}
            setShowModal={setShowModal}
            deleteID={deleteID}
            setDeleteID={setDeleteID}
            doneTask={doneTask}
            setDoneTask={setDoneTask}
            setConfirmationState={setConfirmationState}
            confirmationState={confirmationState}
            showConfirmationModal={showConfirmationModal}
            setShowConfirmationModal={setShowConfirmationModal}
          />
        </section>
      ) : (
        <section className="tasks-container">
          <CompletedTasksList
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleModalWindow={handleModalWindow}
            list={list}
            editItem={editItem}
            removeItem={removeItem}
            handleDoneTasks={handleDoneTasks}
            completedTasksfilteredList={completedTasksfilteredList}
            completedTasks={completedTasks}
            completedTasksSearchQuery={completedTasksSearchQuery}
            setCompletedTasksSearchQuery={setCompletedTasksSearchQuery}
            removeCompletedItem={removeCompletedItem}
            isClicked={isClicked}
            handleItemView={handleItemView}
          />
        </section>
      )}
    </>
  );
}

export default Tasks;
