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
  viewCompletedTasks,
  completedTasks,
  viewID,
}) {
  const maxLength = 180;
  return (
    <div
      className={`modal-window-container ${
        showModal ? `show-modal` : `hide-modal`
      }`}
    >
      {!viewCompletedTasks ? (
        <>
          <h1>
            {isEditing
              ? "Editing task '" + name + "' ..."
              : "Create a new task..."}
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
                disabled={viewCompletedTasks}
              />
              {!viewCompletedTasks ? (
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
              ) : (
                <button
                  type="button"
                  className="modal-window-buttons"
                  onClick={handleModalWindow}
                >
                  OK
                </button>
              )}

              <p className={`error-message ${error && `show`}`}>
                {errorDate
                  ? "Please enter a valid date that is today or in the future!"
                  : "Please enter a task name!"}
              </p>
            </div>
          </form>
        </>
      ) : (
        <>
          {completedTasks.map((item) => {
            const { id, name, description, deadline, dateCompleted } = item;
            if (viewID === id) {
              return (
                <div key={Math.random().toString()}>
                  <h1>"{name}" overview</h1>
                  <div className="modal-window-form">
                    <span>Task name:</span>
                    <input
                      type="text"
                      value={name}
                      className={`${error && `error`}`}
                      disabled={viewCompletedTasks}
                    />
                    <div className="desctiption-textarea-container">
                      <span>Description: </span>
                      <textarea
                        type="textarea"
                        value={description}
                        className="description-textarea"
                        disabled={viewCompletedTasks}
                      ></textarea>
                    </div>
                  </div>

                  <div className="fields-view-completed-tasks">
                    <span>Deadline: </span>
                    <input
                      type="text"
                      value={deadline}
                      disabled={viewCompletedTasks}
                    />
                    <span>Completed date: </span>
                    <input
                      type="text"
                      value={dateCompleted}
                      disabled={viewCompletedTasks}
                    />
                  </div>

                  <button
                    type="button"
                    className="modal-window-buttons"
                    onClick={handleModalWindow}
                  >
                    OK
                  </button>
                </div>
              );
            }
            return null;
          })}
        </>
      )}
    </div>
  );
}

export default ModalWindow;
