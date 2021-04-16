import React from "react";
import Navbar from "../components/navbar";
import education from "../data/education.json";

const Education = () => {
  const educationItems = education.map((ed) => {
    return (
      <div>
        <h2>{ed.title}</h2>
        <h3>
          {ed.school} • {ed.timeframe}
        </h3>
        <p>{ed.description}</p>
      </div>
    );
  });

  return (
    <div className="app-container">
      <Navbar />
      <div className="info-container">
        <h1 id="education">Education</h1>
        {educationItems}
      </div>
    </div>
  );
};

export default Education;
