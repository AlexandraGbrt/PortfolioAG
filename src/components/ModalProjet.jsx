import React from "react";
import MyButton from "../components/Button";

const Modal = ({ open, onClose, title, details }) => {
  if (!open) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-container">
        <div className="modal-content">
          <h3>{title}</h3>
          <p>{details}</p>
          <div className="modal-actions">
            {/* <button onClick={onClose}>Fermer</button> */}
            <MyButton onClick={onClose}>Fermer</MyButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
