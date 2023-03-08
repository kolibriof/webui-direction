import React from "react";
import "../styles/tasks.css";
import "../styles/list.css";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineTaskAlt } from "react-icons/md";
import CompletedTasksList from "./CompletedTasksList";

function TasksCompletedTasks({
  clearList,
  completedTasks,
  completedTasksfilteredList,
  setCompletedTasksSearchQuery,
  removeCompletedItem,
  completedTasksSearchQuery,
  isClicked,
}) {
  return (
    <>
      <h1>Completed Tasks</h1>
      <div className="tasks-header">
        <div className="tasks-header-container">
          <input
            type="text"
            placeholder="Search by the task name..."
            value={completedTasksSearchQuery}
            onChange={(e) => setCompletedTasksSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="tasks-task-list">
        {completedTasks > 0 && !completedTasksfilteredList ? (
          <>
            <CompletedTasksList completedTasks={completedTasks} />
            <button onClick={clearList} className="task-list-clear-list">
              Clear List
            </button>
          </>
        ) : (
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
                      <span onClick={() => removeCompletedItem(id)}>
                        <AiOutlineDelete />
                      </span>
                    </div>
                  </li>
                );
              })
            ) : (
              <h4 className="no-values-error">No completed tasks found!</h4>
            )}
          </ul>
        )}
      </div>
    </>
  );
}

export default TasksCompletedTasks;
