import React from "react";
import sunsetImg from "../assets/sunset-img.svg";
import cloudImg from "../assets/cloud-img.svg";

const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <img
          className="sunset-img"
          src={sunsetImg}
          alt="sunset image"
        />
        <img
          className="cloud-img"
          src={cloudImg}
          alt="cloud image"
        />
        <div className="title-text">
          <h1>I'm Alfarizy</h1>
          <h3>A programmer.</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
