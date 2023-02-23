import React from "react";

function List({ list, editItem, removeItem }) {
  return (
    <ul>
      {list.map((item) => {
        const { id, title } = item;
        return (
          <li key={id}>
            <p>{title}</p>
            <button onClick={() => editItem(id)}>Edit</button>
            <button onClick={() => removeItem(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
