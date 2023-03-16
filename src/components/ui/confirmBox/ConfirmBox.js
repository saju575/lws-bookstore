import React, { useState } from "react";
import "./ConfirmBox.css";

function ConfirmBox({ message, onConfirm, onCancel }) {
  const [isVisible, setIsVisible] = useState(true);

  function handleConfirm() {
    setIsVisible(false);
    onConfirm(true);
  }

  function handleCancel() {
    setIsVisible(false);
    onCancel(false);
  }

  return isVisible ? (
    <div className="confirm-box">
      <div className="message">{message}</div>
      <div className="buttons">
        <button className="yes button" onClick={handleConfirm}>
          Yes
        </button>
        <button className="no button" onClick={handleCancel}>
          No
        </button>
        <button className="close button" onClick={handleCancel}>
          &times;
        </button>
      </div>
    </div>
  ) : null;
}

export default ConfirmBox;
