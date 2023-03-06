import React from "react";
import List from "./List";
import "../styles/tasks.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import "../styles/list.css";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdOutlineTaskAlt } from "react-icons/md";

function TasksNewTasks({
  searchQuery,
  setSearchQuery,
  handleModalWindow,
  list,
  editItem,
  removeItem,
  handleDoneTasks,
  clearList,
  filteredList,
}) {
  return (
    <>
      <h1>Tasks</h1>
      <div className="tasks-header">
        <div className="tasks-header-container">
          <input
            type="text"
            placeholder="Search by the task name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
            />
            <button onClick={clearList} className="task-list-clear-list">
              Clear List
            </button>
          </>
        ) : (
          <ul>
            {filteredList.length > 0 ? (
              filteredList.map((item) => {
                const { id, title } = item;
                return (
                  <li key={id}>
                    <MdOutlineTaskAlt className="single-task-icon" />
                    <p>{title}</p>
                    <div className="list-span">
                      <span onClick={() => editItem(id)}>
                        <AiOutlineEdit />
                      </span>
                      <span onClick={() => removeItem(id)}>
                        <AiOutlineDelete />
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

export default TasksNewTasks;
