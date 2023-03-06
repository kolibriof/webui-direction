import React from "react";
import "../styles/list.css";
import { MdOutlineTaskAlt } from "react-icons/md";

function CompletedTasksList({ completedTasks }) {
  return (
    <ul>
      {completedTasks.map((item) => {
        const { id, name } = item;

        return (
          <li key={id}>
            <MdOutlineTaskAlt className="single-task-icon" />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default CompletedTasksList;
