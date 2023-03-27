import React from "react";
import List from "./List";
import "../styles/tasks.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import "../styles/list.css";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdOutlineTaskAlt, MdDownloadDone } from "react-icons/md";
import { useTaskProgressContext } from "../context/ProgressContext";

function NewTasks({
  searchQuery,
  setSearchQuery,
  handleModalWindow,
  list,
  editItem,
  removeItem,
  handleDoneTasks,
  filteredList,
  doneTask,
  setDoneTask,
  deleteID,
  setDeleteID,
  showConfirmationModal,
  setShowConfirmationModal,
  confirmationState,
  setConfirmationState,
}) {
  const { formattedDate, formattedCompletedDate } = useTaskProgressContext();
  const Search = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <h1>Tasks</h1>
      <div className="tasks-header">
        <div className="tasks-header-container">
          <input
            type="text"
            placeholder="Search by the task name..."
            value={searchQuery}
            onChange={Search}
          />
        </div>
        <div className="tasks-add-new-task">
          <IoMdAddCircleOutline onClick={handleModalWindow} />
        </div>
      </div>
      <div className="tasks-task-list">
        {list.length > 0 && !searchQuery ? (
          <>
            <List
              list={list}
              editItem={editItem}
              removeItem={removeItem}
              handleDoneTasks={handleDoneTasks}
              deleteID={deleteID}
              setDeleteID={setDeleteID}
              doneTask={doneTask}
              setDoneTask={setDoneTask}
              setConfirmationState={setConfirmationState}
              confirmationState={confirmationState}
              showConfirmationModal={showConfirmationModal}
              setShowConfirmationModal={setShowConfirmationModal}
            />
          </>
        ) : (
          <ul>
            {filteredList.length > 0 ? (
              filteredList.map((item) => {
                const { id, title, date, description } = item;
                return (
                  <li key={id}>
                    <MdOutlineTaskAlt className="single-task-icon" />
                    <p className="single-task-title">{title}</p>
                    <p
                      className={`single-task-date ${
                        new Date(formattedDate) > new Date(date) &&
                        `out-of-deadline`
                      }`}
                    >
                      {date}
                    </p>
                    <div className="list-span">
                      <span onClick={() => editItem(id)}>
                        <AiOutlineEdit />
                      </span>
                      <span
                        onClick={() => {
                          setShowConfirmationModal(true);
                          setConfirmationState(1);
                          setDeleteID(id);
                        }}
                      >
                        <AiOutlineDelete />
                      </span>
                      <span
                        onClick={() => {
                          setShowConfirmationModal(true);
                          setConfirmationState(null);
                          setDoneTask({
                            id: id,
                            name: title,
                            dateCompleted: formattedCompletedDate,
                            deadline: date,
                            description: description,
                          });
                        }}
                      >
                        <MdDownloadDone />
                      </span>
                    </div>
                  </li>
                );
              })
            ) : (
              <h4 className="no-values-error">No tasks found!</h4>
            )}
          </ul>
        )}
      </div>
    </>
  );
}

export default NewTasks;
