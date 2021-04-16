import React from "react";
import Navbar from "../components/navbar";
import experience from "../data/experience.json";

const Experience = () => {
  const experienceItems = experience.map((exp) => {
    return (
      <div>
        <h2>{exp.position}</h2>
        <h3>
          {exp.company} • {exp.timeframe}
        </h3>
        <p>{exp.description}</p>
      </div>
    );
  });

  return (
    <div className="app-container">
      <Navbar />
      <div className="info-container">
        <h1 id="experience">Experience</h1>
        {experienceItems}
      </div>
    </div>
  );
};

export default Experience;
