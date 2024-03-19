import React from "react";
import Navbar from "../components/navbar";

const Index = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="info-container">
        <h1>Hello!</h1>
        <p>
          My name is Julianne Blanc, and I am a web and software engineer
          located in Annapolis, Maryland.
        </p>
        <p>
          I have a Bachelor's degree in Computer Science from Towson University,
          and I am currently working as a software engineer at TechSource Inc.
          in Germantown, Maryland.
        </p>
        <p>
          Though I have experience in all aspects of programming, I am most
          passionate about front-end desgin and development. I have some
          background in graphic design, and I enjoy all parts of the front-end
          process, from creating mock-ups and layouts to implementing them with
          code.
        </p>
        <p>
          The languages and frameworks I most enjoy working in are HTML, CSS,
          ReactJS, Next.js, Node.js, and MySQL.
        </p>
        <p>Feel free to contact me if you would like to know more!</p>
        <button id="download" onClick={() => window.open("/blanc-resume.pdf")}>
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Index;
