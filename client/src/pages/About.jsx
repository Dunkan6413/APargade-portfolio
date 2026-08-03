import React from "react";
import "./pagesCSS/About.css";
import separation from "../assets/separationLine.svg";

export default function About() {
  return (
    <div>
      <section className="about-hero">
        <h1 className="about-catchphrase">
          "Je ne cherche pas le beau, je cherche le vivant"
        </h1>

        <p className="about-tagline">À propos...</p>
      </section>

      <section className="about-separator">
        <img
          src={separation}
          alt="Separation Line"
          className="about-separate"
        />
      </section>
    </div>
  );
}
