import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./pagesCSS/Prestations.css";
import AnimatedLayout from "../components/AnimatedLayout";
import separation from "../assets/Rectangle 82.svg";
import cadre from "../assets/Rectangle 11.svg";
import illustration from "../assets/bonne_aventure.png";
import graphisme from "../assets/piste-à-finaliser.png";
import animation from "../assets/capture_ecran.png";

const prestations = [
  {
    title: "Illustration",
    image: illustration,
    alt: "Exemple d'illustration",
    description: "Création de portraits, de personnages originaux (character design) et d'univers visuels (concept art). Prestations indépendantes ou intégrées à un projet d'animation.",
  },
  {
    title: "Graphisme",
    image: graphisme,
    alt: "Exemple de graphisme",
    description:
      "Création d'identités visuelles (logos, univers graphiques, chartes graphiques) et mise en page de supports de communication imprimés ou numériques.",
  },
  {
    title: "Animation",
    image: animation,
    alt: "Exemple d'animation",
    description: "Création d'animations courtes (30 secondes à 1 minute) pour raconter, expliquer ou valoriser un projet. Prestation sur devis, adaptée aux besoins et aux différentes étapes de réalisation.",
  },
];

export default function Prestations() {
  const [tab, setTab] = useState(prestations[0]);

  return (
    <AnimatedLayout>
      <div>
        <section className="presta-hero">
          <p className="presta-intro">
            Pour toute commande et/ou demande
            <br />
            d'informations supplémentaires
          </p>

          <span className="presta-down" aria-hidden="true">
            ↓
          </span>

          <Link to="/contact" className="presta-button">
            Contact
          </Link>

          <p className="presta-tagline">Prestations</p>
          <span className="presta-arrow" aria-hidden="true" />
        </section>

        <section className="presta-separator">
          <img
            src={separation}
            alt="Separation Line"
            className="presta-separate"
          />
        </section>

        <section className="presta-type-tabs">
          <ul className="presta-list">
            {prestations.map(({ title, image, alt }) => (
              <li key={title} className="presta-card">
                <div className="presta-frame">
                  <img src={image} alt={alt} />
                </div>
                <button
                  className={`presta-button${tab.title === title ? " is-active" : ""}`}
                  onClick={() =>
                    setTab(prestations.find((p) => p.title === title))
                  }
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>

          <div className="presta-tab-panel">
            <div className="presta-tab-content">
              <h2 className="presta-tab-title">{tab.title}</h2>
              <p className="presta-tab-text">{tab.description}</p>
            </div>
          </div>
        </section>

        <section className="presta-conditions-wrap">
          <div className="presta-conditions">
            <img src={cadre} alt="" className="presta-conditions-bg" />
            <h2 className="presta-conditions-title">Conditions Générales :</h2>

            <ul className="presta-conditions-list">
              <li>
                Acompte payé en amont après la validation d'un devis client.
                (l'acompte n'est pas remboursable)
              </li>
              <li>Prix augmenté/doublé selon les demandes supplémentaires</li>
              <li>
                Maximum 3 demandes de modifications offertes, pour +, cela
                demandera un supplément de la part du client{" "}
                <small>
                  (du au temps de réalisation que cela rajoute au projet). (à
                  certaines conditions, temps, taille de la demande).
                </small>
              </li>
              <li>
                Les délais de réponses ne doivent pas dépasser + de 2 semaines,
                au dela de ce délais, la commande sera annulée.
              </li>
              <li>L'engagement doit être signé par le client</li>
              <li>
                Spécifier la nature du projet : est-ce un projet à but non
                lucratif, commercial, autre ?
              </li>
              <li>Me créditer lors de la réutilisation de l'oeuvre</li>
            </ul>

            <p className="presta-conditions-note">
              (Toute coopération entre le vendeur et le prestataire dois se
              faire dans le respect et la bienveillance, dans le cas contraire
              le vendeur se verra contraint d'annuler le projet).
            </p>

            {/* lien à adapter */}
            <Link to="/contact" className="presta-conditions-button">
              En savoir +
            </Link>
          </div>
        </section>
      </div>
    </AnimatedLayout>
  );
}
