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
  const handleItemButtons = (id, { type }, title, description, date) => {
    if (type === "edit") {
      editItem(id);
    } else if (type === "delete") {
      setShowConfirmationModal(true);
      setConfirmationState(1);
      setDeleteID(id);
    } else if (type === "done") {
      setShowConfirmationModal(true);
      setConfirmationState(null);
      setDoneTask({
        id: id,
        name: title,
        dateCompleted: formattedCompletedDate,
        deadline: date,
        description: description,
      });
    }
  };
  return (
    <ul>
      {list.map(({ id, title, date, description }) => {
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
              <span
                onClick={() =>
                  handleItemButtons(
                    id,
                    { type: "edit" },
                    title,
                    date,
                    description
                  )
                }
              >
                <AiOutlineEdit />
              </span>
              <span
                onClick={() =>
                  handleItemButtons(
                    id,
                    { type: "delete" },
                    title,
                    date,
                    description
                  )
                }
              >
                <AiOutlineDelete />
              </span>
              <span
                onClick={() =>
                  handleItemButtons(
                    id,
                    { type: "done" },
                    title,
                    date,
                    description
                  )
                }
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
