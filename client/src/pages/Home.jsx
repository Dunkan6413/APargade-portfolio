import React from "react";
import { Link } from "react-router-dom";
import "./pagesCSS/Home.css";
import logo from "../assets/Ang-Hell logo.svg";
import signature from "../assets/Ang-Hell logo.svg";
import separation from "../assets/Rectangle 82.svg";
import avatar from "../assets/pdp.png";
import ribbon from "../assets/Group 30.svg";
import AnimatedLayout from "../components/AnimatedLayout";
import SocialLinks from "../components/SocialLinks";

// Pour remplir un cadre : importer l'image, puis la passer dans `image`.
// ex: import illustration from "../assets/presta-illustration.png";
//     { title: "Illustration", image: illustration, ... }
const prestations = [
  { title: "Illustration", image: null, alt: "Exemple d'illustration" },
  { title: "Graphisme", image: null, alt: "Exemple de graphisme" },
  { title: "Animation", image: null, alt: "Exemple d'animation" },
];

export default function Home() {
  return (
    <AnimatedLayout>
      <div>
        <section className="home-hero">
          <img src={logo} alt="Logo" className="home-logo" />

          <p className="home-tagline">
            Animation 2D · Illustration · Graphisme
          </p>

          <SocialLinks
            names={["instagram", "linkedin", "behance", "youtube"]}
            className="home-social"
          />
        </section>

        <section className="home-separator">
          <img
            src={separation}
            alt="Separation Line"
            className="home-separate"
          />
        </section>

        <section className="home-about-section">
          <div className="home-about-left">
            <h2 className="home-about-title">Qui suis-je ?</h2>
            <img src={avatar} alt="" className="home-about-avatar" />
            <Link to="/about" className="home-about-button">
              À propos
            </Link>
          </div>

          <div className="home-about-right">
            <img src={ribbon} alt="" className="home-about-ribbon" />

            <div className="home-about-content">
              <p>
                Créatrice de personnages en tout genres et de recherches
                visuelles,{" "}
                <em>
                  (Plus communément appelé{" "}
                  <strong>Character Design / Concept Art</strong>)
                </em>{" "}
                j'offre des prestations adaptées à une demande grâce à un
                univers graphique qui m'est propre, avec une affinité pour le
                style cartoon.
              </p>
              <p>
                Je produis des réalisations courtes pour des projets en{" "}
                <strong>animation 2D</strong>.
              </p>
              <p>
                Mes compétences en <strong>graphisme</strong> me permettent de
                présenter clairement leurs projets à mes clients. En créant une
                cohérence visuelle, je propose la définition d'une identité
                graphique propre à leurs besoins.
              </p>

              <div className="home-about-footer">
                <p className="home-about-signature">Ang-Hell</p>
                {/* <img src={signature} alt="Signature AngHell" className="whoAmI_signature" /> */}
              </div>
            </div>
          </div>
        </section>

        <section className="home-presta-section">
          <h2 className="home-presta-title">Prestations</h2>

          <ul className="home-presta-list">
            {prestations.map(({ title, image, alt }) => (
              <li key={title} className="home-presta-card">
                <div
                  className={`home-presta-frame${image ? "" : " is-empty"}`}
                >
                  {image && <img src={image} alt={alt} />}
                </div>
                <Link to="/prestation" className="home-presta-button">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </AnimatedLayout>
  );
}