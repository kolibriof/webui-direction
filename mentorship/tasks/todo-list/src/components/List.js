import React from "react";
import "../styles/list.css";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdOutlineTaskAlt, MdDownloadDone } from "react-icons/md";
import { useTaskProgressContext } from "./ProgressContext";
function List({ list, editItem, removeItem, handleDoneTasks }) {
  const { formattedDate } = useTaskProgressContext();
  return (
    <ul>
      {list.map((item) => {
        const { id, title, date, description } = item;
        return (
          <li key={id}>
            <MdOutlineTaskAlt className="single-task-icon" />
            <p className="single-task-title">{title}</p>
            <p
              className={`single-task-date ${
                new Date(formattedDate) > new Date(date) && `out-of-deadline`
              }`}
            >
              {date}
            </p>
            <div className="list-span">
              <span onClick={() => editItem(id)}>
                <AiOutlineEdit />
              </span>
              <span onClick={() => removeItem(id)}>
                <AiOutlineDelete />
              </span>
              <span
                onClick={() => {
                  handleDoneTasks(id, title, date, description);
                }}
              >
                <MdDownloadDone />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
