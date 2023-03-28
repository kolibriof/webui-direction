import React from "react";
import "../styles/list.css";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdOutlineTaskAlt, MdDownloadDone } from "react-icons/md";
import { useTaskProgressContext } from "../context/ProgressContext";
import { useListContext } from "../context/ListContext";
function List() {
  const { editItem, setDoneTask, setDeleteID, setConfirmationState } =
    useListContext();
  const { list, formattedCompletedDate, setShowConfirmationModal, today } =
    useTaskProgressContext();
  const handleItemButtons = (id, { type }, title, date, description) => {
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
        const deadlineDate = new Date(date).setHours(0, 0, 0, 0);
        const isOutOfDeadline = deadlineDate < today;
        return (
          <li key={id}>
            <MdOutlineTaskAlt className="single-task-icon" />
            <p className="single-task-title">{title}</p>
            <p
              className={`single-task-date ${
                isOutOfDeadline && `out-of-deadline`
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
