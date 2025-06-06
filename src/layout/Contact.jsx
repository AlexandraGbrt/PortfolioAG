import MyButton from "../components/Button";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>N’hésitez pas à me contacter via ce formulaire ou sur mes réseaux !</p>
      <form action="mailto:tonemail@example.com" method="POST">
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <textarea placeholder="Votre message" required></textarea>
        {/* <button type="submit" id="btn">
          Envoyer
        </button> */}
        <MyButton type="submit">Envoyer</MyButton>
      </form>
      <div>
        <a href="https://github.com/AlexandraGbrt" target="_blank">
          GitHub
        </a>{" "}
        |
        <a href="https://www.linkedin.com/in/alexandra-gbrt" target="_blank">
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
