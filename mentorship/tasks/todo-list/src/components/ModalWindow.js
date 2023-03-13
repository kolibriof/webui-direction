import React from "react";
import "../styles/modal-window.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ModalWindow({
  name,
  handleSubmit,
  setName,
  showModal,
  isEditing,
  handleModalWindow,
  error,
  selectedDate,
  setSelectedDate,
  description,
  errorDate,
  handleDescription,
}) {
  const maxLength = 180;
  return (
    <div
      className={`modal-window-container ${
        showModal ? `show-modal` : `hide-modal`
      }`}
    >
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
          <div className="desctiption-textarea-container">
            <textarea
              type="textarea"
              placeholder="Describe your task briefly.."
              value={description}
              onChange={handleDescription}
              maxLength={maxLength}
              className="description-textarea"
            ></textarea>
            <div
              className={`character-count-modal-window ${
                description.length >= 100 && `modified`
              }`}
            >
              {description.length} / {maxLength}
            </div>
          </div>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="M/dd/yyyy"
            className={`${error && "error"}`}
            placeholderText={"Select deadline for your task.."}
          />
          <div className="modal-window-buttons-container">
            <button
              type="submit"
              className={`modal-window-buttons ${
                !name || !selectedDate ? `disabled` : null
              }`}
              disabled={!name || !selectedDate}
            >
              {isEditing ? "Edit" : "Save"}
            </button>
            <button
              type="button"
              onClick={handleModalWindow}
              className="modal-window-buttons"
            >
              Cancel
            </button>
          </div>

          <p className={`error-message ${error && `show`}`}>
            {errorDate
              ? "Please enter a valid date that is today or in the future!"
              : "Please enter a task name!"}
          </p>
        </div>
      </form>
    </div>
  );
}

export default ModalWindow;
