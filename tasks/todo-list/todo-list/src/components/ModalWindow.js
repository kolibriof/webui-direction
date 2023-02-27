import React from "react";
import "../styles/modal-window.css";

function ModalWindow({
  name,
  handleSubmit,
  setName,
  showModal,
  isEditing,
  handleModalWindow,
  error,
}) {
  return (
    <div
      className={`modal-window-container ${
        showModal ? `show-modal` : `hide-modal`
      }`}
    >
      <span className="modal-window-close-button" onClick={handleModalWindow}>
        X
      </span>
      <h1>
        {isEditing ? "Editing task '" + name + "' ..." : "Create a new task..."}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="modal-window-form">
          <input
            type="text"
            placeholder="Enter your task..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={`${error && `error`}`}
          />
          <button type="submit">{isEditing ? "Edit" : "Submit"}</button>
          <p className={`error-message ${error && `show`}`}>
            Please enter a value!
          </p>
        </div>
      </form>
    </div>
  );
}

export default ModalWindow;
