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
  const getConfirmationHeader = () => {
    return confirmationState === 1 ? "delete" : "complete";
  };
  const getConfirmationMessage = () => {
    return confirmationState === 1
      ? "Task has been deleted successfully!"
      : "Task has been marked completed!";
  };
  const handleConfirmButton = (d) => {
    const buttonType = d.target.innerHTML;
    if (buttonType === "YES") {
      setConfirmationMessage(getConfirmationMessage());
      setTimeout(
        () => (confirmationState === 1 ? removeItem() : handleDoneTasks()),
        1500
      );
    } else {
      setShowConfirmationModal(!showConfirmationModal);
    }
  };
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
      <div className="confirmation-modal-container">
        <h1>Are you sure you want to {getConfirmationHeader()} this task?</h1>
        <div className="modal-window-buttons-container">
          <button
            id="my_id"
            type="button"
            className="modal-window-buttons"
            onClick={(d) => {
              handleConfirmButton(d);
            }}
          >
            YES
          </button>
          <button
            type="button"
            className="modal-window-buttons"
            onClick={(d) => {
              handleConfirmButton(d);
            }}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
