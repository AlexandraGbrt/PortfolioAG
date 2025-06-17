import React from "react";
import MyButton from "../components/Button";

const Modal = ({ open, onClose, title, details, github, tools = [] }) => {
  if (!open) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-container">
        <div className="modal-content">
          <h3>{title}</h3>

          <p>{details}</p>

          <div className="tools">
            <p>Compétences utilisées :</p>
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
          <div className="modal-actions">
            <a href={github} target="_blank">
              <img
                src="/icons/github-logo.png"
                alt="GitHub"
                className="logoGH"
              />
            </a>

            <MyButton onClick={onClose}>Fermer</MyButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
