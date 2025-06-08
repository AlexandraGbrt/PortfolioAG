import React, { useState } from "react";
import Modal from "./ModalProjet";

const CardProjet = ({ title, description, image, details, tools = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card-projet" onClick={() => setOpen(true)}>
        <div className="card-image-container">
          <img
            src={image}
            alt={`Image du projet ${title}`}
            className="card-image"
          />
          <div className="overlay">
            <h3>{title}</h3>
          </div>
        </div>

        <div className="card-content">
          <p>{description}</p>
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        details={details}
        tools={tools}
      />
    </>
  );
};

export default CardProjet;
