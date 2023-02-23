import React, { useState, useEffect } from "react";
import List from "../components/List";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function Tasks() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Enter a value!");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setIsEditing(false);
      setName("");
      setEditID(null);
    } else {
      const newTask = { id: Math.random().toString(), title: name };
      setList([...list, newTask]);
      setName("");
    }
  };

  const clearList = () => {
    setList([]);
  };

  const removeItem = (id) => {
    setList(list.filter((k) => k.id !== id));
  };

  const editItem = (id) => {
    const specItem = list.find((d) => d.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specItem.title);
  };
  const completeItem = (id) => {
    const Item = list.find((d) => d.id === id);
    setEditID(id);
    setName(Item.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Your new task..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit">{isEditing ? "Edit" : "Submit"}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div>
          <List list={list} editItem={editItem} removeItem={removeItem} />
          <button onClick={clearList}>Clear List</button>
        </div>
      )}
    </section>
  );
}

export default Tasks;
