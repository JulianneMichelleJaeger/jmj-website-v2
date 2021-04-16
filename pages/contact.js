import React from "react";
import Navbar from "../components/navbar";

const Contact = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="info-container" target="_blank">
        <h1>Contact</h1>
        <h2 id="contact-line">
          If you have a business inquiry or any other questions, please contact
          me!
        </h2>
        <a href="mailto:julithejaeger@gmail.com">
          <h3 className="contact">
            <img src="/mail-blue.png" className="icon" />{" "}
            julithejaeger@gmail.com
          </h3>
        </a>
        <a
          href="https://www.linkedin.com/in/julianne-jaeger-085964156/"
          target="_blank"
        >
          <h3 className="contact">
            <img src="/linkedin-blue.png" className="icon" />{" "}
            linkedin.com/in/julianne-jaeger-085964156/
          </h3>
        </a>
        <a href="https://my.indeed.com/p/juliannej-rumvnis" target="_blank">
          <h3 className="contact">
            <img src="/indeed-blue.png" className="icon" />{" "}
            my.indeed.com/p/juliannej-rumvnis
          </h3>
        </a>
        <a href="https://github.com/JulianneMichelleJaeger" target="_blank">
          <h3 className="contact">
            <img src="/github-blue.png" className="icon" />{" "}
            github.com/JulianneMichelleJaeger
          </h3>
        </a>
      </div>
    </div>
  );
};

export default Contact;
