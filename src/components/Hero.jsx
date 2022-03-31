import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-image">
      <section className="hero-text">
        <h1 className="hero-title">Passion for a team?</h1>
        <p className="hero-subtitle">We can help share it!</p>
        <a className="heroButton heroButtonShop" href="/product">
          Shop
        </a>
      </section>
    </section>
  );
};

export default Hero;
