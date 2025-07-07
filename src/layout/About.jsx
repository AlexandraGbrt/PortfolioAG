import MyButton from "../components/Button";

const About = () => {
  return (
    <section id="about">
      <h1>Alexandra Gaubert, </h1>
      <h2>Intégratrice Web.</h2>
      <p>
        En formation chez OpenClassrooms, j’ai développé des compétences solides
        en HTML, CSS, JavaScript, React et Redux, ainsi que des connaissances en
        back-end avec Python et bases de données. Passionnée par la création
        d’interfaces intuitives, accessibles et performantes, je présente ici
        mes projets réalisés, où design et fonctionnalité se rencontrent.
        Curieuse et motivée, je continue d’explorer de nouvelles technologies
        pour évoluer vers le développement full stack.
      </p>
      {/* <button id="btn">Contact</button> */}
      <MyButton href="#contact">Contact</MyButton>
    </section>
  );
};

export default About;
