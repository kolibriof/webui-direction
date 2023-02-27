import React from "react";
import "../styles/modal-editing-window.css";

function ModalWindowEdit({
  editItem,
  showEditingModal,
  setShowEditingModal,
  list,
  name,
  setName,
  handleSubmit,
}) {
  return (
    <div
      className={`modal-editing-window-container ${
        showEditingModal ? `show-window` : `hide-window`
      }`}
    >
      <span
        className="modal-window-close-button"
        onClick={() => setShowEditingModal(!showEditingModal)}
      >
        X
      </span>
      <h1>Edit the task...</h1>
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
          <button type="submit">Edit</button>
        </div>
      </form>
    </div>
  );
}

export default ModalWindowEdit;
