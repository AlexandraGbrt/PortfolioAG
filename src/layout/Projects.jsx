// const Projects = () => {
//   return (
//     <section id="projects">
//       <h2>Mes projets</h2>

//       <div className="project">
//         <h3>1. Gestionnaire de tâches (To-do App)</h3>
//         <p>
//           Une application React permettant de gérer des tâches : ajout,
//           modification, suppression et tri. L’état est géré avec Redux.
//         </p>
//         <ul>
//           <li>✔ React & Redux</li>
//           <li>✔ Composants réutilisables</li>
//           <li>✔ Responsive Design</li>
//         </ul>
//         <a href="https://github.com/tonpseudo/todo-app" target="_blank">
//           Voir le code
//         </a>{" "}
//         |
//         <a href="https://tonpseudo.github.io/todo-app" target="_blank">
//           Voir le site
//         </a>
//       </div>

//       <div className="project">
//         <h3>2. Site e-commerce simplifié</h3>
//         <p>
//           Mini site e-commerce avec pages produits, gestion du panier et
//           navigation. Optimisé pour le SEO avec structure HTML sémantique.
//         </p>
//         <ul>
//           <li>✔ React Router</li>
//           <li>✔ SEO Friendly</li>
//           <li>✔ UI Responsive</li>
//         </ul>
//         <a href="https://github.com/tonpseudo/ecommerce-app" target="_blank">
//           Voir le code
//         </a>{" "}
//         |
//         <a href="https://tonpseudo.github.io/ecommerce-app" target="_blank">
//           Voir le site
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import CardProjet from "../components/CardProjet";
import projets from "../data/projets.json";
// import skills from "../data/skills.json";

const Projects = () => {
  return (
    <section id="projects">
      <h2 id="title">Mes Projets</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {projets.map((projet, index) => (
          <CardProjet
            key={index}
            title={projet.title}
            description={projet.description}
            image={projet.image}
            onClick={() => console.log(`Tu as cliqué sur ${projet.title}`)}
            // skills={projet.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
