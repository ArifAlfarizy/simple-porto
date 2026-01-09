import React from "react";
import arifImg from "./assets/images/arif-img.svg"


const Resume = () => {
  return (
    <div>
      <section class="section-2">
        <div class="resume-container">
          <img
            class="arif-img"
            src={arifImg}
            alt="arif-picture"
          />
        </div>
        <h3 class="halo-text">Hello</h3>
        <p class="summary">
          I'm an undergraduate college student at UPNVJ University
          <br /> majoring in Informatics. My main focus is currently website
          development.
          <br /> I have a good knowledge both in front-end and back-end.
        </p>
      </section>
    </div>
  );
};

export default Resume;
