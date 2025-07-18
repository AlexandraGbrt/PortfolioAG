import skills from "../data/skills.json";
import Banner from "../components/Banner";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <h2 id="title">Mes Compétences</h2>
        <ul className="skill">
          {skills.map((skill, i) => (
            <li key={i}>
              <img
                src={`${import.meta.env.BASE_URL}icons/${skill.icon}`}
                alt={skill.name}
                width="24"
              />
            </li>
          ))}
        </ul>
      </section>
      <Banner text="• HTML • CSS • SASS • JS • REACT • GIT • MATERIAL UI • MONGODB • SWAGGER/API •" />
    </>
  );
};

export default Skills;
