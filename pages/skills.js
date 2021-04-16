import React from "react";
import Navbar from "../components/navbar";
import skills from "../data/skills.json";

const Skills = () => {
  const skillItems = skills.map((category) => {
    const categoryItems1 = category.items1.map((item) => {
      return (
        <h3>
          {item.name}
          <span className="level">
            <span className="filled">★</span>
            <span className={item.level >= 2 && "filled"}>★</span>
            <span className={item.level >= 3 && "filled"}>★</span>
            <span className={item.level >= 4 && "filled"}>★</span>
            <span className={item.level === 5 && "filled"}>★</span>
          </span>
        </h3>
      );
    });
    const categoryItems2 = category.items2.map((item) => {
      return (
        <h3>
          {item.name}
          <span className="level">
            <span className="filled">★</span>
            <span className={item.level >= 2 && "filled"}>★</span>
            <span className={item.level >= 3 && "filled"}>★</span>
            <span className={item.level >= 4 && "filled"}>★</span>
            <span className={item.level === 5 && "filled"}>★</span>
          </span>
        </h3>
      );
    });
    return (
      <div className="category-container">
        <h2>{category.name}</h2>
        <div className="items-container">
          <div className="items-1-container">{categoryItems1}</div>
          <div className="items-2-container">{categoryItems2}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="app-container">
      <Navbar />
      <div className="info-container">
        <h1>Skills</h1>
        {skillItems}
      </div>
    </div>
  );
};

export default Skills;
