import React from "react";
import "../styles/tasks.css";
import "../styles/list.css";
import { MdOutlineTaskAlt } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import { useListContext } from "../context/ListContext";
import { useTaskProgressContext } from "../context/ProgressContext";

function CompletedTasksList({ completedTasksfilteredList, handleItemView }) {
  const { setCompletedTasksSearchQuery, completedTasksSearchQuery } =
    useListContext();
  const { isClicked } = useTaskProgressContext();
  const handleTaskSearchQuery = (e) => {
    setCompletedTasksSearchQuery(e.target.value);
  };
  return (
    <>
      <h1>Completed Tasks</h1>
      <div className="tasks-header">
        <div className="tasks-header-container">
          <input
            type="text"
            placeholder="Search by the task name..."
            value={completedTasksSearchQuery}
            onChange={handleTaskSearchQuery}
          />
        </div>
      </div>
      <div className="tasks-task-list">
        {
          <ul>
            {completedTasksfilteredList.length > 0 ? (
              completedTasksfilteredList.map((item) => {
                const { id, name, dateCompleted } = item;
                return (
                  <li key={id} className={`${isClicked && `completed`}`}>
                    <MdOutlineTaskAlt className="single-task-icon" />
                    <p className="single-task-title">{name}</p>
                    <p
                      className={`single-task-date ${
                        isClicked && "completed-date"
                      }`}
                    >
                      {dateCompleted}
                    </p>
                    <div className="list-span">
                      <span onClick={() => handleItemView(id)}>
                        <GrFormView />
                      </span>
                    </div>
                  </li>
                );
              })
            ) : (
              <h4 className="no-values-error">No completed tasks found!</h4>
            )}
          </ul>
        }
      </div>
    </>
  );
}

export default CompletedTasksList;
