import React from "react";
import "../styles/modal-window.css";

function ModalWindow({ name, handleSubmit, setName, showModal, setShowModal }) {
  return (
    <div
      className={`modal-window-container ${
        showModal ? `show-modal` : `hide-modal`
      }`}
    >
      <span
        className="modal-window-close-button"
        onClick={() => setShowModal(!showModal)}
      >
        X
      </span>
      <h1>Create a new task...</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter your task..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ModalWindow;
