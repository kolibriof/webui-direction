import React, { useState, useEffect } from "react";
import List from "../components/List";
import ModalWindow from "../components/ModalWindow";
import "../styles/tasks.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import "../styles/list.css";

const getLocalListStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function Tasks({ showModal, setShowModal }) {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalListStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError(true);
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
      setError(false);
    } else {
      const newTask = { id: Math.random().toString(), title: name };
      setList([...list, newTask]);
      setName("");
      setShowModal(!showModal);
      setError(false);
    }
  };

  const clearList = () => {
    setList([]);
  };

  const removeItem = (id) => {
    setList(list.filter((k) => k.id !== id));
  };

  const editItem = (id) => {
    setIsEditing(true);
    setShowModal(!showModal);
    const specItem = list.find((d) => d.id === id);
    setEditID(id);
    setName(specItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleModalWindow = () => {
    if (isEditing) {
      setIsEditing(!isEditing);
      setShowModal(!showModal);
      setError(false);
    } else if (!isEditing) {
      setShowModal(!showModal);
      setName("");
      setError(false);
    }
  };
  const filteredList = list.filter((item) => item.title.includes(searchQuery));

  return (
    <>
      <ModalWindow
        name={name}
        handleSubmit={handleSubmit}
        setName={setName}
        showModal={showModal}
        setShowModal={setShowModal}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        handleModalWindow={handleModalWindow}
        error={error}
      />
      <section className="tasks-container">
        <h1>Tasks</h1>
        <div className="tasks-header">
          <div className="tasks-header-container">
            <input
              type="text"
              placeholder="Please enter a task name..."
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
              <List list={list} editItem={editItem} removeItem={removeItem} />
              <button onClick={clearList} className="task-list-clear-list">
                Clear List
              </button>
            </>
          ) : (
            <ul>
              {filteredList.length > 0 ? (
                filteredList.map((item) => {
                  const { id, title } = item;
                  return <li key={id}>{title}</li>;
                })
              ) : (
                <h4 className="no-values-error">No tasks found!</h4>
              )}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

export default Tasks;
