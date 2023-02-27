import React from "react";
import "../styles/list.css";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdOutlineTaskAlt } from "react-icons/md";

function List({
  list,
  editItem,
  removeItem,
  showEditingModal,
  setShowEditingModal,
}) {
  return (
    <ul>
      {list.map((item) => {
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
      })}
    </ul>
  );
}

export default List;
