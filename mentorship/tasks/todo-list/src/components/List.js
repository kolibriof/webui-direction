import React from "react";
import "../styles/list.css";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdOutlineTaskAlt, MdDownloadDone } from "react-icons/md";
import { useTaskProgressContext } from "./ProgressContext";
function List({
  list,
  editItem,
  setDoneTask,
  setDeleteID,
  setShowConfirmationModal,
  setConfirmationState,
}) {
  const { formattedDate, formattedCompletedDate } = useTaskProgressContext();
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
      })}
    </ul>
  );
}

export default List;
