import React, { useState, useEffect } from "react";
import List from "../components/List";
import ModalWindow from "../components/ModalWindow";
import "../styles/tasks.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import "../styles/list.css";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function Tasks({ showModal, setShowModal }) {
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
      setShowModal(!showModal);
    } else {
      const newTask = { id: Math.random().toString(), title: name };
      setList([...list, newTask]);
      setName("");
      setShowModal(!showModal);
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

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <ModalWindow
        name={name}
        handleSubmit={handleSubmit}
        setName={setName}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <section className="tasks-container">
        <h1>Tasks</h1>
        <div className="tasks-header">
          <div className="tasks-header-container">
            <input type="text" placeholder="Please enter a task name..." />
          </div>
          <div className="tasks-add-new-task">
            <IoMdAddCircleOutline onClick={() => setShowModal(!showModal)} />
          </div>
        </div>
        {list.length > 0 && (
          <div className="tasks-task-list">
            <List list={list} editItem={editItem} removeItem={removeItem} />
            <button onClick={clearList} className="task-list-clear-list">
              Clear List
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default Tasks;
