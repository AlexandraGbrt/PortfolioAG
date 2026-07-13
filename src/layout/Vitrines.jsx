import React from "react";
import CardProjet from "../components/CardProjet";
import vitrines from "../data/vitrines.json";

const Vitrines = () => {
  return (
    <section id="vitrines">
      <h2 id="title">Mes Créations</h2>
      <div className="projet">
        {vitrines.map((projet, index) => (
          <CardProjet key={index} {...projet} />
        ))}
      </div>
    </section>
  );
};

export default Vitrines;
