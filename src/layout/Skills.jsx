import skills from "../data/skills.json";

const Skills = () => {
  return (
    <section id="skills">
      <h2 id="title">Mes Compétences</h2>
      <ul className="skill">
        {/* <li>HTML</li>
        <li>CSS / SASS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>SEO</li>
        <li>Git/Github</li>
        <li>Responsive Design</li> */}

        {skills.map((skill, i) => (
          <li key={i}>
            <img src={`/icons/${skill.icon}`} alt={skill.name} width="24" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
