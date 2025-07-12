import React from "react";
import CardProjet from "../components/CardProjet";
import projets from "../data/projets.json";

const Projects = () => {
  return (
    <section id="projects">
      <h2 id="title">Mes Projets</h2>
      <div className="projet">
        {projets.map((projet, index) => (
          <CardProjet
            key={index}
            title={projet.title}
            description={projet.description}
            cover={projet.cover}
            // onClick={() => console.log(`Clic sur ${projet.title}`)}
            details={projet.details}
            tools={projet.tools}
            github={projet.github}
            images={projet.images}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
