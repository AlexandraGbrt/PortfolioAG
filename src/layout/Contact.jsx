// import MyButton from "../components/Button";
import ContactForm from "../components/Form";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact </h2>
      <div className="wrapper">
        <ContactForm />
        <div>
          <a href="mailto:alexandra.gaubert95@gmail.com">E-Mail</a>|
          <a href="https://github.com/AlexandraGbrt" target="_blank">
            GitHub
          </a>{" "}
          |
          <a href="https://www.linkedin.com/in/alexandra-gbrt" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
