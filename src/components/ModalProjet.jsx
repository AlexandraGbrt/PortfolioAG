import React from "react";
import MyButton from "../components/Button";

const Modal = ({ open, onClose, title, details, tools = [] }) => {
  if (!open) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-container">
        <div className="modal-content">
          <h3>{title}</h3>
          <div className="tools">
            {tools.map((tool, i) => (
              <img
                key={i}
                src={`/icons/${tool.icon}`}
                alt={tool.name}
                title={tool.name}
                width={24}
                height={24}
              />
            ))}
          </div>
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
