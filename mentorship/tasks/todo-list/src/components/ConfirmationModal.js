import React from "react";
import "../styles/modal-window.css";

function ConfirmationModal({
  showConfirmationModal,
  confirmationState,
  removeItem,
  handleDoneTasks,
  setShowConfirmationModal,
  confirmationMessage,
  setConfirmationMessage,
}) {
  return (
    <div
      className={`modal-window-container ${
        showConfirmationModal ? `show-modal` : `hide-modal`
      }`}
    >
      <p
        className={`confirmation-message ${
          confirmationMessage && `show-message`
        }`}
      >
        {confirmationMessage}
      </p>
      {confirmationState === 1 ? (
        <div className="confirmation-modal-container">
          <h1>Are you sure you want to delete this task?</h1>
          <div className="modal-window-buttons-container">
            <button
              type="button"
              className="modal-window-buttons"
              onClick={() => {
                setConfirmationMessage("Task has been deleted succesfully!");
                setTimeout(() => removeItem(), 1500);
              }}
            >
              YES
            </button>
            <button
              type="button"
              className="modal-window-buttons"
              onClick={() => setShowConfirmationModal(!showConfirmationModal)}
            >
              NO
            </button>
          </div>
        </div>
      ) : (
        <div className="confirmation-modal-container">
          <h1>Are you sure you want to complete this task?</h1>
          <div className="modal-window-buttons-container">
            <button
              type="button"
              className="modal-window-buttons"
              onClick={() => {
                setConfirmationMessage("Task has been mark completed!");
                setTimeout(() => handleDoneTasks(), 1500);
              }}
            >
              YES
            </button>
            <button
              type="button"
              className="modal-window-buttons"
              onClick={() => setShowConfirmationModal(!showConfirmationModal)}
            >
              NO
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConfirmationModal;
