import React from "react";
import "./pagesCSS/Home.css";
import logo from "../assets/Ang-Hell logo.svg";
import separation from "../assets/Rectangle 82.svg";
import avatar from "../assets/pdp.png"
import ribbon from "../assets/Group 30.svg"
import {
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaInstagram, url: "https://www.instagram.com/ang__hell/", label: "Instagram" },
  { icon: FaLinkedinIn, url: "https://linkedin.com/in/tonprofil", label: "LinkedIn" },
  { icon: FaBehance, url: "https://behance.net/tonprofil", label: "Behance" },
  { icon: FaYoutube, url: "https://youtube.com/@tonprofil", label: "YouTube" }
];

export default function Home() {
  return (
    <div>
      <section className="home-hero">
        <img src={logo} alt="Logo" className="home-logo" />

        <p className="home-tagline">Animation 2D · Illustration · Graphisme</p>

        <ul className="home-social">
          {socialLinks.map(({ icon: Icon, url, label }) => (
            <li key={label}>
              <a
                href={url}
                target="_blank"
                aria-label={label}
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="home-separator">
        <img src={separation} alt="Separation Line" className="home-separate" />
      </section>
      <section className="home-about-section">
        <div className="home-about-left">
          <h2 className="home-about-title">Qui suis-je ?</h2>
          <img src={avatar} alt="" className="home-about-avatar" />
          <a href="/about" className="home-about-button">À propos</a>
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
            <p className="home-about-signature">_Ang-Hell</p>
          </div>
        </div>
      </section>
    </div>
  );
}
