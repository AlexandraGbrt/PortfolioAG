import MyButton from "../components/Button";

const About = () => {
  return (
    <section id="about">
      <h1>Hi, I'm Alexandra </h1>
      <h2>Intégrateur Web.</h2>
      <p>
        En formation chez Openclassrooms où j’ai appris à créer des sites web
        dynamiques et performants. J’ai des compétences solides en HTML, CSS,
        JavaScript, React et Redux, ainsi qu’en SEO, gestion de projet et bases
        de données. J’aime concevoir des interfaces intuitives et accessibles,
        et je suis toujours curieux d’apprendre de nouvelles technologies.
      </p>
      {/* <button id="btn">Contact</button> */}
      <MyButton href="#contact">Contact</MyButton>
    </section>
  );
};

export default About;
