import React, { useState } from "react";
import Modal from "./ModalProjet";

const CardProjet = ({
  title,
  description,
  cover,
  details,
  github,
  tools = [],
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card-projet" onClick={() => setOpen(true)}>
        <div className="card-image-container">
          <img
            src={cover}
            alt={`Cover du projet ${title}`}
            className="card-image"
          />
          <div className="overlay">{/* <h3>{title}</h3> */}</div>
        </div>

        <div className="card-content">
          <p>{description}</p>
          {/* <a href={github}>GitHub du projet</a> */}
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        details={details}
        tools={tools}
        github={github}
      />
    </>
  );
};

export default CardProjet;
