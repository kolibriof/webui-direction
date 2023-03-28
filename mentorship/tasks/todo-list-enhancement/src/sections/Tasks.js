import React from "react";
import ModalWindow from "../components/ModalWindow";
import "../styles/tasks.css";
import "../styles/list.css";
import { useTaskProgressContext } from "../context/ProgressContext";
import NewTasks from "../components/NewTasks";
import CompletedTasksList from "../components/CompletedTasksList";
import ConfirmationModal from "../components/ConfirmationModal";
import { useListContext } from "../context/ListContext";

function Tasks() {
  const {
    list,
    completedTasks,
    isClicked,
    setIsClicked,
    showModal,
    setShowModal,
  } = useTaskProgressContext();
  const {
    searchQuery,
    completedTasksSearchQuery,
    setDescription,
    setViewCompletedTasks,
    setViewID,
  } = useListContext();
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
      <ModalWindow handleDescription={handleDescription} />
      <ConfirmationModal />
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
          <NewTasks filteredList={filteredList} />
        </section>
      ) : (
        <section className="tasks-container">
          <CompletedTasksList
            completedTasksfilteredList={completedTasksfilteredList}
            handleItemView={handleItemView}
          />
        </section>
      )}
    </>
  );
}

export default Tasks;
