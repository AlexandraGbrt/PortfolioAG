import React from "react";
import MyButton from "../components/Button";

const ContactForm = () => {
  return (
    <div className="wrapper">
      <form
        action="mailto:alexandra.gaubert95@gmail.com"
        method="POST"
        className="form"
        encType="text/plain"
      >
        <div className="inp">
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Votre nom"
            required
          />
        </div>

        <div className="inp">
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Votre email"
            required
          />
        </div>

        <div className="inp">
          <textarea
            name="message"
            className="input"
            placeholder="Votre message"
            required
          ></textarea>
        </div>

        <MyButton type="submit">Envoyer</MyButton>
      </form>
    </div>
  );
};

export default ContactForm;
